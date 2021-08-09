<template>
  <Layout>
    <article class="flex flex-col justify-center flex-grow h-full">
      <PageHero>
        <template v-slot:subtitle>Hi, my name is</template>
        <template v-slot:title>Cody Wilson</template>
        <p>
          I am a remote full-stack web developer and designer with over three years of experience in fast-paced agency and startup environments. Through wearing multiple hats, learning with a quickness, and being both persistent and curious, I have been exposed to numerous technologies, platforms and tools to build a number of web experiences. For more about who I am and my work history, check out <g-link to="/resume" class="link--primary">my resume</g-link>, or get to know more <g-link to="/about" class="link--primary">about me</g-link>.
        </p>
      </PageHero>
    </article>
  </Layout>
</template>

<script>
import PageHero from '@/components/PageHero'

export default {
  components: {
    PageHero,
  },
  metaInfo: {
    title: 'Home',
    meta: [
      {
        key: 'og:title',
        property: 'og:title',
        content: 'Home',
      },
      {
        key: 'og:description',
        property: 'og:description',
        content: 'I am a remote full-stack web developer and designer with over three years of experience in fast-paced agency and startup environments.'
      },
    ],
  },
}
</script>
