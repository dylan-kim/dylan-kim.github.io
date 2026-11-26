---
title: "Hello, world"
description: "How this blog works: Markdown in a GitHub repo, built by Astro, served by GitHub Pages."
pubDatetime: 2026-11-26T10:00:00+01:00
tags: ["meta"]
draft: false
---

This blog is just a GitHub repo. Every post is a Markdown file, and pushing to `main` publishes it.

## How a post gets published

![Diagram of the publishing flow](./publish-flow.svg "From a Markdown file to a live page in one push.")

## Code looks like this

```ts
// src/content/posts/<slug>/index.md → /posts/<slug>/
const url = `https://dylan-kim.github.io/posts/${slug}/`;
```

That's it.
