# FrankJS.net
[![Netlify Status](https://api.netlify.com/api/v1/badges/50bbc44f-5675-434e-8105-ba1e7c2b2434/deploy-status)](https://app.netlify.com/sites/condescending-jepsen-669694/deploys)
## builtbyfrank.com/blog Rebuild

## The Goal
I have a blog located at my business' website's ./blog.
I wanted to expand it beyond a blog, and make it a simple "online business card" of sorts. Overall I was very happy with the continual development capabilities provided to me by Netlify. I decided to use Gatsby for this particular project, as I felt it was a good fit.

Initially i developed this to draw data from markdown formatted blog posts. 
I then created a second branch, "contentful", so that i could develop a version that uses a headless cms, in this case,
netlify, and implements CI/CD.
This branch was then rebased into the main branch after completion of the feature set.
<br>
<br>
I also added a build hook to my deployment, so that when my Contentful posts are published or unpublished, it will trigger frankjs.net
update the "blog page" appropriately.

[comment]: <> (_Check out the old site here: &#40;https://builtbyfrank.com/blog&#41;._)
<br>
_And the new, deployed site here: (https://frankjs.net/blog)._

## Technology Stack:

| Technology    	| Use           	  | Description     	|
| :------------------|:-------------------| :----------------	|
| HTML, CSS, JS 			| Languages     | 	Sass for CSS			  |
| React	(Gatsby)		| Front-end			  |	JavaScript library for building user interfaces            |
| GraphQL			| data manipulation			  |	open-source data query and manipulation language for APIs|
| Logrocket			| monitoring			  |	  lets you replay what users do on your site|
|react-obfuscate| obfuscate contact info| react component that can be used to obfuscate phone numbers, etc printed on a website.|
|Contentful|headless CMS |content platform|

## Anatomy of Project


| File/Folder    	| Purpose           	  |
| :------------------|:-------------------|
| src/pages		 			| Main Site Pages|
| src/components		 			| React Components    |
| src/posts	 			| Markdown Posts (deprecated)     |
| src/templates| Individual Blog Post Template     |

## What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.
