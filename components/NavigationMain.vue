<template>
    <nav id="navigation-main" class="hidden md:block">
        <ul class="flex flex-row items-center flex-nowrap gap-x-16">
            <li
                v-for="link in menuLinks"
                :key="link.name"
            >
                <nuxt-link
                    class="font-semibold link link-hover"
                    :href="link.href"
                >
                    {{ link.name }}
                </nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
    const menuLinks = [
        {
            name: 'About',
            href: '/#about',
        },
        {
            name: 'Experience',
            href: '/#skills-experience',
        },
        {
            name: 'Contact',
            href: '/#contact',
        },
    ];
</script>
