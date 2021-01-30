<template>
  <div class="flex-grow flex flex-row h-screen">
    <TheSideBar />
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

    </div>
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
      }
    }
  }
</script>