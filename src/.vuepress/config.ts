import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Masao's Blog",
  description: "A blog for me",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
