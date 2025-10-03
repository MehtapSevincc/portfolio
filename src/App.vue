<script setup>
import VerticalLine from './components/VerticalLine.vue'
import Divider from './components/Divider.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Home from './sections/Home.vue'
import About from './sections/About.vue'
import Projects from './sections/Projects.vue'
import Contact from './sections/Contact.vue'

</script>

<template>
  <Header/>
  <main class=" scroll-smooth bg-gray-800">
    <section class="relative">
    <VerticalLine />
    <Home />
     </section> 
      <section class="relative">
    <VerticalLine />
      <About />
      </section>
    
   <Divider class="-mt-16"/>

      <Projects /> 

    <Divider/>
     <section class="relative">
    <VerticalLine />
      <Contact />
      </section>
       <section class="relative">
    <VerticalLine />
   <Footer />
   </section>
  </main>
</template>
