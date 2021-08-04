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
      windowWidth: window.innerWidth,
      hideMenuThreshold: 640,
    }
  },

  watch: {
    windowWidth(newWidth, oldWidth) {
      const vm = this
      vm.determineMenuVisibility(newWidth)
    }
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
      window.addEventListener('onload', this.onLoad)

      this.determineMenuVisibility(this.windowWidth)
    })
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onRezie)
    window.removeEventListener('onload', this.onLoad)
  },

  methods: {
    onResize() {
      this.windowWidth = window.innerWidth
    },
    onLoad() {
      this.determineMenuVisibility(this.windowWidth)
    },
    determineMenuVisibility(width) {
      const vm = this
      const path = vm.$route.path
      const hideMenuPaths = ['/resume']

      console.log(
        `path: ${path}\n`,
        `hideMenuPaths:\n`, hideMenuPaths, '\n',
        `is this path supposed to have a hidden menu? ${hideMenuPaths.includes(path)}`
      )

      if (hideMenuPaths.includes(path)) {
        console.log('### hideMenuPaths INCLUDES current path!!! ###')
        return vm.$store.commit('CLOSE_MENU')
      }

      if (width < vm.hideMenuThreshold) {
        vm.$store.commit('CLOSE_MENU')
        vm.$store.commit('SET_MENU_BUTTON_VISIBILITY', 'show')
      } else {
        if (!hideMenuPaths.includes(path)) {
          vm.$store.commit('OPEN_MENU')
          vm.$store.commit('SET_MENU_BUTTON_VISIBILITY', 'hover')
        }
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
</style>