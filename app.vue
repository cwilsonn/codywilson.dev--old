<template>
    <div id="root">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script lang="ts" setup>
    import { themeChange } from 'theme-change';

    onMounted(() => themeChange(false));
</script>

<style lang="scss">
    #root {
        @apply text-black font-sans;
    }

    p {
        @apply font-light leading-5;
    }
</style>