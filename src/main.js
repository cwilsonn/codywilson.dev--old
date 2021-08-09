// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import config from '../gridsome.config'
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
        width: 0,
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

  // SEO head meta information
  const copyRightNotice = `\u00A9 ${config.author}, ${new Date().getFullYear()}. All rights reserved`

  head.meta.push(
    {
      rel: 'sitemap',
      type: 'application/xml',
      title: 'Sitemap',
      href: `${config.siteUrl}/sitemap.xml`,
    },
    {
      name: 'autor',
      content: config.author,
    },
    {
      key: 'description',
      title: 'description',
      content: config.siteDescription,
    },
    {
      name: 'copyright', content: copyRightNotice,
    },
    {
      key: 'og:type',
      property: 'og:type',
      content: 'article',
    },
    {
      key: 'og:description',
      property: 'og:description',
      content: config.sitedescription,
    },
    {
      key: 'og:image',
      property: 'og:image',
      content: 'https://codywilson.dev/assets/images/logo.png',
    },
    {
      property: 'og:site_name',
      content: config.siteName,
    },
  )

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
