<template>
  <header class=" bg-gray-800 flex justify-between items-center px-10 py-6">
    <div class="text-2xl font-bold text-white">My Portfolio</div>
    <nav class="space-x-6 text-white font-medium">
       <a href="#" class="hover:text-cyan-400">Home</a>
       <a href="#" class="hover:text-cyan-400">About Me</a>
       <a href="#" class="hover:text-cyan-400">Contact</a>
    </nav>
   
  </header>


 <hr class="border-t border-gray-700" />

  <section class=" min-h-screen flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20">
  <div class="md:w-1/2 text-center md:text-left">
    <h1 class="text-4xl md:text-6xl font-bold leading-tight">
      <span class="block text-white">CREATIVE UI</span>
      <span class="block text-cyan-400">DESIGNER</span>
    </h1>
    <div class="space-x-4 mt-8">
      <a href ="#contact">
        <button class="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded shadow transition ">
          Hire Me
        </button>
      </a>
      <a href="" download>
        <button class="bg-white hover:bg-gray-200 text-gray-800 px-6 py-3 rounded shadow transition">
          Download CV
        </button>
      </a>
    </div>
  </div>
  </section>
</template>