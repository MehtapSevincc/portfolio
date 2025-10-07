<script setup>
import { onMounted, onUnmounted } from "vue";

let sections, navLinks;

const handleScroll = () => {
  const scrollY = window.scrollY;
  const headerHeight = document.querySelector("header")?.offsetHeight || 100;

  const sectionPositions = Array.from(sections).map((section) => {
    const top = section.offsetTop - headerHeight;
    const bottom = top + section.offsetHeight;
    return {
      id: section.getAttribute("id"),
      top,
      bottom,
    };
  });

  let current = "";

  const homeSection = sectionPositions.find((s) => s.id === "home");
  const aboutSection = sectionPositions.find((s) => s.id === "about");

  const homeEnd = aboutSection
    ? aboutSection.top + aboutSection.bottom - aboutSection.top
    : homeSection.bottom;

  if (scrollY < homeEnd) {
    current = "home";
  } else {
    for (const section of sectionPositions) {
      if (scrollY >= section.top && scrollY < section.bottom) {
        current = section.id;
        break;
      }
    }
  }

  navLinks.forEach((link) => {
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
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    class="bg-gray-800 top-0 left-0 w-full shadow border-b border-gray-700 z-50 fixed"
  >
    <div class="flex justify-between items-center px-10 py-6">
      <div class="text-2xl font-bold text-white">Pinpong University</div>
      <nav class="space-x-6 text-white font-medium">
        <a href="#home" class="nav-link">Home</a>
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
