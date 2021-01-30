<template>
  <div class="flex flex-col space-y-2.5">
    <div class="stream w-full">
      <!-- <div class="live absolute z-50 bg-red-online rounded px-2 py-0.5 uppercase text-xs font-medium mx-2.5 my-2.5">Live</div> -->
      <img class="stream__thumbnail" :src="post.thumbnail" alt="thumbnail">
    </div>
    <div class="flex items-start justify-start">
      <a href="#" class="flex-shrink-0">
        <img class="w-10 h-10 rounded-full" :src="post.avatar" alt="avatar">
      </a>
      <div class="ml-2 flex flex-col text-sm space-y-0.5 leading-none">
        <a href="#" class="text-gray-200 hover:text-primary font-medium block text-base clamp-1 leading-tight">{{ post.title }}</a>
        <a href="#" class="text-gray-400 hover:text-primary inline-block text-sm font-light leading-tight">{{ post.description }}</a>
        <a href="#" class="text-gray-400 hover:text-primary text-sm font-light">{{ post.about }}</a>
        <div class="flex items-center space-x-2 py-0.5">
          <button v-for="(tag, i) in post.tags" :key="i" class="block text-xs tracking-wide font-medium text-gray-300 bg-gray-dim px-2 rounded-full py-0.5 focus:outline-none transition ease-in-out duration-75 hover:bg-gray-dark focus:bg-gray-dim">
            {{ tag }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>
  .stream {
    position: relative;
    display: inline-block;
    background-color: #9147ff;
  }

  .stream:before,
  .stream:after {
    content: '';
    display: block;
    background-color: #9147ff;
    width: 8px;
    height: 8px;
    position: absolute;
    transition: all .15s ease;
  }

  .stream:before {
    top: 0;
    left: 0;
    transform-origin: top left;
    transform: rotate(-45deg) scale(0);
  }

  .stream:after {
    right: 0;
    bottom: 0;
    transform-origin: bottom right;
    transform: rotate(45deg) scale(0);
  }

  .stream__thumbnail {
    display: block;
    transform: translate(0, 0);
    transition: all .15s ease;
    position: relative;
    z-index: 10;
  }

  .stream:hover .stream__thumbnail {
    transform: translate(6px, -6px);
  }

  .stream:hover:before {
    transform: rotate(-45deg) scale(1);
  }

  .stream:hover:after {
    transform: rotate(45deg) scale(1);
  }
</style>