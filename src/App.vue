<template>
  <div id="app">
    <transition name="slide">
      <router-view />
    </transition>
    <LoadingScreen />
  </div>
</template>

<script>
  import LoadingScreen from '@/components/LoadingScreen.vue'
  export default {
    components: {
      LoadingScreen
    },
    created() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.$store.dispatch({
          type: 'addLocation',
          position
        })
      })
    }
  }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Baloo&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: $bodyColor;
}
</style>
