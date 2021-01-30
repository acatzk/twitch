<template>
  <div class="flex-grow flex flex-row h-screen">
    <div class="flex-shrink-0">
      <TheSideBar />
    </div>
    <client-only>
      <perfect-scrollbar>
        <div class="flex-grow overflow-y-auto px-8 py-3">
          <client-only>
            <carousel-3d :controls-visible="true" 
                        :controls-prev-html="'&#10092; '" 
                        :controls-next-html="'&#10093;'" 
                        :controls-width="30"
                        :controls-height="60" 
                        :clickable="false" 
                        width="680" 
                        height="280">
              <slide v-for="(slide, i) in slides" :index="i" :key="i">
                <PostSlide :slide="slide" />
              </slide>
            </carousel-3d>
          </client-only>
        
          <div class="mt-14">
            <span class="text-lg font-medium">Live channels we think you’ll like</span>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2.5 gap-y-6 py-1">
            <div v-for="(post, i) in liveChannels" :key="i">
              <div class="flex flex-col space-y-2.5">
                <div class="stream w-full">
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
                    <div class="flex items-center space-x-2 py-1">
                      <button v-for="(tag, i) in post.tags" :key="i" class="block text-xs tracking-wide font-medium text-gray-300 bg-gray-dim px-2 rounded-full py-0.5 focus:outline-none transition ease-in-out duration-75 hover:bg-gray-dark focus:bg-gray-dim">
                        {{ tag }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </perfect-scrollbar>
    </client-only>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Twitch'
    },
    components: {
      TheSideBar: () => import('~/components/TheSideBar'),
      PostSlide: () => import('~/components/PostSlide')
    },
    data () {
      return {
        slides: [
          {
            avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/91b9b73e-b654-4cad-bc95-c7d42d59c6a3-profile_image-150x150.png',
            title: 'theneedledrop',
            description: 'Music',
            tags: ['English'],
            about: 'Join the Internet\'s Busiest Music Nerd, Anthony Fantano, as he courses through catalogues of new music in this week\'s edition of New Music Friday.',
            viewers: '4.2K'
          },
          {
            avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/c22d5e13-21fc-443b-91a9-d98d8c7d33e8-profile_image-150x150.png',
            title: 'EAMaddenNFL',
            description: 'Madden NFL 21',
            tags: ['English', 'Esports'],
            about: 'The Madden NFL 21 Club Championship is the pinnacle of the Madden Championship Series. Thousands of competitors registered with one goal in mind: to represent their favorite NFL Club and a chance to earn a piece of the $750k prize pool.',
            viewers: '5.9K'
          },
          {
            avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/b972af18-c7a7-40ac-8da7-389481525456-profile_image-150x150.png',
            title: 'giraffaeg',
            description: 'Music',
            tags: ['English', 'Paintings'],
            about: 'hectic multitasking stream.',
            viewers: '69'
          },
          {
            avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/1909a85a-b873-4db4-aecb-7f4cc6b33801-profile_image-150x150.png',
            title: 'TYT',
            description: 'Just Chatting',
            tags: ['English'],
            about: 'Join Brett Erlich, Brooke, Jayar Jackson, and Judith Benezra as they end the week with drinks and conversation. Hear them discuss awkward interactions with strangers, embarrassing stories, and try to answer life\'s impossible questions.',
            viewers: '186'
          },
          {
            avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/be6b7ece-3c44-4100-8744-3578d112c862-profile_image-150x150.png',
            title: 'Insomniac',
            description: 'Music',
            tags: ['English', 'DJ'],
            about: 'Join us for the Space Yacht 6th Anniversary Party!',
            viewers: '500'
          },
          {
            avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/5f3d37eb-2e58-4104-94ba-089a58648a25-profile_image-150x150.png',
            title: 'cslesportsgg',
            description: 'VALORANT',
            tags: ['English', 'Esports'],
            about: 'Jump in Chat and watch CSL League play!',
            viewers: '42'
          },
          {
            avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/e5731c40-8171-4627-9806-541ede80abbf-profile_image-150x150.png',
            title: 'OMEN',
            description: 'Special Events',
            tags: ['English'],
            about: 'The award-winning OMEN experience is back to show a new perspective on gaming at The Video Game Game Show. Join us for the launch of the next gen OMEN Challenge and experience the OMEN Gaming Hub on the latest OMEN PCs, laptops, and accessories.',
            viewers: '22.7K'
          }
        ],
        liveChannels: [
          {
            thumbnail: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_pgl_dota2-440x248.jpg',
            avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/23c7a5b1-6570-4035-bd0a-a71d28362dc6-profile_image-50x50.png',
            title: 'DPC 2021 SEA | TNC vs. Neon | 496 vs. T1',
            description: 'PGL_Dota2',
            about: 'Dota 2',
            tags: ['English', 'Esports']
          },
          {
            thumbnail: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_subroza-440x248.jpg',
            avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/ac07cf97-755d-46d0-9c83-78cc1c2ed543-profile_image-50x50.png',
            title: 'TSM SUBROZA Pro Gamer POSITIVITY ONLY !exitlag !aimlab !newvid | FOLLOW @SubrozaYT ON INSTA',
            description: 'Subroza',
            about: 'VALORANT',
            tags: ['English']
          },
          {
            thumbnail: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_lck-440x248.jpg',
            avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/04b097ac-9a71-409e-b30e-570175b39caf-profile_image-50x50.png',
            title: 'BRO vs DRX - LSB vs GENㅣ2021 LCK Spring Split',
            description: 'LCK',
            about: 'League of Legends',
            tags: ['English', 'Esports']
          },
          {
            thumbnail: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_punz-440x248.jpg',
            avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/321ccdc6-54d1-4f0f-9ac3-c1fca45c91ca-profile_image-50x50.png',
            title: 'hi :D we speedrun | !merch !gfuel | @Punztw on Twitter and Insta',
            description: 'Punz',
            about: 'Minecraft',
            tags: ['English']
          },
        ]
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