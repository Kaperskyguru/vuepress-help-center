<template>
  <div class="max-w-[60%] md:max-w-screen-xl mt-4 text-white">
    <ul class="flex">
      <li class="text-gray-500" v-for="(path, i) in paths" :key="i">
        <span v-if="i !== 0" class="ml-2 font-semibold">/</span>
        <router-link
          class="text-md font-semibold capitalize"
          :to="path.slug"
          :class="{
            'text-white text-lg ml-2 font-semibold': paths.length - 1 === i,
          }"
          >{{ path.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>
  
  <script>
export default {
  props: ["path"],
  computed: {
    docsDir() {
      const url = this.$themeConfig?.docsDir;
      if (!url || url === "/") return "";
      return url;
    },
    paths() {
      const paths = this.path?.split("/")?.filter((i) => i);

      return paths.map((path) => {
        const pa = path.split("-")?.join(" ");

        if (pa.includes(".html"))
          return { name: pa.split(".html")[0], slug: "#" };

        if (this.docsDir.includes(pa)) return { name: "Help", slug: "/" };

        return {
          name: pa,
          slug: `${this.docsDir}/${path}`,
        };
      });
    },
  },
};
</script>
  
  <style>
</style>