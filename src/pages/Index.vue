<template>
  <Layout>
    <article class="flex flex-col justify-center flex-grow h-full">
      <PageHero>
        <template v-slot:subtitle>Hi, my name is</template>
        <template v-slot:title>Cody Wilson</template>
        <p>
          I am a remote full-stack web developer and designer with a passion for architecting, building, and enhancing web experiences. You can examine <g-link class="link--primary" to="/resume">my resume</g-link>, learn more <g-link to="/about" class="link--primary">about me</g-link>, and even <g-link to="/contact" class="link--primary">contact me</g-link> with pictures of your cat(s)!
        </p>
      </PageHero>
    </article>
  </Layout>
</template>

<script>
import PageHero from '@/components/PageHero'

export default {
  metaInfo: {
    title: 'codywilson.dev'
  },
  mounted() {
    this.$store.commit('OPEN_MENU')
  },
  components: {
    PageHero,
  }
}
</script>
