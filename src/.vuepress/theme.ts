import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";

export default hopeTheme({
  hostname: "https://Masao-Someki.github.io",

  author: {
    name: "Masao Someki",
    url: "https://Masao-Someki.github.io",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/favicon.png",

  repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "src",

  // navbar
  navbar,

  footer: "Copyright © 2024-current Masao Someki",

  displayFooter: true,

  blog: {
    description: "Hobby programmer",
    intro: "/intro.html",
    medias: {
      GoogleScholar: {
        icon: "google-scholar",
        link: "https://scholar.google.com/citations?user=_aVVkVsAAAAJ",
      },
      Facebook: "https://example.com",
      GitHub: "https://github.com/Masao-Someki",
      Gmail: "mailto:masao.someki@gmail.com",
      Twitter: "https://example.com",
      Whatsapp: "https://example.com",
      Youtube: "https://example.com",
    },
  },

  // enable it to preview all changes in time
  // hotReload: true,

  plugins: {
    blog: true,

    // These features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,

      // install chart.js before enabling it
      // chart: true,

      // insert component easily

      // install echarts before enabling it
      // echarts: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // install katex before enabling it
      // katex: true,

      // install mathjax-full before enabling it
      // mathjax: true,

      // install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // install @vue/repl before enabling it
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cacheImage: true,
      appendBase: true,
    },
  },
});
