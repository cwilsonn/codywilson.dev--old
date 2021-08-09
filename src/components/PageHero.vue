<template>
  <section aria-labelledby="page-title">
    <header class="mb-8">
      <span
        v-if="$slots.subtitle"
        class="inline-block mb-2 text-xs font-bold tracking-widest text-gray-500 uppercase md:text-sm md:tracking-wide"
      >
        <slot name="subtitle"></slot>
      </span>
      <h1 class="font-black tracking-tight text-black">
        <slot name="title"></slot>
      </h1>
    </header>
    <div v-if="$slots.default" class="lg:w-2/5-screen">
      <slot></slot>
    </div>
  </section>
</template>