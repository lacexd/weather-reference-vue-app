import { getURL, getLocationsBasedOnThreshold, isLocationPerfect, isLocationInTheList } from '../common/helpers'
import { ADD_LOCATION, UPDATE_LOCATIONS, UPDATE_THRESHOLD, ERROR_OCCURED } from '@/vuex/mutationTypes'

export const actions = {
  addLocation({ commit }, payload) {
    fetch(getURL(payload))
      .then((data) => { return data.json() })
      .then((location) => {
        if(isLocationInTheList(this.state.locations, location)) {
          location.perfect = isLocationPerfect(location, this.state.settings)
          commit({ type: ADD_LOCATION, location })
        }
      })
      .catch(() => {
        const { name } = payload;
        const error = {
          message: `Failed to fetch the weather of ${name}`
        }
        commit({ type: ERROR_OCCURED, error})
      })
  },
  removeLocation({ commit }, payload) {
    const locations = this.state.locations.filter(location => location.id !== payload.id)
    commit({ type: UPDATE_LOCATIONS, locations })
  },
  modifyThreshold({ commit }, payload) {
    const threshold = {}
    threshold[payload.prop] = payload.value
    commit({
      type: UPDATE_THRESHOLD,
      threshold
    })
    const locations = getLocationsBasedOnThreshold(this.state.locations, this.state.settings)
    commit({
      type: UPDATE_LOCATIONS,
      locations
    })
  }
}
