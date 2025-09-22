<template>
  <div class="flex flex-col items-center justify-start pt-24 px-4">
   <h1 class="text-4xl md:text-6xl font-bold leading-tight text-white mb-12">
      Contact Me
    </h1>

        <form class="w-full max-w-md space-y-6">
    
      <div>
        <label for="email" class="block text-white text-sm font-semibold mb-2">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Your Email"
          maxlength="500"
          class="w-full px-4 py-2 rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 "
        />
      </div>

      <div>
        <label for="message" class="block text-white text-sm font-semibold mb-2"> Message</label>
        <textarea
          id="message"
          rows="5"
          placeholder="Your Message"
          maxlength="5000"
          class="w-full px-4 py-2 rounded-md bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        ></textarea>
      </div>
      <div>
        <button type="submit" class="w-24 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 flex items-center justify-center gap-2">Send <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-send"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 14l11 -11" /><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" /></svg></button>
      </div>
    </form>

  </div>
</template>