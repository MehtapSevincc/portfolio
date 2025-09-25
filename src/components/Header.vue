<script setup>
import { onMounted, onUnmounted } from 'vue';

let sections, navLinks;

const handleScroll = () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
};

onMounted(() => {
  sections = document.querySelectorAll("section");
  navLinks = document.querySelectorAll(".nav-link");
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>


<template>
      <header class=" bg-gray-800 top-0 left-0 w-full shadow border-b border-gray-700 z-50 fixed">
        <div class="flex justify-between items-center px-10 py-6">
    <div class="text-2xl font-bold text-white">My Portfolio</div>
    <nav class="space-x-6 text-white font-medium">
       <a href="#home" class="nav-link">Home</a>
       <a href="#skills" class="nav-link">Skills</a>
       <a href="#projects" class="nav-link">Projects</a>
       <a href="#contact" class="nav-link">Contact</a>
       
    </nav> 
    </div>
  </header>
</template>

<style scoped>
.nav-link {
  @apply hover:text-cyan-400 transition border-b-2 border-transparent pb-1;
}
.nav-link.active {
  @apply text-cyan-400 border-cyan-400;
}
</style>
