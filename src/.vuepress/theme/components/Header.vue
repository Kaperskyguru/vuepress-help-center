<template>
  <header
    class="fixed flex justify-center w-full top-0 left-0 mb-[80px] z-50 px-4 border-solid border-[#1e293b] border-b"
  >
    <nav
      class="flex w-full items-center justify-between bg-[#0f172a] text-white p-3"
    >
      <div class="w-32" v-if="logo">
        <img v-if="isImageLogo" :src="logo" alt="Logo" />

        <p v-else>{{ logo }}</p>
      </div>

      <div
        class="flex-1 bg-[#0f172a] flex justify-center mx-5 bg-[#1e293b] rounded-md"
      ></div>
      <div class="justify-between my-3 gap-10 items-center hidden lg:flex">
        <div v-for="(item, i) in navItems" :key="i">
          <a
            :href="item.link"
            :class="{ 'flex gap-2': item.icon && item.text }"
          >
            <img
              class="w-6 text-white"
              :src="item.icon"
              v-if="item.icon"
              alt=""
            />
            <span v-if="item.text">{{ item.text }}</span>
          </a>
        </div>

        <span
          class="flex gap-10 items-center"
          v-for="(buttons, y) in buttonNavItems"
          :key="y + `btn`"
        >
          <div v-if="buttons.button1">
            <a
              :href="buttons.button1.link"
              class="bg-[#0db9e9] px-4 py-3 rounded-md text-[#212934]"
            >
              {{ buttons.button1.text }}
            </a>
          </div>
          <div v-if="buttons.button2">
            <a
              :href="buttons.button2.link"
              class="border-[#0db9e9] border border-outline px-4 py-3 rounded-md text-[#0db9e9]"
            >
              {{ buttons.button2.text }}
            </a>
          </div>
        </span>
      </div>

      <div class="lg:hidden block" @click="openSidebar()">
        <svg
          focusable="false"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 5H20.359M3 18.186H20.359M3 11.592H20.359"
            stroke="currentcolor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
    </nav>
  </header>
</template>
  
  <script>
export default {
  data() {
    return {
      isSidebarOpen: false,
    };
  },

  computed: {
    isImageLogo() {
      const logo = this.$themeConfig?.logo;
      if (!logo) return;
      if (logo.includes("http") || logo.includes("/")) return logo;
    },

    logo() {
      return this.$themeConfig?.logo ?? "Logo";
    },

    navItems() {
      const navs = this.$themeConfig?.nav;
      if (!navs) return;
      return navs.filter((item) => {
        if (item?.text || item?.icon) {
          return {
            text: "",
            icon: "",
            link: "",
            ...item,
          };
        }
      });
    },

    buttonNavItems() {
      const navs = this.$themeConfig?.nav;
      if (!navs) return;
      return navs.filter((item) => !item?.text);
    },
  },

  methods: {
    openSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
};
</script>
  
  <style>
</style>