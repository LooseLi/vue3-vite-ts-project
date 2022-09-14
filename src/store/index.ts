import { createStore } from 'vuex'

export interface State {
  count: number,
  isCollapse: boolean
}

const store = createStore({
  state() {
    return {
      count: 100,
      isCollapse: false
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    setIsCollapse(state, payload) {
      state.isCollapse = payload
    }
  }
})

export default store