import * as types from "./mutation-types"

export const mutations = {
  [types.SIGN_IN](state, user_payload){
    state.user = user_payload
  },
  [types.SIGN_OUT](state){
    state.user = {}
  },
  [types.SET_EVENTS](state, events_payload){
    state.events = events_payload
  },
  [types.CANCEL_EVENT](state, events_payload){
    // state.events.splice(state.events.indexOf(events_payload), 1) //delete only last element
  }
}
