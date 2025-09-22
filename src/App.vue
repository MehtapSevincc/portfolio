<script setup>
import Divider from './components/Divider.vue'
import Header from './components/Header.vue'
import Home from './sections/Home.vue'
import About from './sections/About.vue'
import Projects from './sections/Projects.vue'
import Contact from './sections/Contact.vue'

</script>

<template>
  <Header/>
  <main class="scroll-smooth bg-gray-800">
    <Home />

    <section id="about" class="min-h-screen">
      <About />
    </section>
<Divider/>
    <section id="projects" class="min-h-screen">
      <Projects /> 
    </section>
<Divider/>
    <section id="contact" class="min-h-screen">
      <Contact />
    </section>
  </main>
</template>
