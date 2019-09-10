<template>
<div class="city-container">
  <div class="city-header">
    <div class="navback-title-container">
      <div class="icon-container" v-on:click="navBackToHome">
        <v-icon name="chevron-left" />
      </div>
      <h1>{{ this.city.name }}</h1>
    </div>
    <div class="flag-icon" :class="countryClass"></div>
  </div>
  <div class="city-content">
    <div class="city-details">
      <h2>Details</h2>
      <div class="details-card">
        <div class="value-container">
          <v-icon name="tint" />
          <span>humidity: <strong>{{ this.city.main.humidity }}</strong></span>
        </div>
        <div class="value-container">
          <v-icon name="thermometer-half" />
          <span>temperature: <strong>{{ this.city.main.temp }}</strong></span>
        </div>
        <div class="value-container">
          <v-icon name="gem" />
          <span>pressure: <strong>{{ this.city.main.pressure }}</strong></span>
        </div>
        <div class="value-container">
          <v-icon name="wind" />
          <span>wind speed: <strong>{{ this.city.wind.speed }}</strong></span>
        </div>
      </div>
    </div>

    <div class="city-details">
      <h2>Map</h2>
      <l-map style="height: 400px; width: 100%; border-radius: 20px;" :zoom="zoom" :center="coords">
        <l-tile-layer :url="url"></l-tile-layer>
      </l-map>
    </div>
  </div>
</div>
</template>

<script>
import { LMap, LTileLayer } from 'vue2-leaflet';
import { mapGetters } from 'vuex'

export default {
  components: { LMap, LTileLayer },
  data() {
    return {
      url: 'http://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png ',
      zoom: 12,
    }
  },
  computed: {
    ...mapGetters([
      'getCityById'
    ]),
    countryClass() {
      return this.city.sys ? `flag-icon-${this.city.sys.country.toLowerCase()}` : ''
    },
    city() {
      return this.getCityById(this.$route.params.id)
    },
    coords() {
      return [this.city.coord.lat, this.city.coord.lon]
    }
  },
  methods: {
    navBackToHome() {
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>

<style lang="scss">
.city-container {
    .city-header {
        background-color: $white;
        display: flex;
        height: 90px;
        justify-content: space-between;
        align-items: center;
        padding: 0 30px 0 20px;
        margin-bottom: 20px;
        box-shadow: 0 3px 8px -2px gray;
        .navback-title-container {
            display: flex;
            align-items: center;
            h1 {
                font-size: 23px;
                margin-left: 10px;
            }
            .icon-container {
                margin-top: 5px;
                svg {
                    cursor: pointer;
                }
            }
        }
    }
    .city-content {
        padding: 0 20px;
        @include desktop {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        .city-details {
          width: 100%;
          @include desktop {
            width: 49%;
          }
          h2 {
              border-bottom: 1px solid lightgray;
              padding-bottom: 5px;
          }
          .details-card {
              margin-bottom: 20px;
              width: 100%;
              padding: 20px;
              background-color: $white;
              box-sizing: border-box;
              border-radius: 20px;
              .value-container {
                  font-size: 17px;
                  span {
                      margin-left: 10px;
                  }
              }
          }
        }
        .leaflet-control-container {
            display: none;
        }
        .leaflet-control-zoom {
            display: none;
        }
    }
}
</style>
