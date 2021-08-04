// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '@/layouts/Default.vue'
import Vuex from 'vuex'
import './assets/css/headings.css'
// import store from '@/store'

export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.use(Vuex)

  appOptions.store = new Vuex.Store({
    state: {
      menu: {
        isOpen: true,
        button: {
          visibility: 'hide'
        }
      }
    },
    mutations: {
      // Menu
      TOGGLE_MENU(state) {
        state.menu.isOpen = !state.menu.isOpen
        console.log(`menu toggled from ${!state.menu.isOpen} to ${state.menu.isOpen}`)
      },
      OPEN_MENU(state) { state.menu.isOpen = true },
      CLOSE_MENU(state) { state.menu.isOpen = false },
      // Menu Button Visibility
      SET_MENU_BUTTON_VISIBILITY(state, mode) { state.menu.button.visibility = mode }
    }
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
