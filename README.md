<h1 align="center">frankjs.net</h1>

<p align="center">
  Personal site and technical blog — a statically generated Gatsby application
  sourcing content from a headless CMS, with incremental rebuilds triggered by
  publish webhooks.
</p>

<p align="center">
  <a href="https://frankjs.net"><strong>frankjs.net</strong></a>
</p>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black">
  <img alt="Gatsby" src="https://img.shields.io/badge/Gatsby-663399?logo=gatsby&logoColor=white">
  <img alt="GraphQL" src="https://img.shields.io/badge/GraphQL-E10098?logo=graphql&logoColor=white">
  <img alt="Contentful" src="https://img.shields.io/badge/Contentful-2478CC?logo=contentful&logoColor=white">
  <img alt="Netlify" src="https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=white">
</p>

---

## Why

I had a WordPress blog attached to my business site and wanted out of it — off
PHP, off a database, and onto something I could deploy from a git push.

Rather than migrate WordPress, I rebuilt the site in React as a static
application and folded the blog into it as one section rather than the whole
premise. The result loads as flat files, has no runtime database, and costs
nothing to host.

## What It Does

- Statically generates every page at build time — no server, no runtime database
- Sources blog posts from Contentful and renders them through a shared template
- Rebuilds automatically when a post is published or unpublished in the CMS
- Serves a home page, blog index, contact page, and a "uses" page
- Supports light and dark mode
- Obfuscates contact details against scrapers while rendering them normally

## Architecture

```
   ┌──────────────┐   publish/unpublish   ┌──────────────────┐
   │  Contentful  │ ───── webhook ──────► │  Netlify build   │
   │  (headless)  │                       │  hook            │
   └──────┬───────┘                       └────────┬─────────┘
          │                                        │
          │ source plugin                          │ triggers
          ▼                                        ▼
   ┌─────────────────────────────────────────────────────────┐
   │  Gatsby build                                           │
   │                                                         │
   │   gatsby-config.js   plugins + site metadata            │
   │   gatsby-node.js     createPages() per CMS entry        │
   │        │                                                │
   │        ▼                                                │
   │   internal GraphQL layer  ──►  page queries  ──► HTML   │
   └─────────────────────────────────────────────────────────┘
                              │
                              ▼
                    static assets on Netlify CDN
```

Content lives in Contentful. At build time Gatsby's source plugin pulls every
entry into an internal GraphQL layer, `gatsby-node.js` calls `createPages()` to
generate one route per post from a shared template, and page-level GraphQL
queries pull the fields each component renders.

Publishing in Contentful fires a webhook at a Netlify build hook, which triggers
a rebuild and redeploy. Writing a post requires no repository access and no
deploy step.

## Content Pipeline

The site was built in two stages, which are visible in the git history:

1. **Markdown** — posts were files in `src/posts/`, sourced by
   `gatsby-source-filesystem` and transformed by `gatsby-transformer-remark`.
2. **Headless CMS** — a `contentful` branch reimplemented the same page
   generation against the Contentful API, then rebased into `master` once the
   feature set matched.

The markdown path remains in `src/posts/` but is no longer the content source.

## Technology Stack

| Technology | Role | Why it's here |
| :-- | :-- | :-- |
| React | UI | Component model for pages, layout, and the post template |
| Gatsby | Static site generator | Build-time rendering, routing, and the data layer that unifies CMS and local sources |
| GraphQL | Data layer | Gatsby's internal query interface — each page requests only the fields it renders |
| Contentful | Headless CMS | Post authoring and storage, decoupled from the repository |
| Sass | Styling | Nested, variable-driven stylesheets, including the dark mode theme |
| react-obfuscate | Privacy | Renders email and phone normally while defeating naive DOM scrapers |
| LogRocket | Monitoring | Session replay for diagnosing front-end issues |
| Netlify | Hosting & CI/CD | Builds on push, deploy previews per branch, and the CMS-triggered build hook |

## Installation

Requires Node.js and the Gatsby CLI.

```bash
git clone https://github.com/fjs138/frankjs.net.git
cd frankjs.net
npm install
```

### Configuration

Contentful credentials are read from the environment:

```bash
# .env.development
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_delivery_token
```

<!-- CONFIRM: exact variable names in gatsby-config.js before committing. -->

### Running

```bash
npm run develop     # dev server at localhost:8000, GraphiQL at /___graphql
npm run build       # production build to public/
npm run serve       # serve the production build locally
```

## Project Structure

| Path | Purpose |
| :-- | :-- |
| `src/pages/` | Top-level routes — home, blog index, contact, uses |
| `src/components/` | Shared React components and layout |
| `src/templates/` | Blog post template; one page generated per CMS entry |
| `src/posts/` | Markdown posts from the original implementation (deprecated) |
| `gatsby-config.js` | Site metadata and plugin configuration |
| `gatsby-node.js` | `createPages()` — generates a route per post at build time |
| `gatsby-browser.js` | Browser API hooks |
| `gatsby-ssr.js` | Server-side rendering hooks |

## Design Notes

**Why static generation.** The site is read-only from a visitor's perspective.
Rendering at build time removes the server, the database, and the attack surface
that comes with both, and reduces hosting to static file delivery.

**Why a headless CMS over markdown.** Markdown posts required a commit and a
push to publish, which meant writing was gated behind a development environment.
Contentful decouples authoring from deployment while keeping the rendered output
static.

**Why keep the deprecated markdown source.** `src/posts/` and the transformer
config document the earlier approach and make the migration legible in history.

**Why obfuscate contact details.** Publishing a plain `mailto:` on an indexed
page guarantees scraping. `react-obfuscate` reverses the string in the DOM and
restores it visually with CSS, which defeats naive harvesters at no cost to a
human reader.

## License

BSD Zero Clause — see [LICENSE](LICENSE).

<!-- NOTE: the previous README pasted full MIT license text, which contradicted
     the repo's actual 0BSD license (inherited from the Gatsby starter).
     Decide which you want, then make the LICENSE file and this line agree. -->
