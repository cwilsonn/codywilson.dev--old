// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '@/layouts/Default.vue'
import Vuex from 'vuex'
import './assets/css/headings.css'
// import store from '@/store'

export default function (Vue, { router, head, isClient, appOptions }) {
  // Vuex
  Vue.use(Vuex)
  const store = new Vuex.Store({
    state: {
      window: {
        width: window.innerWidth,
      },
      menu: {
        isOpen: true,
        hideThreshold: 640,
        hidePaths: [
          '/resume',
        ],
        button: {
          visibility: 'hide',
        },
      },
    },
    mutations: {
      TOGGLE_MENU(state) {
        state.menu.isOpen = !state.menu.isOpen
      },
      OPEN_MENU(state) {
        state.menu.isOpen = true
      },
      CLOSE_MENU(state) {
        state.menu.isOpen = false
      },
      SET_MENU_BUTTON_VISIBILITY(state, mode) {
        state.menu.button.visibility = mode
      },
      SET_WINDOW_WIDTH(state, width) {
        state.window.width = width
      },
    },
  })

  appOptions.store = store

  // Router
  router.afterEach((to, from) => {
    // Hide menu by default on screens smaller than hide menu threshold value
    if (store.state.window.width <= store.state.menu.hideThreshold) {
      return store.commit('CLOSE_MENU')
    }

    // Hide menu if the current path is designated as a hidden menu path (only on screen sizes larger than menu hide threshold)
    if (
      store.state.window.width >= store.state.menu.hideThreshold &&
      store.state.menu.hidePaths.includes(to.path)
    ) {
      return store.commit('CLOSE_MENU')
    }

    // Open menu by default
    return store.commit('OPEN_MENU')
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
