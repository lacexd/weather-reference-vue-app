<template>
<div class="search-list-container" v-bind:class="{ 'pop-up-on-focus': isSearchActive }">
  <input v-model="searchTerm" v-on:focus="inputFocused" v-on:blur="closeSearch" v-on:esc="closeSearch" v-bind:class="{ 'input-width': isSearchActive }" class="input" placeholder="Search for cities" />
  <div class="search-result-container">
    <div v-bind:key="index" v-for="(city, index) in searchResults" class="city-label" v-on:click="addNewLocation(city)">
      {{ city }}
    </div>
  </div>
  <div class="settings-icon" :class="disappearOnSearch" v-on:click="navToSettings">
    <v-icon name="cog" />
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HomeHeader',
  data() {
    return {
      isSearchActive: false,
      searchTerm: ''
    }
  },
  computed: {
    ...mapGetters([
      'getCitiesByKeyword'
    ]),
    searchResults() {
      if (this.searchTerm.length >= 3) {
        return this.getCitiesByKeyword(this.searchTerm);
      }
      return []
    },
    disappearOnSearch() {
      if (this.isSearchActive) {
        return 'hide-cog-on-search'
      }
      return ''
    }
  },
  methods: {
    ...mapActions([
      'addLocation'
    ]),
    navToSettings() {
      this.$router.push({
        name: 'settings'
      })
    },
    inputFocused() {
      this.isSearchActive = true
    },
    closeSearch() {
      //timeout is needed because otherwise the blur event is triggered earlier that the click event
      setTimeout(function() {
        this.isSearchActive = false
        this.searchTerm = ''
      }.bind(this), 100)
    },
    addNewLocation(cityName) {
      this.searchTerm = ''
      this.searchActive = false
      this.addLocation({ name: cityName })
    }
  }
}
</script>

<style scoped lang="scss">
.search-list-container {
    padding: 20px 30px;
    background: white;
    box-sizing: border-box;
    display: flex;
    overflow: auto;
    position: relative;
    flex-direction: column;
    box-shadow: 0 3px 8px -2px gray;
    .settings-icon {
        position: absolute;
        top: 35px;
        cursor: pointer;
        right: 20px;
        transition: all 0.3s;
        &:hover {
            color: $gray;
        }
        &.hide-cog-on-search {
            display: none;
        }
    }
    &.pop-up-on-focus {
        position: absolute;
        z-index: 132;
        width: 100%;
        height: 100%;
    }
    .search-result-container {
        width: 100%;
        .city-label {
            height: 50px;
            padding: 20px 0 20px 15px;
            font-family: 'Baloo', cursive;
            box-sizing: border-box;
            width: 100%;
            display: flex;
            align-items: center;
            border-bottom: 1px solid lightgray;
            cursor: pointer;
            transition: all 0.4s ease-out;
            &:hover {
                background-color: $skyblue;
            }
        }
    }
    .input {
        width: 30%;
        border: 1px solid gray;
        border-radius: 5px;
        min-height: 50px;
        padding: 0 20px;
        box-sizing: border-box;
        transition: width 300ms ease;
    }
    .input-width {
        width: 100%;
    }
}
</style>
