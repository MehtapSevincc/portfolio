<script setup>
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import About from './sections/About.vue'
import Projects from './sections/Projects.vue'
import Contact from './sections/Contact.vue'


</script>

<template>
  <Header/>
  <div class="scroll-smooth bg-gray-800">
    <Home />

    <section id="about" class="min-h-screen">
      <About />
    </section>
<hr class="border-t border-gray-700" />
    <section id="projects" class="min-h-screen">
      <Projects /> 
    </section>
<hr class="border-t border-gray-700" />
    <section id="contact" class="min-h-screen">
      <Contact />
    </section>
  </div>
</template>
