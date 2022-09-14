import { createStore } from 'vuex'

const state = {
  count: 100,
  isCollapse: false
}

export type State = typeof state

export const store = createStore<State>({
  state,
  mutations: {
    setIsCollapse(state, payload) {
      state.isCollapse = payload
    }
  }
})

export default store