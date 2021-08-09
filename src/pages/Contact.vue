<template>
  <Layout>
    <article class="flex flex-col justify-center flex-grow h-full">
      <PageHero>
        <template v-slot:subtitle>Let's chat</template>
        <template v-slot:title>Contact Me</template>
      </PageHero>
      <form
        id="contact-form"
        class="grid mt-4 md:mt-8 auto-cols-fr gap-x-8 gap-y-8 xl:w-1/2 2xl:w-1/3"
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit"
      >
        <input type="hidden" name="form-name" value="contact">
        <div class="col-span-1 form-item">
          <label
            for="name"
            class="block mb-2 text-xs font-bold tracking-widest text-gray-500 uppercase"
          >Your name</label>
          <input
            class="w-full px-3 py-2 text-sm border border-gray-400 rounded-sm"
            type="text"
            name="name"
            v-model="formData.name"
            placeholder="Name" />
        </div>
        <div class="col-span-1 md:col-span-2 form-item">
          <label
            for="email"
            class="block mb-2 text-xs font-bold tracking-widest text-gray-500 uppercase"
          >Your Email</label>
          <input
            class="w-full px-3 py-2 text-sm text-gray-500 border border-gray-400 rounded-sm"
            type="text"
            name="email"
            v-model="formData.email"
            placeholder="Email" />
        </div>
        <div class="col-span-1 md:col-span-3 form-item">
          <label
            for="message"
            class="block mb-2 text-xs font-bold tracking-widest text-gray-500 uppercase"
          >Message</label>
          <textarea
            id="message"
            class="w-full px-3 py-2 text-sm border border-gray-400 rounded-sm"
            name="message"
            cols="30"
            rows="10"
            v-model="formData.message"
          ></textarea>
        </div>
        <div
          class="col-span-1 md:col-span-3 form-item"
        >
          <button
            type="submit"
            class="flex items-center justify-center w-full px-4 py-4 text-sm font-bold tracking-widest text-white uppercase transition-colors duration-300 bg-red-600 rounded-sm hover:bg-black focus:bg-black"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
            Send Message
          </button>
        </div>
      </form>
    </article>
  </Layout>
</template>

<script>
import PageHero from '@/components/PageHero'

export default {
  data() {
    return {
      formData: {},
      formSubmitted: false,
      submissionMessage: '',
      submissionStatus: ''
    }
  },
  methods: {
    // TODO: Need an onChange event or something to update this.formData to reflect form values.
    encode(data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    },
    handleSubmit(e) {
      const vm = this
      vm.formSubmitted = true

      const reqBody = vm.encode({
        'form-name': e.target.getAttribute('name'),
        ...vm.formData,
      })

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: reqBody,
      })
      .then(() => {
        vm.$router.push('/submission-success')
      })
      .catch(error => {
        vm.$router.push('/404')
      })
    }
  },
  components: {
    PageHero
  },
  metaInfo: {
    title: 'Contact',
    meta: [
      {
        key: 'og:title',
        property: 'og:title',
        content: 'Contact Cody Wilson',
      },
      {
        key: 'og:description',
        property: 'og:description',
        content: 'Contact me to pitch me a job opportunity, learn more about me, or to hire me for freelance work.'
      }
    ],
  },
}
</script>
