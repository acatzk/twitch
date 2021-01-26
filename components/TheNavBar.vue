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
      <div>
        <ul class="flex items-center space-x-3">
          <li>
            <button class="px-1 py-1 rounded transition ease-in-out duration-75 focus:outline-none hover:bg-gray-dark">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.798 10.456L10 6.657l-3.798 3.799L4 8.805V13h12V8.805l-2.202 1.65zM18 5v8a2 2 0 0 1-2 2H4a2.002 2.002 0 0 1-2-2V5l4 3 4-4 4 4 4-3z"></path></svg>
            </button>
          </li>
          <li>
            <button class="text-xs tracking-wider bg-gray-dim px-2 rounded py-1.5 focus:outline-none font-bold transition ease-in-out duration-75 hover:bg-gray-dark focus:bg-gray-dim">
              Log In
            </button>
          </li>
          <li>
            <button class="text-xs tracking-wider bg-primary px-2 rounded py-1.5 focus:outline-none font-bold transition ease-in-out duration-75 hover:bg-indigo-dark focus:bg-indigo-darkest">
              Sign Up
            </button>
          </li>
          <li>
            <button class="px-1 py-1 rounded transition ease-in-out duration-75 focus:outline-none hover:bg-gray-dark">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5 7a5 5 0 116.192 4.857A2 2 0 0013 13h1a3 3 0 013 3v2h-2v-2a1 1 0 00-1-1h-1a3.99 3.99 0 01-3-1.354A3.99 3.99 0 017 15H6a1 1 0 00-1 1v2H3v-2a3 3 0 013-3h1a2 2 0 001.808-1.143A5.002 5.002 0 015 7zm5 3a3 3 0 110-6 3 3 0 010 6z" clip-rule="evenodd"></path></svg>
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
        toggle: false,
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