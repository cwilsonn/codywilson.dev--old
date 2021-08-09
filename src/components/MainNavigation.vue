<template>
  <nav id="main-navigation" class="relative z-40 group">
    <BrandLogo />
    <MainMenuToggle />
    <ul
    class="absolute z-10 grid content-center w-full h-screen grid-flow-row px-16 transition-all duration-300 ease-in origin-right bg-red-600 auto-rows-min gap-y-12 sm:px-6 md:px-12 sm:justify-start sm:grid-flow-col sm:auto-cols-min sm:gap-y-0 sm:gap-x-6 md:justify-start sm:content-center sm:relative sm:h-24 transform-gpu md:h-32 xl:content-end xl:justify-start xl:grid-flow-row xl:gap-x-0 xl:gap-y-6 xl:p-16 xl:w-2/5-screen xl:h-3/4-screen 2xl:h-2/3-screen"
      :class="{
        'translate-x-0 opacity-100': $store.state.menu.isOpen,
        'translate-x-full opacity-0': !$store.state.menu.isOpen
      }">
      <li
        v-for="link in mainNavigationLinks"
        :key="link.url"
        class="row-span-1 sm:col-span-1 xl:row-span-1"
      >
        <g-link
          :to="link.url"
          @click="$store.commit('CLOSE_MENU')"
          class="grid items-center grid-flow-col text-2xl font-black tracking-widest text-white uppercase auto-cols-min sm:text-sm lg:text-lg gap-x-2"
        >
          <svg
            v-if="$route.path == link.url"
            xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 sm:w-4 sm:h-4 lg:w-6 lg:h-6" fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          {{ link.title }}
        </g-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import BrandLogo from '@/components/BrandLogo'
import MainMenuToggle from '@/components/MainMenuToggle'

export default {
  data() {
    return {
      mainNavigationLinks: [
        { url: '/', title: 'Home' },
        { url: '/about', title: 'About' },
        { url: '/resume', title: 'Resume' },
        { url: '/contact', title: 'Contact' },
      ],
    }
  },
  components: {
    BrandLogo,
    MainMenuToggle,
  }
}
</script>