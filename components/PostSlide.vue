<template>
  <div class="flex flex-row w-full bg-darker h-full">
    <a href="#" class="flex-1 block bg-black opacity-60">
      <img class="h-full" src="https://blog.bannersnack.com/wp-content/uploads/2018/10/Twitch-Social-Media-Image-Size.jpg" alt="">
    </a>
    <div class="w-52 py-3 px-3 hidden md:block">
      <div class="flex items-start justify-start space-x-2">
        <div class="flex-shrink-0 w-12 h-12">
          <img class="w-12 h-12 rounded-full" :src="slide.avatar" alt="avatar">
        </div>
        <div class="ml-2 flex flex-col text-sm">
          <a href="#" class="text-primary hover:underline font-medium block">{{ slide.title }}</a>
          <a href="#" class="text-primary hover:underline text-xs block">{{ slide.description }}</a>
          <div class="text-xs pt-0.5">{{ slide.viewers }} viewers</div>
        </div>
      </div>
      <div class="flex flex-col py-3 space-y-3">
        <div class="flex items-center space-x-2">
          <button  v-for="(tag, i) in slide.tags" :key="i" class="block text-xs tracking-wide font-medium text-gray-300 bg-gray-dim px-2 rounded-full py-0.5 focus:outline-none transition ease-in-out duration-75 hover:bg-gray-dark focus:bg-gray-dim">
            {{ tag }}
          </button>
        </div>
        <p class="text-xs text-gray-200 leading-5">{{ slide.about }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      slide: {
        type: Object,
        required: true
      }
    }
  }
</script>