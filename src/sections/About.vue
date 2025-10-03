<script setup>
import {ref} from 'vue'
const readMore = ref (false)
</script>

 <template> 
 <section class=" min-h-screen px-10 md:px-20 py-20 flex flex-col md:flex-row items-center justify-between gap-12 relative">
 
    <div class="md:w-1/2 max-w-[323px] text-center md:text-left">

    <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-8 -mt-60 ">

      <span class=" text-white">About </span>
      <span class=" text-cyan-400">Me</span>
    </h1>
    <p class="text-white text-xl mr-5">Hi, I'm Mehtap Sevinç. I'm studying Computer Engineering and currently doing an internship. 
    <span v-if ="readMore">I enjoy working on frontend development and creating clean,user-friendly interfaces.
      In my free time, I enjoy going for walks, watching movies and TV series, and traveling."
    </span>
    </p>
    <button @click="readMore = !readMore" class=" text-cyan-400 font-bold">
      {{ readMore ? ' ... Read less':'  Read more ...' }}
    </button>
    <img src="/public/vector2.png" class="mt-16 ml-24"/>
  </div>
  <div class="md:w-1/2 relative flex flex-col items-center gap-8">
    <img src="/public/items.png" class="w-full md:w-[800px]  max-w-full mb-8"/>
    <img src="/public/group2.png" class="w-72 md:w-80 absolute top-56" />
    
  </div>
  
  </section>
  </template>