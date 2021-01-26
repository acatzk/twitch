<template>
  <header class="bg-darker border-2 border-black leading-none py-2.5 px-2">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-8">
        <div class="relative flex flex-col items-center">
          <button class="focus:outline-none bg-transparent z-50" style="position: relative; top: 0.6px;">
            <svg class="fill-current text-primary w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"></path></svg>
          </button>
          <div class="absolute w-3 h-5 bg-white" style="top: 0.6px;"></div>
          <div class="absolute w-2 h-4 right-1 bg-white" style="top: 0.6px;"></div>
        </div>
        <div>
          <a href="#" class="text-lg tracking-normal font-medium relative transition ease-in-out duration-75 hover:text-primary" style="bottom: 2px;">Browse</a>
        </div>
        <div class="relative">
          <button @click.prevent="toggle = !toggle" class="px-1 py-1 rounded transition ease-in-out duration-75 focus:outline-none hover:bg-gray-dark">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M2 10a2 2 0 114 0 2 2 0 01-4 0zM8 10a2 2 0 114 0 2 2 0 01-4 0zM16 8a2 2 0 100 4 2 2 0 000-4z"></path></svg>
          </button>
          <div class="absolute w-48 bg-darker rounded-md shadow-inner px-2 py-4 border border-black text-xs" v-show="toggle">
            <div class="font-medium tracking-wide text-gray-400 uppercase px-1.5">General</div>
            <div class="border-b border-gray-800 pb-2 py-2">
              <ul class="capitalize">
                <li v-for="(m, i) in more" :key="i" class="hover:bg-gray-darker py-1.5 px-1.5 rounded cursor-pointer">
                  <a href="#" class="text-xs text-gray-200 tracking-wide">{{ m }}</a>
                </li>
              </ul>
            </div>
            <div class="font-medium tracking-wide text-gray-400 uppercase px-1.5 pt-3">Help & Legal</div>
            <ul class="capitalize">
              <li v-for="(h, i) in helpLegal" :key="i" class="hover:bg-gray-darker py-1.5 px-1.5 rounded cursor-pointer">
                <a href="#" class="text-xs text-gray-200 tracking-wide">{{ h }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="hidden sm:block">
        <form class="flex">
          <input type="text" placeholder="Search" class="border border-gray-400 shadow-inner px-3 w-56 md:w-64 lg:w-128 rounded-l-sm focus:outline-none focus:border-blue-700">
          <button @click.prevent class="border-t border-r border-b rounded-r-sm border-gray-400 px-6 bg-gray-100 text-sm hover:bg-gray-200 transition ease-in-out duration-150 focus:outline-none">
            <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" class="style-scope yt-icon"></path></svg>
          </button>
        </form>
      </div>
      <div class="flex items-center">
        <ul class="flex items-center">
          <li>
            <button class="focus:outline-none rounded-full hover:bg-gray-200 transition ease-in-out duration-150">
              <svg class="w-6 h-6 fill-current text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" ><path d="M0 0h24v24H0z" fill="none"/><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/></svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    data () {
      return {
        toggle: true,
        more: ['About', 'Advertisers', 'Blog', 'Developers', 'Download Apps', 'Gift Card', 'IGDB', 'Jobs', 'Loot Cave - Store', 'Music on Twich', 'Partners', 'Press', 'Turbo'],
        helpLegal: [
          'Accessibility Statement',
          'Ad Choices',
          'Community Guidelines',
          'Cookie Policy',
          'Help',
          'Privacy Policy',
          'Security',
          'Terms'
        ]
      }
    }
  }
</script>