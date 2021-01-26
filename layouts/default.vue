<template>
  <div class="flex flex-col bg-darkest min-h-screen h-screen text-gray-50 antialiased">
    <TheNavBar />
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
  export default {
    components: {
      TheNavBar: () => import('~/components/TheNavBar')
    }
  }
</script>