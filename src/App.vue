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
      vm.$store.commit('SET_WINDOW_WIDTH', window.innerWidth)
      window.addEventListener('resize', this.onResize)
      vm.determineMenuVisibility()
    })
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onRezie)
  },

  methods: {
    onResize() {
      const vm = this
      vm.$store.commit('SET_WINDOW_WIDTH', window.innerWidth)
      vm.determineMenuVisibility()
    },
    determineMenuVisibility() {
      const vm = this
      const currentPath = vm.$route.path
      const hidePaths = vm.$store.state.menu.hidePaths
      const windowWidth = vm.$store.state.window.width
      const hideThreshold = vm.$store.state.menu.hideThreshold

      console.log(
        `currentPath: ${currentPath}\n`,
        `hidePaths: \n`, hidePaths, '\n',
        `windowWidth: ${windowWidth}\n`,
        `hideThreshold: ${hideThreshold}`
      )

      // Hide menu by default on screens smaller than hide menu threshold value
      if (windowWidth <= hideThreshold) {
        console.log('windowWidth <= hideThreshold && CLOSE_MENU')
        return vm.$store.commit('CLOSE_MENU')
      }

      // Hide menu if the current path is designated as a hidden menu path (only on screen sizes larger than menu hide threshold)
      if (
        windowWidth > hideThreshold &&
        hidePaths.includes(currentPath)
      ) {
        console.log('windowWidth > hideThreshold && hidePaths.includes(currentPath) && CLOSE_MENU')
        return vm.$store.commit('CLOSE_MENU')
      }

      // Open menu by default
      console.log('OPEN_MENU')
      return vm.$store.commit('OPEN_MENU')
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
</style>