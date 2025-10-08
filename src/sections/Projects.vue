<script setup>
import { ref, computed } from "vue";
const activeFilter = ref("all");
const projects = [
  {
    title: "E-Commerce",
    category: "ux",
    image: "/ecommerce.png",
    link: "https://github.com/MehtapSevincc/e-commerce.git",
  },
  {
    title: "Weather App",
    category: "design",
    image: "/weather.png",
    link: "https://github.com/MehtapSevincc/Weather-App.git",
  },
  {
    title: "Pokemon Finder",
    category: "ui",
    image: "/pokemon.png",
    link: "https://github.com/MehtapSevincc/PokemonFinder.git",
  },
];
const filteredProjects = computed(() => {
  if (activeFilter.value === "all") return projects;
  return projects.filter(project => project.category === activeFilter.value);
});
</script>

<template>
  <section
    id="projects"
    class="min-h-screen flex flex-col items-center justify-start py-24 px-4 bg-[url('/items.png')] bg-repeat bg-[length:33.3%_33.3%] max-w-full"
  >
    <div class="mt-10 max-w-4xl w-full px-4">
      <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
        <span class="text-white">My Recent </span>
        <span class="text-cyan-400">Works</span>
      </h1>

      <div class="mb-6 flex flex-row gap-6">
        <button
          class="px-4 py-2 rounded-full text-sm font-semibold border backdrop-blur-md transition"
          :class="
            activeFilter === 'all'
              ? 'bg-cyan-500 text-white border-cyan-500'
              : 'bg-white/10 text-cyan-500 border-white/20 hover:bg-cyan-500 hover:text-white transition'
          "
          @click="activeFilter = 'all'"
        >
          All
        </button>

        <button
          class="px-4 py-2 rounded-full text-sm font-semibold border backdrop-blur-md transition"
          :class="
            activeFilter === 'ui'
              ? 'bg-cyan-500 text-white border-cyan-500'
              : 'bg-white/10 text-cyan-500 border-white/20 hover:bg-cyan-500 hover:text-white transition'
          "
          @click="activeFilter = 'ui'"
        >
          UI
        </button>
        <button
          class="px-4 py-2 rounded-full text-sm font-semibold border backdrop-blur-md transition"
          :class="
            activeFilter === 'ux'
              ? 'bg-cyan-500 text-white border-cyan-500'
              : 'bg-white/10 text-cyan-500 border-white/20 hover:bg-cyan-500 hover:text-white transition'
          "
          @click="activeFilter = 'ux'"
        >
          UX
        </button>
        <button
          class="px-4 py-2 rounded-full text-sm font-semibold border backdrop-blur-md transition"
          :class="
            activeFilter === 'design'
              ? 'bg-cyan-500 text-white border-cyan-500'
              : 'bg-white/10 text-cyan-500 border-white/20 hover:bg-cyan-500 hover:text-white transition'
          "
          @click="activeFilter = 'design'"
        >
          Web Design
        </button>
      </div>
    </div>
    <div
      v-if="filteredProjects.length > 0"
      class="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-4xl"
    >
      <div
        v-for="project in filteredProjects"
        :key="project.title"
        class="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md hover:shadow-lg transition p-6 aspect-square flex flex-col justify-between"
      >
        <h3 class="text-xl font-semibold mb-2 text-cyan-500">
          {{ project.title }}
        </h3>
        <a :href="project.link" target="_blank" rel="noopener noreferrer">
          <img
            :src="project.image"
            :alt="project.title"
            class="rounded-md mb-4 object-cover w-full h-40 hover:opacity-80 transition cursor-pointer"
          />
        </a>
      </div>
    </div>
  </section>
</template>
