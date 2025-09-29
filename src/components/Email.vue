<script setup>
import {ref} from 'vue'
import emailjs from '@emailjs/browser'

const form = ref(null)
const sendEmail =() =>{
    emailjs .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID,import.meta.env.VITE_EMAILJS_TEMPLATE_ID,form.value,{
        publicKey:import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    })
    .then(()=>{
        alert('Message sent successfully')
        form.value.reset()
    },
    (error) => {
        alert('Failed to send Message')
        console.error(error)
    }
)

}
</script>

<template>
    <form ref ="form" @submit.prevent="sendEmail" class="w-full max-w-xl space-y-6 -mt-36">
        <div>
            <label class="block text-white text-sm font-semibold mb-2"> Your Email</label>
            <input type="email" name="user_email" required  maxlength="500" placeholder=" Email" class="w-full px-4 py-2 rounded-md bg-gray-700 text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"/>
        </div>
        <div>
            <label class="block text-white text-sm font-semibold mb-2"> Your Message</label>
            <textarea name="message" rows="5" required maxlength="5000" placeholder=" Message" class="w-full px-4 py-2 rounded-md bg-gray-700 text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"></textarea>
            </div>
            <div>
                <button type="submit" class="w-64 bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded-full flex items-center gap-2 justify-center">
                    Send Message <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-send"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 14l11 -11" /><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" /></svg>
                 </button>
                </div>
    </form>
</template>