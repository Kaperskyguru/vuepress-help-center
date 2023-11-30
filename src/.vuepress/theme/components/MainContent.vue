<template>
  <div class="max-w-[70%] mx-auto">
    <div>
      <h1 class="md:text-5xl font-semibold mb-5">{{ $page.title }}</h1>
      <article class="text-white">
        <Content />
      </article>
    </div>

    <Support />
    <span class="text-gray-600 text-right">
      <p class="pt-5">Last updated {{ lastUpdated }}</p></span
    >
  </div>
</template>
  
  <script>
import { format } from "timeago.js";
import Support from "@theme/components/Support.vue";
export default {
  components: {
    Support,
  },

  computed: {
    lastUpdated() {
      return format(this.$page.lastUpdated);
    },
  },
};
</script>
  
  <style >
article p,
article ul li a,
article ol li a {
  font-size: 1.25rem !important;
  line-height: 1.75rem !important;
}

article h1 {
  font-size: 3rem !important;
  line-height: 1 !important;
  font-weight: 600 !important;
  margin-bottom: 1.25rem !important;
}

article ul {
  margin-top: 1.5rem !important;
}

article ul li a {
  text-decoration-line: underline !important;
  color: white;
}

article a {
  color: #0db9e9;
}

article h2,
article h3 {
  color: white;
  font-weight: 500;
  padding: 1.5rem 0px 0.5rem 0px;
}

article h2 {
  font-size: 28px;
  line-height: 34px;
}

article h3 {
  font-size: 20px;
  line-height: 25px;
}

article ul {
  color: white;
  padding: 1rem 2rem !important;
  list-style: disc !important;
}

article ul li {
  padding: 0.2rem !important;
}
</style>