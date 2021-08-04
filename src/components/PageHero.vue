<template>
  <section aria-labelledby="page-title">
    <header class="mb-8">
      <span
        v-if="$slots.subtitle"
        class="mb-2 text-sm font-bold tracking-wide text-gray-500 uppercase"
      >
        <slot name="subtitle"></slot>
      </span>
      <h1 class="font-black text-black">
        <slot name="title"></slot>
      </h1>
    </header>
    <div v-if="$slots.default" class="lg:w-2/5-screen">
      <slot></slot>
    </div>
  </section>
</template>