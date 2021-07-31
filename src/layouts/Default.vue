<template>
  <main
    id="layout"
    class="p-16 max-h-full h-screen overflow-hidden relative"
  >
    <header
      class="absolute top-0 right-0"
    >
      <nav id="main-navigation" class="relative z-40">
        <span
          id="logo"
          class="bg-black text-xl text-white font-black flex h-32 w-32 z-50 absolute top-0 right-0"
        >
          <span id="logo-text" class="m-auto">
            <g-link to="/">C(2*U)</g-link>
          </span>
        </span>
        <button
          type="button"
          @click="menuOpen = !menuOpen"
          class="bg-red-600 h-32 w-32 absolute right-32 top-0 text-white font-black tracking-widest uppercase flex items-center justify-center z-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          Menu
        </button>
        <ul class="z-10 flex flex-col justify-end items-start gap-y-6 bg-red-600 p-16 transition-transform transform-gpu origin-top-right duration-300 ease-in w-1/3-screen h-2/3-screen" :class="{ 'scale-y-100 scale-x-100': menuOpen, 'scale-y-0 scale-x-0': !menuOpen }">
          <li>
            <g-link to="/" class="text-lg text-white font-black uppercase tracking-widest">Home</g-link>
          </li>
          <li>
            <g-link to="/about" class="text-lg text-white font-black uppercase tracking-widest">About</g-link>
          </li>
          <li>
            <g-link to="/resume" class="text-lg text-white font-black uppercase tracking-widest">Resume</g-link>
          </li>
          <li>
            <g-link to="/contact" class="text-lg text-white font-black uppercase tracking-widest">Contact</g-link>
          </li>
        </ul>
      </nav>
    </header>
    <div class="p-16 border-2 border-black h-full z-50 bg-white">
      <slot />
    </div>
    <span
      id="accent-block"
      class="absolute bottom-0 left-0 z-n10 h-32 w-32 bg-red-600"
    ></span>
  </main>
</template>

<script>
export default {
  data: function() {
    return {
      menuOpen: true,
    }
  }
}
</script>
