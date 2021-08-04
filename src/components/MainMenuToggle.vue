<template>
  <button
    type="button"
    @click="toggleMenu"
    :class="{
      'opacity-0 group-hover:opacity-100': $store.state.menu.isOpen && $store.state.menu.button.visibility == 'hover',
      'opacity-100': (!$store.state.menu.isOpen && $store.state.menu.visibility == 'hide') || $store.state.menu.button.visibility == 'show'
    }"
    class="absolute top-0 z-50 flex items-center justify-center w-24 h-24 font-black tracking-widest text-white uppercase transition-opacity duration-300 bg-red-600 md:w-32 md:h-32 right-24 md:right-32"
  >
    <svg
      v-if="!$store.state.menu.isOpen"
      xmlns="http://www.w3.org/2000/svg"
      class="w-5 h-5" fill="none"
      viewBox="0 0 24 24" stroke="currentColor">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
    <svg
      v-else-if="$store.state.menu.isOpen"
      xmlns="http://www.w3.org/2000/svg"
      class="w-5 h-5" fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
</template>

<script>
export default {
  methods: {
    toggleMenu: function() { this.$store.commit('TOGGLE_MENU') }
  }
}
</script>