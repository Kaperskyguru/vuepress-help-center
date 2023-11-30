<template>
  <div class="bg-[#0f172a]">
    <Header />
    <Home v-if="$page.frontmatter.home"></Home>

    <Page v-else />

    <div class="text-center text-white pb-10">
      {{ $page.frontmatter.footer }}
    </div>
  </div>
</template>
  
  <script>
import Home from "@theme/components/Home.vue";
import Header from "@theme/components/Header.vue";
import Page from "@theme/components/Page.vue";
export default {
  components: {
    Home,
    Page,
    Header,
  },
};
</script>
  
  <style>
</style>