<template>
  <div
    id="layout"
    class="relative flex flex-col items-stretch h-full min-h-screen p-2 overflow-x-hidden overflow-y-scroll sm:p-6 md:p-12 lg:p-16"
  >
    <PageHeader />
    <main id="main-content" class="z-10 flex flex-col flex-grow h-full px-6 py-32 bg-white border-2 border-black md:p-12 lg:p-16">
      <slot />
    </main>
    <span
      id="accent-block"
      class="absolute bottom-0 left-0 hidden w-32 h-32 bg-red-600 md:block z-n10"
    ></span>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'

export default {
  components: {
    PageHeader
  }
}
</script>
