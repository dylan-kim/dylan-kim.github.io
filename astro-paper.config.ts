import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://dylan-kim.github.io/",
    title: "Dylan Kim",
    description: "Software engineering notes, write-ups and experiments.",
    author: "Dylan Kim",
    profile: "https://github.com/dylan-kim",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Europe/Paris",
    dir: "ltr",
  },
  posts: {
    perPage: 8,
    perIndex: 6,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: { enabled: false },
    search: false, // flip to "pagefind" and restore the pagefind steps in package.json "build"
    toc: true,
  },
  socials: [
    { name: "github", url: "https://github.com/dylan-kim" },
    { name: "linkedin", url: "https://www.linkedin.com/in/dylan-kim/" },
  ],
  shareLinks: [
    { name: "linkedin", url: "https://www.linkedin.com/sharing/share-offsite/?url=" },
    { name: "x", url: "https://x.com/intent/post?url=" },
  ],
});
