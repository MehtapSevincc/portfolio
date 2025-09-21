<template>
    <section class="flex flex-col items-center justify-start py-24 px-4 ">
  <div class="mb-16 text-center">
    <h1 class="text-4xl md:text-5xl font-bold leading-tight">
      <span class=" text-white">My Recent </span>
      <span class=" text-cyan-400">Works</span>
    </h1>
  </div>

 <div class="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-4xl">
<div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md hover:shadow-lg transition p-6 aspect-square flex flex-col justify-between">
    <h3 class="text-xl font-semibold mb-2 text-cyan-500">E-Commerce</h3>
<a
  href="https://github.com/MehtapSevincc/e-commerce.git"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="/ecommerce.png"
    alt="E-Commerce"
    class="rounded-md mb-4 object-cover w-full h-40 hover:opacity-80 transition cursor-pointer"
  />
</a>

    
</div>
<div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md hover:shadow-lg transition p-6 aspect-square flex flex-col justify-between">
    <h3 class="text-xl font-semibold mb-2 text-cyan-500">Weather App</h3>
    <a href="https://github.com/MehtapSevincc/Weather-App.git" target="_blank" rel="noopener noreferrer">
    <img src="/public/weather.png" alt="Weather App" class="rounded-md mb-4 object-cover hover:opacity-80 w-full h-40" />
</a>
</div>
<div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md hover:shadow-lg transition p-6 aspect-square flex flex-col justify-between">
    <h3 class="text-xl font-semibold mb-2 text-cyan-500">Pokemon Finder</h3>
    <a href="https://github.com/MehtapSevincc/PokemonFinder.git" target="_blank" ref="noopener noferrer">
    <img src="/public/pokemon.png" alt="Pokemon Finder" class="rounded-md mb-4 object-cover hover:opacity-80 w-full h-40" />
</a>
</div>


</div>
  </section>
</template>