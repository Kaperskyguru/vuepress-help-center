const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Vuepress Docs Boilerplate",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],

    [
      "script",
      {
        defer: "",
        type: "text/javascript",
        src: "https://cdn.tailwindcss.com",
      },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "https://github.com/kaperskyguru",
    editLinks: false,
    logo: "Logo",
    docsDir: "/help",
    editLinkText: "",
    lastUpdated: true,
    nav: [
      {
        text: "v0.0.1",
        icon: "",
        link: "#",
      },
      {
        text: "",
        icon: "/icons/github.svg",
        link: "https://github.com/kaperskyguru",
      },
      {
        button1: {
          text: "Submit a request",
          link: "#",
        },
        button2: {
          text: "Sign in",
          link: "#",
        },
      },
    ],
    sidebar: {
      "/start/": [
        {
          title: "Start",
          collapsable: false,
          children: [
            "",
            "intro-to-contentre",
            "set-up-contentre",
            "account-verification",
          ],
        },
      ],

      "/sell/": [
        {
          title: "Sell",
          collapsable: false,
          children: ["", "set-up-subscriptions", "invoicing-tool", "tax"],
        },
      ],

      "/manage/": [
        {
          title: "Manage",
          collapsable: false,
          children: [
            "",
            "your-customers",
            "reporting",
            "get-paid",
            "psd2",
            "risk-prevention",
            "sdk",
          ],
        },
      ],

      "/grow/": [
        {
          title: "Grow",
          collapsable: false,
          children: ["", "affiliates", "upsell", "localisation"],
        },
      ],

      "/legal/": [
        {
          title: "Lagal",
          collapsable: false,
          children: ["", "sanctions"],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    [
      "@vuepress/search",
      {
        searchMaxSuggestions: 10,
      },
    ],
  ],
};
