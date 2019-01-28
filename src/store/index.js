import Vue from "vue"
import Vuex from "Vuex"
import { mutations } from "./mutations"
import * as actions from "./actions"

Vue.use(Vuex)

const state = {
  user: {}
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
