// TODO: SEE: https://garywoodfine.com/gridsome-configure-basic-on-page-seo/ to begin basic, and then advanced (reference links in-context) SEO implementations prior to production deployment
<template>
  <router-view />
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription
        }
      ]
    }
  },
  data() {
    return {
      windowWidth: 0,
      hideMenuThreshold: this.$store.state.menu.hideThreshold,
    }
  },

  watch: {
    windowWidth(newWidth, oldWidth) {
      const vm = this
      vm.determineMenuVisibility()
    }
  },

  mounted() {
    const vm = this
    vm.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
      window.addEventListener('onload', this.onLoad)
      vm.determineMenuVisibility()
    })
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onRezie)
    window.removeEventListener('onload', this.onLoad)
  },

  methods: {
    onResize() {
      const vm = this
      vm.$store.commit('SET_WINDOW_WIDTH', window.innerWidth)
      vm.determineMenuVisibility()
    },
    onLoad() {
      const vm = this
      vm.$store.commit('SET_WINDOW_WIDTH', window.innerWidth)
      vm.determineMenuVisibility()
    },
    determineMenuVisibility() {
      const vm = this
      const windowWidth = vm.$store.state.window.width
      const hideThreshold = vm.$store.state.menu.hideThreshold

      if (windowWidth <= hideThreshold) {
        return vm.$store.commit('CLOSE_MENU')
      } else {
        return vm.$store.commit('OPEN_MENU')
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
</style>