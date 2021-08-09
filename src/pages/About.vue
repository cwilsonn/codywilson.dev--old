<template>
  <Layout>
    <article class="flex flex-col justify-center flex-grow h-full">
      <PageHero>
        <template v-slot:subtitle>Get to know more</template>
        <template v-slot:title>About me</template>
        <p>
          I am a self-taught web developer and designer with four years of experience in the industry working for start-ups. My interest in the field stems from a hobbyist pursuit of fine-arts in my childhood, a life-long desire to understand just how things work, and a love for challenging myself.
        </p>
        <p class="mt-4">
          I have worked on websites and applications ranging from straight-forward business brochure sites, university college websites, e-commerece storefronts, e-learning applications, and enterprise multi-channel communications automation and analytics platforms. Though I started out in the industry as a primarily front-end website developer, I most recently have branched out into full-stack web development and have truly been enjoying working in and understanding the full scope of applications and their implementations. For more details on my work experience, give <g-link to="/resume" class="link--primary">my resume</g-link> a read.
        </p>
        <p class="mt-4">
          When I am not in-front of a screen writing code, you will usually find me relaxing at a local coffee joint, going on a hike, fishing at the lake, or reading a nice book.
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
    title: 'About Cody Wilson',
    meta: [
      {
        key: 'og:title',
        property: 'og:title',
        content: 'About Cody Wilson',
      },
      {
        key: 'og:description',
        property: 'og:decription',
        content: 'I am a self-taught web developer and designer with four years of experience in the industry working for start-ups. My interest in the field stems from a hobbyist pursuit of fine-arts in my childhood, a life-long desire to understand just how things work, and a love for challenging myself.'
      },
    ],
  },
}
</script>
