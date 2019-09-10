<template>
<div class="weather-icon" :class="weatherClass"></div>
</template>

<script>
import { weatherTypes } from '@/common/static'
export default {
  name: 'WeatherAnimation',
  props: {
    weather: {
      type: String,
      required: true,
      default: () => 'Clear',
      validator: (value) =>  weatherTypes.includes(value)
    }
  },
  computed: {
    weatherClass() {
      switch (this.weather) {
        case 'Thunderstorm':
          return 'rain-cloud'
        case 'Drizzle':
          return 'rain-cloud'
        case 'Rain':
          return 'rain-cloud'
        case 'Snow':
          return 'snow'
        case 'Clear':
          return 'sun'
        default:
          return 'clouds'
      }
    }
  }
}
</script>

<style scoped lang="scss">

.weather-icon {
    position: relative;
    width: 50px;
    height: 50px;
    top: 0;
    float: right;
    margin: 40px 40px 0 0;

    &.sun {
        background: $sun;
        border-radius: 50%;
        box-shadow: rgba(255,255,0,0.1) 0 0 0 4px;
        animation: light 800ms ease-in-out infinite alternate;
    }

    &.rain-cloud {
        margin-right: 60px;
        background: darken($cloud, 5%);
        border-radius: 20px;
        width: 25px;
        height: 25px;
        box-shadow: $cloud 24px -6px 0 2px, $cloud 10px 5px 0 5px, $cloud 30px 5px 0 2px, $cloud 11px -8px 0 -3px, $cloud 25px 11px 0 -1px;

        &:after {
            content: "";
            position: absolute;
            border-radius: 10px;
            background-color: transparent;
            width: 4px;
            height: 12px;
            left: 0;
            top: 31px;
            transform: rotate(30deg);
            animation: rain 800ms ease-in-out infinite alternate;
        }
    }

    &.clouds {
        margin-right: 60px;
        background: darken($cloud, 5%);
        border-radius: 20px;
        width: 25px;
        height: 25px;
        box-shadow: darken($cloud, 5%) 24px -6px 0 2px, darken($cloud, 5%) 10px 5px 0 5px, darken($cloud, 5%) 30px 5px 0 2px, darken($cloud, 5%) 11px -8px 0 -3px, darken($cloud, 5%) 25px 11px 0 -1px;
    }

    &.snow {
        margin-right: 60px;
        background: darken($cloud, 5%);
        border-radius: 20px;
        width: 25px;
        height: 25px;
        box-shadow: darken($cloud, 5%) 24px -6px 0 2px, darken($cloud, 5%) 10px 5px 0 5px, darken($cloud, 5%) 30px 5px 0 2px, darken($cloud, 5%) 11px -8px 0 -3px, darken($cloud, 5%) 25px 11px 0 -1px;
        &:after {
            content: "";
            position: absolute;
            border-radius: 10px;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            left: 0;
            top: 31px;
            transform: rotate(30deg);
            animation: rain 800ms ease-in-out infinite alternate;
        }
    }
}
</style>
