<template>
  <main class="py-20">
    <section class="pt-20">
      <div class="container max-w-screen-xl mx-auto p-4">
        <div class="md:max-w-[60%] mx-auto">
          <h1
            class="text-5xl md:text-7xl text-center text-white mb-10 font-semibold"
          >
            {{ $page.frontmatter.title }}
          </h1>

          <p
            class="mb-10 text-lg md:text-xl font-semibold text-white text-center"
          >
            {{ $page.frontmatter.tagline }}
          </p>
          <SearchBar v-if="$page.frontmatter.search" />
        </div>
      </div>
    </section>

    <section class="mt-20" v-if="$page.frontmatter.mainfeatures">
      <div class="container max-w-screen-2xl mx-auto px-16 py-4">
        <div class="grid md:grid-cols-4 gap-4">
          <router-link
            v-for="(feature, i) in $page.frontmatter.mainfeatures"
            :key="i"
            :to="`${docsDir}${feature.link}`"
            class="card border-2 rounded-lg px-10 pt-24 md:pt-28 md:pb-24 pb-10 transition relative"
          >
            <img class="w-14 mb-8" :src="feature.image" :alt="feature.text" />
            <div
              class="layer bg-transparent h-[100%] w-[100%] absolute top-0 left-0 transition duration-500 rounded-lg hover:bg-transparent"
            >
              <h3
                class="font-semibold text-4xl text-white w-[100%] absolute transition duration-500 mb-10"
              >
                {{ feature.text }}
              </h3>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <section class="mt-20" v-if="$page.frontmatter.subfeatures">
      <div class="container max-w-screen-2xl mx-auto px-16">
        <h4 class="text-white mb-12 font-semibold text-2xl">
          {{ $page.frontmatter.topictitle }}
        </h4>

        <div class="grid md:grid-cols-2 gap-4">
          <div
            class="border-2 rounded-xl px-5 py-8"
            v-for="(feature, i) in topics"
            :key="i"
          >
            <div class="grid md:grid-cols-1 gap-4">
              <a :href="`${docsDir}${feature.link}`" class="p-5 text-white">
                <h5 class="font-semibold text-2xl">
                  {{ feature.title }}
                </h5>
              </a>
              <a
                href="#"
                class="bg-[#1E293B] p-6 text-white rounded-lg"
                :key="i"
                v-for="(topic, i) in feature.topics"
              >
                <h5 class="text-xl">{{ topic.title }}</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
  
  <script>
import SearchBar from "@theme/components/SearchBar.vue";
export default {
  components: {
    SearchBar,
  },

  computed: {
    topics() {
      return this.$page.frontmatter?.subfeatures.map((feature) => ({
        title: feature.feature[0].title,
        link: feature.feature[0].link,
        topics: feature.feature[1].topics,
      }));
    },

    docsDir() {
      const url = this.$themeConfig.docsDir;

      if (!url || url === "/") return "";
      return url;
    },
  },
};
</script>
  
  <style scoped>
.layer h3 {
  bottom: 0;
  left: 14%;
  position: absolute;
  transition: 0.5s;
}
.layer:hover h3 {
  bottom: 10%;
  opacity: 1;
  color: white;
}
</style>