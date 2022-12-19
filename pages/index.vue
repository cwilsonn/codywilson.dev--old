<template>
    <article class="flex flex-col mt-16 mb-32 lg:mt-32 page page--homepage gap-y-16 lg:gap-y-32">
        <section id="about">
            <h2 class="mb-10 text-5xl font-black lg:text-7xl">
                About Me
            </h2>
            <p class="max-w-prose">
                I am a remote front-end developer with over five years of experience building modern, scale-able web
                applications in dynamic startup environments. I have been interested in the internet and software ever
                since I first went online back in the dial-up days as a kid. This interest led me to teach myself how
                to design and build websites and applications, starting wth the basics of HTML, CSS, and JavaScript,
                and growing from there. I have spent over five years in the industry building on top of my knowledge,
                and I have thoroughly enjoyed every step of the way. When I'm not designing and building software, you
                can usually find me enjoying a local independent coffee, going on a nice hike, or tending to my
                houseplants.
            </p>
        </section>
        <section id="skills-experience">
            <h2 class="mb-10 text-5xl font-black lg:text-7xl">
                Skills & Experience
            </h2>
            <div class="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                <div
                    v-for="(skills, category) in data.skills"
                    class="col"
                >
                    <h3 class="mb-6 text-xl font-bold md:text-3xl">
                        {{ category }}
                    </h3>
                    <ul class="list-disc list-inside">
                        <li
                            v-for="skill in skills"
                            class="list-item"
                        >
                            {{ skill }}
                        </li>
                    </ul>
                </div>
                <div class="md:col-span-2 lg:col-span-3">
                    <h3 class="mb-6 text-xl font-bold md:text-3xl">
                        Experience
                    </h3>
                    <div class="grid gap-x-12 gap-y-6 lg:grid-cols-4">
                        <div
                            v-for="experience in data.experience"
                            class="flex flex-col items-start justify-start mb-6 gap-y-4"
                        >
                            <experience-summary v-bind="experience" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="contact">
            <h2 class="mb-10 text-5xl font-black lg:text-7xl">
                Contact
            </h2>
            <form-contact />
        </section>
    </article>
</template>

<script lang="ts" setup>
    const data = {
        skills: {
            Languages: [
                'HTML',
                'CSS',
                'JavaScript',
                'TypeScript',
                'PHP',
                'Ruby',
                'Python',
                'SQL',
            ],
            'Frameworks / Libraries': [
                'Vue',
                'TailwindCSS',
                'Bootstrap',
                'Nuxt',
                'Strapi',
                'Node',
                'Drupal',
                'Ruby on Rails',
            ],
            'Platforms / Tools': [
                'Git & GitHub',
                'VS Code',
                'Netlify',
                'Amazon Web Services',
                'Microsoft Azure',
                'Azure DevOps',
                'Jira',
                'Notion',
            ],
        },
        experience: [
            {
                company: 'Sonar',
                imgUrl: '/img/sonar-logo.svg',
                webUrl: 'https://sonar.software',
                jobTitle: 'Software Developer',
                startDate: '2022-01-24',
                isCurrent: true,
                description: 'Sonar is a cloud-based business and opertions support system for the ISP industry. I am currently working on the front-end of the application, building out new features and improving the user experience. In my time, I have implemented a new calendar view for our technician scheduling system which was one of the most requested features by our customers. I have also begun work to migrate our frontend codebase to Vue 3 so we can take advantage of the new features and performance improvements.',
            },
            {
                company: 'Elevated Third',
                imgUrl: '/img/elevated-third-logo.svg',
                webUrl: 'https://elevatedthird.com',
                jobTitle: 'Drupal Developer',
                startDate: '2021-10-18',
                endDate: '2022-01-24',
                description: 'Elevated Third is a digital agency that specializes in Drupal development. I was hired as a Drupal Developer to primarily work on the front-end, however, I also built custom modules to provide for complex integrtions with Drupal\'s core APIs, especially as it related to layout builder. I also worked to test solutions other than Drupal, specifically Content Stack using Gatsby and React for the front-end for microsite applications.',
            },
            {
                company: 'Flows.ai',
                imgUrl: '/img/flows-logo.svg',
                webUrl: 'https://flows.ai',
                jobTitle: 'Software Engineer',
                startDate: '2021-02-08',
                endDate: '2021-10-18',
                description: 'Flows.ai is a SaaS platform that allows users to create and manage workflows for their business. I was hired as a full-stack developer to work on the front-end and back-end of the application. I was responsible for building out features on the front-end of the application using vanilla CSS and JS, as well as building out the back-end using Ruby on Rails, and AWS. I also worked on the design of the application, using Figma to create mockups and prototypes. Notably, prior to my departure, I worked on designing the third version of the application with the intention of it being built out using Vue and TailwindCSS in the future.',
            },
            {
                company: 'Tangent Digital',
                imgUrl: '/img/tangent-logo.svg',
                webUrl: 'https://tangentdigital.com',
                jobTitle: 'Drupal Developer',
                startDate: '2017-09-25',
                endDate: '2021-02-08',
                description: 'Tangent Digital is a small digital agency that specializes in Drupal development. I worked as a Drupal Developer for the majority of my time there, however, I also worked on discovery with clients, technical and user interface design, as well as back-end development and project management. It\'s worth mentioning that I worked on websites for one of the large college systems in the Phoenix area as well as one of the state\'s universities, in addition to two video-based learning management systems. This was my first job as a developer and I learned a lot about the industry and myself during my time there.',
            },
        ],
    };
</script>