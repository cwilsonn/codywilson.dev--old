<template>
  <Layout>
    <article class="grid items-stretch flex-grow h-full gap-x-16 gap-y-12 auto-cols-fr realtive">
      <div class="flex flex-col col-span-1 lg:col-span-3 gap-y-10">
        <section id="page-hero">
          <header>
            <span id="page-subtitle" class="block mb-2 text-xs font-bold tracking-wide text-gray-500 uppercase">Hi, my name is</span>
            <h1
              id="page-title"
              class="mb-4 text-3xl font-black tracking-tight text-black"
            >Cody Wilson</h1>
            <ul aria-label="Contact Information">
              <li class="grid grid-flow-col auto-cols-max items-center gap-x-1 mb-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a
                  href="tel:602-384-0869"
                  class="text-sm font-medium tracking-wide hover:underline"
                >602-384-0869</a>
              </li>
              <li class="grid grid-flow-col auto-cols-max items-center gap-x-1 mb-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clip-rule="evenodd" />
                </svg>
                <a
                  href="mailto:cody@codywilson.dev"
                  class="text-sm font-medium tracking-wide hover:underline"
                >cody@codywilson.dev</a>
              </li>
              <li class="grid grid-flow-col auto-cols-max items-center gap-x-1 mb-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd" />
                  </svg>
                <g-link
                  to="/"
                  class="text-sm font-medium tracking-wide hover:underline"
                >https://codywilson.dev</g-link>
              </li>
            </ul>
          </header>
        </section>
      </div>
      <div class="grid grid-flow-row col-span-1 auto-rows-min lg:col-span-1 gap-y-10">
        <section id="about_me" class="grid grid-flow-row auto-rows-min gap-y-4">
          <header class="grid items-center grid-flow-col auto-cols-max gap-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
            </svg>
            <h2 class="block text-xs font-bold tracking-wide text-gray-500 uppercase">About Me</h2>
          </header>
          <p class="text-sm">With over three years of web development and design experience in fast-paced and dynamic agency and startup environments, I bring a persistent and curious approach to design, development, implementation, and teamwork. I enjoy both web design and full-stack software development, though I find myself most excited on the frontend of the stack.</p>
        </section>
        <section id="skills" class="grid grid-flow-row auto-rows-min gap-y-4">
          <header class="grid items-center grid-flow-col auto-cols-max gap-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            <h2 class="block text-xs font-bold tracking-wide text-gray-500 uppercase">Skills</h2>
          </header>
          <div class="grid grid-flow-col grid-cols-2 auto-cols-fr gap-x-10">
            <ul class="pl-4 text-sm list-disc list-outside">
              <li>Website design</li>
              <li>Design systems</li>
              <li>Prototyping</li>
              <li>Data &amp; content architecture</li>
              <li>HTML</li>
              <li>CSS + Bootstrap &amp; Tailwind</li>
              <li>SCSS</li>
              <li>JavaScript (ES6+)</li>
              <li>Vue.js</li>
              <li>React</li>
              <li>Apline.js</li>
              <li>Inertia.js</li>
            </ul>
            <ul class="pl-4 text-sm list-disc list-outside">
              <li>jQuery</li>
              <li>Ruby</li>
              <li>Ruby on Rails</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>PHP</li>
              <li>Drupal</li>
              <li>Wordpress</li>
              <li>SQL</li>
              <li>MongoDB</li>
              <li>AWS</li>
              <li>Twilio Flex</li>
            </ul>
          </div>
        </section>
        <section id="education" class="grid grid-flow-row auto-rows-min gap-y-4">
          <header class="grid items-center grid-flow-col auto-cols-max gap-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            <h2 class="block text-xs font-bold tracking-wide text-gray-500 uppercase">Education</h2>
          </header>
          <p class="text-sm">Pinnacle High School - Class of 2012</p>
        </section>
      </div>
      <div class="flex flex-col col-span-1 lg:col-span-2 gap-y-10">
        <section id="work_experience" class="grid grid-flow-row auto-rows-min gap-y-4">
          <header class="grid items-center grid-flow-col auto-cols-max gap-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
            <h2 class="block text-xs font-bold tracking-wide text-gray-500 uppercase">Work Experience</h2>
          </header>
          <ul aria-label="Work Experience List" class="grid grid-flow-row auto-rows-min gap-y-10">
            <li>
              <section id="flows_ai">
                <header class="mb-4">
                  <h3 class="mb-1 text-lg font-black tracking-tight text-black">Flows.ai</h3>
                  <p class="text-xs italic text-gray-500">
                    Software Developer <br>
                    March 2021 - Present
                  </p>
                </header>
                <p class="text-sm xl:w-3/4">
                  Working at Flows.ai, I have been able to gain a better understanding of several new areas of software development, including serverless architecture using AWS, integration with communications platforms, and modern front-end development utilizing JavaScript frameworks like Vue.js and React. Throughout my time at Flows.ai, I have prototyped, designed, and participated in aspects of the implementation of various solutions to provide clients with communications tools, optimizations, and analytics to augment and automate their marketing and call center operations. This role exposed me to Ruby, Ruby on Rails, React (through Twilio Flex plugin development), Vue.js and Inertia.js implementations for our application, AWS (API Gateway, DynamoDB, RDS, Lambda), and furthered my backend and database knowledge.
                </p>
              </section>
            </li>
            <li>
              <section id="flows_ai">
                <header class="mb-4">
                  <h3 class="mb-1 text-lg font-black tracking-tight text-black">Tangent Digital</h3>
                  <p class="text-xs italic text-gray-500">
                    Drupal Developer and Web Designer <br>
                    September 2017 - February 2021
                  </p>
                </header>
                <p class="mb-2 text-sm xl:w-3/4">
                  Working at Tangent, a budding web development and marketing agency, provided me a fast-paced and dynamic environment to build on my self-taught web design and development skills through working on projects for a variety of clients. Given the fact that I was the only full-time employee, I wore several hats and have had responsibilities such as the following:
                </p>
                <ul class="pl-4 text-sm list-disc list-outside xl:w-3/4">
                  <li>Requirements gathering, scope definition, pricing and estimates</li>
                  <li>Interviewing, on-boarding, and managing contract development personnel</li>
                  <li>Managing projects in various PM tools to measure cost, time estimates, workloads, and individual tasks and initiatives</li>
                  <li>Defining and documenting design and development assets, libraries, and procedures</li>
                  <li>Production of wireframes, screen designs, and prototypes</li>
                  <li>Evaluating tools and services for specific projects and for the agency at large</li>
                  <li>Full-stack development leveraging Drupal 8 as a web framework to build custom modules and complex themes and frontends </li>
                  <li>Planning for third-party API integrations and determining the structure, approach, and scope of arbitrary implementations</li>
                  <li>Working with QA teams to test feature implementations and their overall functionality</li>
                  <li>Communicating directly with project stakeholders of various technical backgrounds</li>
                  <li>Troubleshooting and maintaining existing projects</li>
                </ul>
              </section>
            </li>
          </ul>
        </section>
      </div>
      <footer id="resume-actions" class="grid grid-flow-row col-span-1 mt-auto mb-0 auto-rows-min md:grid-flow-col md:auto-cols-max md:justify-end lg:col-span-3 gap-y-8 gap-x-8">
        <!-- <a
          href="/static/cody-wilson-resume-2021.pdf"
          download
          target="_blank"
          rel="noreferrer noopener"
          class="grid items-center w-full grid-flow-col px-4 py-4 text-sm font-bold tracking-widest text-red-600 uppercase transition-colors duration-300 border-2 border-red-600 rounded-sm gap-x-2 auto-cols-max md:w-auto hover:bg-red-600 hover:text-white focus:bg-red-600 focus:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
          Download PDF
        </a> -->
        <g-link
          to="/contact"
          class="flex items-center w-full px-4 py-4 text-sm font-bold tracking-widest text-white uppercase transition-colors duration-300 bg-red-600 rounded-sm md:w-auto hover:bg-black focus:bg-black"
        >Contact me</g-link>
      </footer>
    </article>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Resume',
    meta: [
      {
        key: 'og:title',
        property: 'og:title',
        content: 'Cody Wilson\'s Resume',
      },
      {
        key: 'og:description',
        property: 'og:description',
        content: 'My resume and work history in the web design and development industry.'
      },
    ],
  }
}
</script>