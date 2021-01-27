<template>
  <div class="flex-grow flex flex-row">
    <TheSideBar />
    <div class="flex-grow overflow-y-auto">

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
    }
  }
</script>