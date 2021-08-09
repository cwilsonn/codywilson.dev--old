<template>
  <Layout>
    <article class="flex flex-col justify-center flex-grow h-full">
      <PageHero>
        <template v-slot:title>Thank you!</template>
        <p>
          Your form submission was sent successfully. Please allow up to 48 hours for a response to your submission.
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
}
</script>