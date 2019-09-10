import { ADD_LOCATION, UPDATE_LOCATIONS, UPDATE_THRESHOLD, ERROR_OCCURED } from '@/vuex/mutationTypes'

export const mutations = {
  [ADD_LOCATION](state, payload) {
    state.locations.push(payload.location)
  },
  [UPDATE_LOCATIONS](state, payload) {
    state.locations = payload.locations
  },
  [UPDATE_THRESHOLD](state, payload) {
    state.settings = { ...state.settings, ...payload.threshold }
  },
  [ERROR_OCCURED](state, payload){
    state.error = payload.error
  }
}
