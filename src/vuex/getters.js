//i know this is ugly but since it was provided by openweather like this and we don't have a backend i had to import it like this
import cities from '../assets/data/cities.json'

export const getters = {
    isAppLoaded: state => state.isAppLoaded,
    locations: state => state.locations,
    getCitiesByKeyword: () => (keyword) => [...new Set(cities.filter(cityName => cityName.toUpperCase().indexOf(keyword.toUpperCase()) > -1).sort())],
    getCityById: (state) => (id) => state.locations.find((loc) => loc.id === id),
    getSettings: (state) => () => ['temperature', 'humidity', 'wind'].reduce((res, key) => {
      state.settings[key] ? res[key] = state.settings[key] : res[key] = [0, 0]
      return res;
    }, {}),
    getError: (state) => state.error
  }
