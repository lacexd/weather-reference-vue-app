<template>
<div class="settings-container">
  <div class="settings-header">
    <div class="icon-container" v-on:click="navBackToHome">
      <v-icon name="chevron-left" />
    </div>
    <h1> settings </h1>
  </div>
  <div class="settings-content">

    <div class="settings-card">
      <h4>temperature</h4>
      <vue-slider v-on:drag-end="thresholdUpdated('temperature')" v-model="settings.temperature" :min="-60" :max="60" :enable-cross="false"></vue-slider>
      <h4>humidity</h4>
      <vue-slider v-on:drag-end="thresholdUpdated('humidity')" v-model="settings.humidity" :min="0" :max="100" :enable-cross="false"></vue-slider>
      <h4>wind</h4>
      <vue-slider v-on:drag-end="thresholdUpdated('wind')" v-model="settings.wind" :min="0" :max="100" :enable-cross="false"></vue-slider>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'getSettings'
    ]),
    settings() {
      return this.getSettings()
    }
  },
  methods: {
    ...mapActions([
      'modifyThreshold'
    ]),
    navBackToHome() {
      this.$router.push({ name: 'home' })
    },
    thresholdUpdated(type) {
      this.modifyThreshold({
        prop: type,
        value: this.settings[type]
      })
    }
  }
}
</script>

<style scoped lang="scss">
.settings-container {
    .settings-header {
        background-color: $white;
        display: flex;
        height: 90px;
        justify-content: space-between;
        align-items: center;
        padding: 0 30px 0 20px;
        margin-bottom: 20px;
        box-shadow: 0 3px 8px -2px gray;
        .icon-container {
          cursor: pointer;
        }
    }
    .settings-content {
      padding: 0px 20px 0px 20px;
      box-sizing: border-box;
      @include desktop {
        width: 100%;
        display: flex;
        justify-content: center;
      }
        .settings-card {
            margin-top: 20px;
            width: 100%;
            padding: 20px 20px 40px 20px;
            background-color: $white;
            box-sizing: border-box;
            border-radius: 20px;
            @include desktop {
              width: 50%;
            }
            .select {
                margin-top: 20px;
            }
        }
    }
}
</style>
