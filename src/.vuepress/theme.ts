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

  docsDir: "src",

  // navbar
  navbar,

  footer: "Copyright © 2024-current Masao Someki",

  displayFooter: true,

  locales: {
    "/": {
      blog: {
        intro: "/intro.html",
        name: "Masao Someki's Blog",
        avatar: "/assets/images/masao.png",
        description : "Hi! I am a Master student @ Language Technology Institute, Carnegie Mellon University.",
        medias: {
          Facebook: "https://www.facebook.com/m1s4180/",
          GitHub: "https://github.com/Masao-Someki",
          Gmail: "mailto:masao.someki@gmail.com",
          Twitter: "https://x.com/mmiagshatoy",
          Youtube: "https://www.youtube.com/channel/UCp29X4m_JvMhj9_W3l_NMZQ",
        },
      },
    },
    "/ja/": {
      blog: {
        intro: "/intro.html",
        name: "Masaoのぶろぐ",
        avatar: "/assets/images/masao.png",
        description : "カーネギーメロン大学のコンピュータサイエンス学科、Language Technologies Instituteで研究しています。",
        medias: {
          Facebook: "https://www.facebook.com/m1s4180/",
          GitHub: "https://github.com/Masao-Someki",
          Gmail: "mailto:masao.someki@gmail.com",
          Twitter: "https://x.com/mmiagshatoy",
          Youtube: "https://www.youtube.com/channel/UCp29X4m_JvMhj9_W3l_NMZQ",
        },
      },
    }
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
