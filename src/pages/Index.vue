<template>
  <Layout>
    <article
      class="flex items-center h-full z-50"
    >
      <div id="page-hero" class="w-1/3-screen">
        <header class="mb-8">
          <span
            id="page-subtitle"
            class="text-gray-500 uppercase font-bold tracking-widest text-sm mb-2"
          >Hi, my name is</span>
          <h1
            id="page-title"
            class="text-black font-black tracking-wide"
          >Cody Wilson</h1>
        </header>
        <p>I am a remote full-stack web developer and designer with a passion for architecting, building, and enhancing web experiences. You can examine <g-link class="link--primary" to="/resume">my resume</g-link>, learn more <g-link to="/about" class="link--primary">about me</g-link>, and even <g-link to="/contact" class="link--primary">contact me</g-link> with pictures of your cat(s)!</p>
      </div>
    </article>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'codywilson.dev'
  }
}
</script>
