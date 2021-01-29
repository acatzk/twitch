<template>
  <div class="flex-grow flex flex-row">
    <TheSideBar />
    <div class="flex-grow overflow-y-auto px-8 py-8">
      <client-only>
        <carousel-3d :controls-visible="true" :controls-prev-html="'&#10092; '" :controls-next-html="'&#10093;'" 
                     :controls-width="30" :controls-height="60" :clickable="false" width="700">
          <slide v-for="(slide, i) in slides" :index="i" :key="i">
            <img src="https://digital.hbs.edu/platform-digit/wp-content/uploads/sites/2/2019/02/twitch-logo-wallpaper-thumbnail-by-endsgraphics-for-zinegaming.com_-1.png">
            <figcaption>
              The sky is the limit only for those who aren't afraid to fly!
                        The sky is the limit only for those who aren't afraid to fly!

            </figcaption>
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
      TheSideBar: () => import('~/components/TheSideBar')
    },
    data () {
      return {
        slides: 7
      }
    }
  }
</script>

<style scoped>
  .carousel-3d-container figure {
    margin:0;
  }

  .carousel-3d-container figcaption {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    bottom: 0;
    position: absolute;
    bottom: 0;
    padding: 15px;
    font-size: 12px;
    min-width: 100%;
    box-sizing: border-box;
  }
</style>