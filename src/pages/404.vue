<template>
  <Layout>
    <article class="flex flex-col justify-center flex-grow h-full">
      <PageHero>
        <template v-slot:subtitle>Uh-oh!</template>
        <template v-slot:title>Page not found</template>
        <p>
          We couldn't find the page that you requested.
        </p>
      </PageHero>
    </article>
  </Layout>
</template>

<script>
import PageHero from "@/components/PageHero"

export default {
  components: {
    PageHero,
  },
  metaInfo: {
    title: 'Page Not Found',
  },
}
</script>