<template>
  <div class="bg-dark overflow-y-auto flex-none w-12 lg:w-60">
    <div class="flex items-center justify-between py-2 px-2.5">
      <span class="hidden lg:block uppercase text-xs tracking-wider font-medium">RECOMMENDED CHANNELS</span>
      <button  @click="toggle = !toggle" class="hidden lg:block px-1 py-1 rounded transition ease-in-out duration-75 focus:outline-none hover:bg-gray-dark">
        <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M16 16V4h2v12h-2zM6 9l2.501-2.5-1.5-1.5-5 5 5 5 1.5-1.5-2.5-2.5h8V9H6z"></path></svg>
      </button>
    </div>
    <div>
      <ul>
        <li class="transition ease-in-out duration-75 hover:bg-gray-side-hover cursor-pointer">
          <a href="#" class="inline-flex items-center py-1 px-2.5 space-x-3 w-full">
            <div class="flex-shrink-0">
              <img class="rounded-full w-8 h-8 bg-dark" src="https://static-cdn.jtvnw.net/jtv_user_pictures/521d85de-7f26-4bad-8dbe-5800820423a7-profile_image-70x70.png" alt="avatar">
            </div>
            <div class="hidden lg:block w-full">
              <div class="flex flex-col text-sm leading-none">
                <div class="flex flex-row items-center justify-between space-x-2">
                  <div class="font-medium text-gray-100">DreamLeague</div>
                  <span class="flex items-center space-x-1">
                    <div class="bg-red-online w-2 h-2 rounded-full"></div>
                    <div class="text-xs tracking-wide text-gray-200">10.6K</div>
                  </span>
                </div>
                <div class="text-xs tracking-wide text-gray-400">Dota 2</div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        toggle: true
      }
    }
  }
</script>