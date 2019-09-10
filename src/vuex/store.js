import Vue from 'vue'
import Vuex from 'vuex'

import { actions } from '@/vuex/actions'
import { getters } from '@/vuex/getters'
import { mutations } from '@/vuex/mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAppLoaded: false,
    locations: [],
    settings: {},
    error: {}
  },
  mutations,
  actions,
  getters
})
