<template>
<div class="home">
  <HomeHeader />
  <div class="cities-container">
    <CityCard v-bind:key="location.id" v-for="(location) in locations"
              :name="location.name"
              :id="location.id"
              :weather="location.weather[0].main"
              :temperature="location.main.temp"
              :perfect="location.perfect"
              :country="location.sys.country"/>
  </div>
</div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue'
import CityCard from '@/components/CityCard.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    HomeHeader,
    CityCard
  },
  computed: {
    ...mapGetters({
      locations: 'locations',
      error: 'getError'
    })
  },
  watch: {
    error(err) {
      this.$toasted.show(err.message, {
        type : 'error',
        duration: 5000
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .cities-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding-top: 40px;
    justify-content: center;
    @include desktop {
      justify-content: flex-start;
    }
  }
</style>
