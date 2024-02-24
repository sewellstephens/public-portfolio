---
layout: article.njk
title: Creating a static site on a tight budget
date: 2023-05-22T04:02:00.000Z
tags: post
---

If you are on a tight budget, and want to create a static site on a custom domain, your in luck. If your hosting a static site on a tight budget, I highly recommend something like Netlify. You can drag and drop your static site code or connect to Github repo.

### How?

Just create Github repo for website folder with Github desktop, or drag and drop folder into Netlify Deploys page. I recommend pushing code to Github and deploying that way.

### Why not just use a page builder?

Page builders tend to cost more and can add up quickly. Take Webflows pricing for example:

![](</media/Screenshot 2024-02-10 at 6.17.52 PM.png>)

May not seem that bad, but it adds up quickly, trust me. Its way cheaper to use a static site host like Netlify, Vercel, or Cloudflare Pages. With Netlify, if you don't want to connect to a Github repo, you can use [Netlify Drop](https://app.netlify.com/drop). This ensures you save money, and don't spend unnessesary fees on page/website builders.

### Connecting a CMS

Connecting a CMS is easy once you know how. I reccommend eleventy with Decap CMS (aka Netlify CMS). If you don't know how, I didnt at first either. First install 11ty

```
npm install @11ty/eleventy --save-dev
```

After that, you need to code njk template files. If you dont know what those are, they let you split your site into components like in NextJS. I like NextJS too, but for a simple blog site, it seems overkill (to me). If you don't know how to use njk files, they basically are like HTML files but with meta data that lets you specify parameters. Heres an example 

```
---
title: Home
layout: 'base.njk'
---
```

Title specifys the page title to use with the page, and layout tells it what template to render the file. Base.njk could include.

```
<!DOCTYPE html>
<html>
<head>
<title>{{ title }}</title>

</head>

<body>

<nav>

<!-- Navigation -->

</nav>

content here

<footer>

<!-- Footer -->

</footer>

</body>
</html>

```

### Adding Decap CMS

To add Decap CMS, visit their [documentation](https://decapcms.org/docs/install-decap-cms/), its very good and well written. The reason I went into detail on eleventy is because their docs kinda suck. Thanks.
