import { createStore } from 'vuex'

export interface State {
  count: number
}

const store = createStore({
  state() {
    return {
      count: 100
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})

export default store