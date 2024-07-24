This repo is no longer maintained and is archived

# Open source portfolio/blog boilerplate

Open source portfolio template built in [eleventy](https://11ty.dev), and blog content using Decap CMS

[Live example](https://11ty-decap-cms-boilerplate-ss.netlify.app/)

## Features include

 - Decap CMS (aka Netlify CMS) portal
 - Tailwind CSS v3
 - Eleventy v2
 - Minimal design
 - Easy to set up

## Set up instructions

### Setting up project

Clone repository into VSCode:

```
git clone https://github.com/sewellstephens/11ty-decap-cms-boilerplate.git
```

Or deploy directly to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/sewellstephens/11ty-decap-cms-boilerplate)

Then 
```
npm install
```

Btw strongly reccommend using Netlify as all setup instructions are based on Netlify

### Setting up authentication

You will need to enable Netlify Identity

![Screenshot](/Screenshot%202024-02-16%20at%201.53.10 PM.png)

This insures you are able to log into Decap CMS.

### Setting up Git Gateway

To set up Git Gateway, go into Netlify site configuration and click "Identity", then click "Services".

![Screenshot 2](/Screenshot%202.png)

After that, you should have Git Gateway enabled
