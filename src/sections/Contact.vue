<script setup>
import Email from "../components/Email.vue";
</script>

<template>
  <section
    id="contact"
    class="relative min-h-screen flex flex-col items-start justify-start pt-32 ml-20"
  >
    <h1 class="text-6xl font-bold text-left mt-8 mb-12">
      <span class="block text-white">Got a project in</span>
      <span class="block text-cyan-400"> mind?</span>
    </h1>
    <div class="flex flex-col md:flex-row itemst-start justify-between gap-48">
      <img src="/public/group3.png" class="ml-48" />
      <div class="flex-1 w-[500px]">
        <Email />
      </div>
    </div>
  </section>
</template>
