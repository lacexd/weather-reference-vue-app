<template>
<div class="city-card-container" v-on:click="navToPage">
  <WeatherAnimation :weather="weather"/>
  <div class="info-container">
    <div v-if="perfect" class="perfect-tag">
      such a perfect day, i'm gonna spend it with... coding
    </div>
    <div class="temperature"> {{ temperature }}
      <div class="temperature-sign"></div>
    </div>
    <div class="location-container">
      <div class="name"> {{ name }} </div>
      <div class="flag-icon" :class="countryClass"></div>
    </div>
  </div>
  <div class="city-card-cover">
    <button class="button button-details">
      <v-icon name="info-circle" />
    </button>
    <button id="button" class="button button-delete" v-on:click="deleteCity">
      <v-icon id="button" name="trash" />
    </button>
  </div>
</div>
</template>

<script>
import WeatherAnimation from '@/components/WeatherAnimation.vue'
import { weatherTypes } from '@/common/static'
import { mapActions } from 'vuex'


export default {
  name: 'CityCard',
  components: {
    WeatherAnimation
  },
  props: {
    name: {
      type: String,
      default: () => '',
      required: true
    },
    temperature: {
      type: Number,
      default: () => 0,
      required: true
    },
    country: {
      type: String,
      default: () => '',
      required: true
    },
    weather: {
      type: String,
      default: () => 'Clear',
      required: true,
      validator: (value) =>  weatherTypes.includes(value)
    },
    id: {
      type: Number,
      required: true
    },
    perfect: {
      type: Boolean,
      required: true,
      default: () => false
    }
  },
  methods: {
    ...mapActions([
      'removeLocation'
    ]),
    navToPage(evt) {
      if (evt.target.id !== 'button' && event.target.nodeName !== 'path') {
        this.$router.push({
          name: 'city',
          params: {
            id: this.id
          }
        })
      }
    },
    deleteCity() {
      this.removeLocation({ id: this.id })
    }
  },
  computed: {
    countryClass() {
      return `flag-icon-${this.country.toLowerCase()}`
    }
  }
}
</script>

<style scoped lang="scss">
.flag-icon {
    width: 40px;
    height: 40px;
}

.city-card-container {
    background-color: $white;
    cursor: pointer;
    width: 270px;
    height: 270px;
    margin-bottom: 20px;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.5s;
    position: relative;
    @include desktop {
      margin-left: 15px;
    }
    &:hover .city-card-cover {
        opacity: 1;
        visibility: visible;
    }
    .city-card-cover {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: $cardCover;
        border-radius: 20px;
        visibility: hidden;
        opacity: 0;
        z-index: 199;
        transition: visibility 0.3s, opacity 0.3s linear;
        transition-delay: 0.2s;
        display: flex;
        justify-content: space-around;
        padding: 30px 10px 30px 0;
        box-sizing: border-box;
        .button {
            cursor: pointer;
            background-color: $white;
            display: flex;
            height: 50px;
            width: 50px;
            border-radius: 50%;
            align-items: center;
            justify-content: center;
            border: none;
            transition: all 300ms linear;
            &:hover {
                background-color: $skyblue;
                color: $white;
            }
            &.button-fav {
                &:hover {
                    background-color: $seaweed;
                }
            }
            &.button-delete {
                &:hover {
                    background-color: $red;
                }
            }
        }
    }
    .info-container {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0 22px 10px 20px;
        box-sizing: border-box;
        .perfect-tag {
            width: 50%;
            background-color: $perfectTagColor;
            font-weight: bold;
            color: $white;
            margin-bottom: 68px;
            padding: 10px;
            font-size: 13px;
            border-radius: 15px 0;
            text-align: justify;
            position: absolute;
            top: -140px;
            left: 0;
        }
        .temperature {
            display: flex;
            font-family: 'Baloo', cursive;
            font-size: 50px;
            animation: degree-appear 500ms ease-out forwards;
            .temperature-sign {
                height: 8px;
                width: 8px;
                margin-top: 20px;
                border-radius: 50%;
                border: 4px solid black;
            }
        }
        .location-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
}
</style>
