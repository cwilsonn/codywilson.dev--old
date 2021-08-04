import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: {
      isOpen: true
    }
  },
  mutations: {
    // Menu
    TOGGLE_MENU(state) { state.menu.isOpen = !state.menu.isOpen },
    OPEN_MENU(state) { state.menu.isOpen = true },
    CLOSE_MENU(state) { state.menu.isOpen = false }
  }
})
