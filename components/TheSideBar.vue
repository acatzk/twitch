<template>
  <client-only>
    <perfect-scrollbar>
      <div class="h-screen bg-dark flex-none w-12 lg:w-60">
        <div class="overflow-y-auto">
          <div class="flex items-center justify-between px-3.5 py-2 lg:px-2.5">
            <span class="hidden lg:block uppercase text-xs tracking-wider font-medium">RECOMMENDED CHANNELS</span>
            <button  @click="toggle = !toggle" class="hidden lg:block px-1 py-1 rounded transition ease-in-out duration-75 focus:outline-none hover:bg-gray-dark">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M16 16V4h2v12h-2zM6 9l2.501-2.5-1.5-1.5-5 5 5 5 1.5-1.5-2.5-2.5h8V9H6z"></path></svg>
            </button>
            <button class="block lg:hidden focus:outline-none">
              <svg class="w-5 h-5 fill-current text-gray-400" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M12.002 3.999a2 2 0 012 2v2L18 6v8l-3.998-2v2a2 2 0 01-2 1.999h-8a2 2 0 01-2-2V6a2 2 0 012-2h8zM12 6H4v8h8V6z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <div>
            <ul v-for="(l, i) in live" :key="i">
              <li class="transition ease-in-out duration-75 lg:hover:bg-gray-side-hover cursor-pointer ">
                <a href="#" class="inline-flex items-center px-2 py-1 lg:px-2.5 space-x-2 w-full">
                  <div class="flex-shrink-0">
                    <img class="rounded-full w-8 h-8 bg-dark" :src="l.avatar" alt="avatar">
                  </div>
                  <div class="hidden lg:block w-full">
                    <div class="flex flex-col text-sm leading-none">
                      <div class="flex flex-row items-center justify-between space-x-3">
                        <div class="font-medium text-gray-200 tracking-wide">{{ l.name }}</div>
                        <span class="flex items-center space-x-1">
                          <div class="bg-red-online w-2 h-2 rounded-full"></div>
                          <div class="text-xs tracking-wider text-gray-200">{{ l.views }}</div>
                        </span>
                      </div>
                      <div class="text-xs tracking-wide text-gray-400 font-light">{{ l.description }}</div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="hidden lg:block border border-b-2 border-darkest bg-darker shadow-lg rounded-lg mx-2 mt-2">
            <div class="pt-7 pb-5 px-5 space-y-1">
              <h1 class="font-medium text-2xl leading-7">Join the <span class="text-primary">Twitch</span> community!</h1>
              <div class="space-y-2">
                <p class="text-sm font-light">Discover the best live streams anywhere.</p>
                <button class="text-xs tracking-wider bg-primary px-2.5 rounded py-1.5 focus:outline-none font-bold transition ease-in-out duration-75 hover:bg-indigo-dark focus:bg-indigo-darkest">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </perfect-scrollbar>
  </client-only>
</template>

<script>
  export default {
    data () {
      return {
        toggle: true,
        live: [
          {
            avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/sykkuno-profile_image-6ab1e70e07e29e9b-70x70.jpeg',
            name: 'Sykkuno',
            views: '37.2K',
            description: 'VALORANT'
          },
          {
            avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/xqcow-profile_image-9298dca608632101-70x70.jpeg',
            name: 'xQcOW',
            views: '80.4K',
            description: 'Just Chatting'
          },
          {
            avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/8de4d844-586d-4be9-8570-04a0678fa99e-profile_image-70x70.png',
            name: 'RanbooLive',
            views: '44.6K',
            description: 'Portal 2'
          },
          {
            avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/f170344d-7a60-47fa-8be6-a74e803fcf12-profile_image-70x70.jpg',
            name: 'BeyondTheSummit',
            views: '335',
            description: 'Dota 2'
          },
          {
            avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/lilypichu-profile_image-9a1ba797a9721716-70x70.png',
            name: 'lilypichu',
            views: '3.5K',
            description: 'Art'
          },
          {
            avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/27bfe643-9197-4689-b9d8-09158c84a961-profile_image-70x70.png',
            name: 'btscsgi',
            views: '1.5K',
            description: 'Counter-Strike: Global'
          },
          {
            avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/96b30bc4546e2f71-profile_image-70x70.jpeg',
            name: 'boxbox',
            views: '2.9K',
            description: 'League of Legends'
          },
          {
            avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/321ccdc6-54d1-4f0f-9ac3-c1fca45c91ca-profile_image-70x70.png',
            name: 'Punz',
            views: '11K',
            description: 'Minecraft'
          },
          {
            avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/f19b1a7d-875b-4b8c-b486-6568c5f4bea9-profile_image-70x70.png',
            name: 'kkatamina',
            views: '1.7K',
            description: 'The Sims 4'
          },
          {
            avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/321ccdc6-54d1-4f0f-9ac3-c1fca45c91ca-profile_image-70x70.png',
            name: 'Punz',
            views: '11.4K',
            description: 'Minecraft'
          }
        ]
      }
    }
  }
</script>