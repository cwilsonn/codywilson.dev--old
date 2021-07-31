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
          >Let's chat</span>
          <h1
            id="page-title"
            class="text-black font-black tracking-wide"
          >Contact Me</h1>
        </header>
        <form 
          id="contact" 
          class="flex flex-wrap gap-y-4"
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <div class="form-item mb-6 w-1/3 px-4">
            <label
              for="name"
              class="block font-bold mb-2 text-xs tracking-widest uppercase"
            >Your name</label>
            <input
              class="border border-gray-400 px-3 py-2 rounded-sm text-sm w-full"
              type="text"
              name="name"
              placeholder="Name" />
          </div>
          <div class="form-item mb-6 w-2/3 px-4">
            <label
              for="email"
              class="block font-bold mb-2 text-xs tracking-widest uppercase"
            >Your Email</label>
            <input
              class="border border-gray-400 px-3 py-2 rounded-sm text-sm w-full"
              type="text"
              name="email"
              placeholder="Email" />
          </div>
          <div class="form-item mb-6 w-full px-4">
            <label
              for="message"
              class="block font-bold mb-2 text-xs tracking-widest uppercase"
            >Message</label>
            <textarea
              id="message"
              class="border border-gray-400 px-3 py-2 rounded-sm text-sm w-full"
              name="message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div
            class="form-item mw-1/3 px-4"
          >
            <button
              type="submit"
              class="bg-red-600 font-bold px-4 py-4 rounded-sm text-sm text-white tracking-widest uppercase flex items-center hover:bg-black focus:bg-black duration-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </article>
  </Layout>
</template>