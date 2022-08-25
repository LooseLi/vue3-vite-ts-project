import { ComponentCustomProperties, State } from 'vue'
import { Store } from 'vuex'
import { State } from './store/index'

declare module '@vue/runtime-core' {
  // interface State {
  //   count: number
  // }
}

interface ComponentCustomProperties {
  $store: Store<State>
}