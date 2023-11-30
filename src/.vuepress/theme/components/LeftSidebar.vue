<template>
  <div>
    <ul class="mb-10" v-for="(sidebar, i) in sidebars" :key="i">
      <li class="mb-5 text-lg font-bold">
        <router-link :to="`${docsDir}${sidebar.route}`">{{
          sidebar.title
        }}</router-link>
      </li>
      <li v-for="(children, y) in sidebar.children" :key="y">
        <router-link
          class="text-lg capitalize"
          :to="`${docsDir}${sidebar.route}${children}`"
          >{{ formatText(children) }}</router-link
        >
      </li>
    </ul>
  </div>
</template>
  
  <script>
export default {
  computed: {
    docsDir() {
      const url = this.$themeConfig?.docsDir;
      if (!url || url === "/") return "";
      return url;
    },

    sidebars() {
      return Object.entries(this.$themeConfig?.sidebar)?.map((sidebar) => ({
        route: sidebar[0],
        title: sidebar[1][0]?.title,
        collapsable: sidebar[1][0]?.collapsable,
        children: sidebar[1][0]?.children?.filter((i) => i),
      }));
    },
  },

  methods: {
    formatText(link) {
      return link?.split("-")?.join(" ");
    },
  },
};
</script>
  
  <style>
</style>