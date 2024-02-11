---
title: Why I chose Tailwind
---

So I was trying to find free html and css landing page templates, but they don't exist unless you wont some junk off W3schools. I searched for a while and finally came to the decision to buy Tailwind UI. So now I run numerious landing pages with Tailwind and I have to say its a time saver. and no this isnt some stupid affiliate bullshit, I truely feel that Tailwind is a timesaver. If you ask me, just buy the marketing components pack. It will cost you around $150 once but its totally worth it.

![](/media/tailwind-graphic-blog.png)

### Why this is worth it?


If you've ever hard coded a landing page, you would know how time consuming it is. Use a website designing tool like Framer or Webflow and it works, but Tailwind is way cheaper in the long run especially if you use something like Netlify as you can connect to a Github repository for free or drag and drop your HTML page files. So essentially, you are saving yourself money and time if you code a full landing page with Tailwind CSS. You will also have more control over the third party scripts you add to your site.

### &#xA;Installing Tailwind


To install Tailwind easily use a cdn like Unpkg, although this is not ideal and you should use NPM and run commands as listed in [Tailwind docs](https://tailwindcss.com/docs/installation).




```html
<script src="https://cdn.tailwindcss.com/"></script>
```

If you are using HTML, you will need to edit your Tailwind config like below.




```javascript
export const content = ['*.html',];
export const theme = {
  extend: {},
};
export const plugins = [];
```
