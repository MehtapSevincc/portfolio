<script setup>
const skills =["HTML","CSS","JavaScript","VueJS","Pinia","Github","Tailwind"];
</script>


<template> 
    <section id="skills" class=" min-h-screen flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20">
    <div class="md:w-1/2">
      <h2 class="text-4xl font-bold mb-6">

      <span class=" text-white">My </span>
      <span class=" text-cyan-400">Skills</span>
       </h2>
<div class=" grid grid-cols-2 sm:grid-cols-3 gap-4">
  <div v-for="(skill,index) in skills"
  :key ="index"
  class="bg-white text-gray-800 px-4 py-2 rounded shadow text-center font-semibold">
  {{ skill }}
</div>
</div>
 </div>
<div class="md:w-[90%] flex justify-center">
    <img src="/public/resim.png" alt="photo" class="w-full max-w-[600px]" />
</div>
</section>
</template>