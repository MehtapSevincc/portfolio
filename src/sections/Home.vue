<template>

  <section id="home" class="relative  min-h-screen flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20">
    
    <button class=" w-12 h-12 bg-gray-700 flex items-center justify-center border border-none transition rounded-sm shadow absolute bottom-24 -translate-x-1/2 z-10 ml-[323px]  text-white" aria-label="Scroll Down">
      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M18 13l-6 6" /><path d="M6 13l6 6" /></svg>
    </button>
  <div class="md:w-1/3 text-center md:text-left mb-10 md:mb-0">
    <h1 class=" relative -top-[40px] left-[60px] text-4xl md:text-6xl font-bold leading-tight">
      <span class="block text-white ml-8">CREATIVE UI</span>
      <span class="block text-cyan-400 ml-8">DESIGNER</span>
    </h1>
   
      <img src="/public/vector.png" class="absolute w-8 md:w-16 left-0 top-20 transform -rotate-35 mt-60 ml-20 h-44">
   
    <div class="space-x-4  flex justify-center md:justify-start">
      <a
  href="#contact"
  class="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full shadow transition ml-20"
>
  Hire Me
</a>
      <a href="" download>
        <button class="bg-gray-700 text-white px-6 py-3 rounded-full shadow transition flex items-center ">
          Download CV  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-download"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" /></svg>
        </button>
      </a>
    </div>
  </div>
  <div class="md:w-1/2 flex justify-center md:justify-end mt-20 relative">
        <img src="/public/round.png" class="w-[36rem] h-auto" />
        <img src="/public/group.png" class="absolute top-[200px] left-1/2 -translate-x-1/2 w-80" />
  </div>
  </section> 
</template>