<h1 align="center">frankjs.net</h1>

<p align="center">
  Personal site and technical blog — a statically generated Gatsby application
  sourcing content from a headless CMS, with rebuilds triggered by CMS publish
  webhooks.
</p>

<p align="center">
  <a href="https://frankjs.net"><strong>frankjs.net</strong></a>
</p>

<p align="center">
  <img alt="Gatsby 5" src="https://img.shields.io/badge/Gatsby-5.14-663399?logo=gatsby&logoColor=white">
  <img alt="React 18" src="https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black">
  <img alt="Sass" src="https://img.shields.io/badge/Sass-CC6699?logo=sass&logoColor=white">
  <img alt="Contentful" src="https://img.shields.io/badge/Contentful-2478CC?logo=contentful&logoColor=white">
  <img alt="Netlify" src="https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=white">
  <img alt="Node 18+" src="https://img.shields.io/badge/Node-%3E%3D18-339933?logo=nodedotjs&logoColor=white">
</p>

---

## Why

I had a WordPress blog attached to my business site and wanted out of it — off
PHP, off a database, and onto something I could deploy from a git push.

Rather than migrate WordPress, I rebuilt the site in React as a static
application and folded the blog into it as one section rather than the whole
premise. The result ships as flat files, has no runtime database, and costs
nothing to host.

## What It Does

- Statically generates every page at build time — no server, no runtime database
- Sources blog posts from Contentful and renders them through a shared template
- Rebuilds automatically when a post is published or unpublished in the CMS
- Serves home, blog index, contact, and "uses" pages, plus a 404
- Supports light and dark mode with the preference persisted client-side
- Obfuscates contact details against scrapers while rendering them normally
- Processes images through Gatsby's sharp pipeline for responsive, lazy-loaded output

## Architecture

```
   ┌──────────────┐   publish/unpublish   ┌──────────────────┐
   │  Contentful  │ ───── webhook ──────► │  Netlify build   │
   │  (headless)  │                       │  hook            │
   └──────┬───────┘                       └────────┬─────────┘
          │                                        │
          │ gatsby-source-contentful               │ triggers
          ▼                                        ▼
   ┌─────────────────────────────────────────────────────────┐
   │  Gatsby build                                           │
   │                                                         │
   │   gatsby-config.js   plugins + site metadata            │
   │   gatsby-node.js     createPages() per CMS entry        │
   │        │                                                │
   │        ▼                                                │
   │   internal GraphQL layer  ──►  page queries  ──► HTML   │
   │                                                         │
   │   sharp pipeline  ──►  responsive image variants        │
   └─────────────────────────────────────────────────────────┘
                              │
                              ▼
                    static assets on Netlify CDN
```

Content lives in Contentful. At build time `gatsby-source-contentful` pulls every
entry into Gatsby's internal GraphQL layer, `gatsby-node.js` generates one route
per post from `src/templates/blog.js`, and page-level GraphQL queries pull only
the fields each component renders. Post bodies come through as Contentful rich
text and are rendered by `@contentful/rich-text-react-renderer`.

Publishing in Contentful fires a webhook at a Netlify build hook, which triggers
a rebuild and redeploy. Writing a post requires no repository access and no
deploy step.

### Styling

Styling is Sass with CSS Modules, organized in three layers:

| Layer | Location | Purpose |
| :-- | :-- | :-- |
| Tokens | `src/styles/tokens.scss` | Colors, spacing, and type scale as custom properties — the single source both themes read from |
| Primitives | `src/components/ui/` | `button`, `badge`, `card`, `section-label` as scoped CSS Modules |
| Composition | `src/pages/*.module.scss` | Page-level layout consuming the primitives |

Dark mode is a `use-theme` hook toggling a data attribute on the document root.
Because both themes resolve against the same token custom properties, theming is
a variable swap rather than a parallel stylesheet.

### Content pipeline history

The site was built in two stages, visible in the git history:

1. **Markdown** — posts were files in `src/posts/`, sourced from the filesystem
   and transformed by remark.
2. **Headless CMS** — a `contentful` branch reimplemented the same page
   generation against the Contentful API, then rebased into `master` once the
   feature set matched.

Three markdown files remain in `src/posts/` as artifacts of the first approach.
They are no longer part of the build.

## Technology Stack

| Technology | Role | Why it's here |
| :-- | :-- | :-- |
| Gatsby 5 | Static site generator | Build-time rendering, routing, and the GraphQL layer unifying CMS and local sources |
| React 18 | UI | Component model for pages, layout, and the post template |
| GraphQL | Data layer | Gatsby's internal query interface — each page requests only what it renders |
| Contentful | Headless CMS | Post authoring and storage, decoupled from the repository |
| `@contentful/rich-text-react-renderer` | Content rendering | Maps Contentful rich-text nodes to React components |
| Sass + CSS Modules | Styling | Token-driven theming with component-scoped class names |
| `gatsby-plugin-image` / `sharp` | Image pipeline | Responsive variants, lazy loading, and format negotiation at build time |
| `react-helmet` | Document head | Per-page title and meta tags for SEO |
| `react-obfuscate` | Privacy | Renders email and phone normally while defeating naive DOM scrapers |
| `gatsby-plugin-nprogress` | UX | Progress indicator on route transitions |
| LogRocket | Monitoring | Session replay for diagnosing front-end issues |
| Netlify | Hosting & CI/CD | Builds on push, deploy previews per branch, and the CMS-triggered build hook |

## Installation

Requires Node.js 18 or newer.

```bash
git clone https://github.com/fjs138/frankjs.net.git
cd frankjs.net
npm install
```

### Configuration

Contentful credentials are read from the environment via `load-env`:

```bash
# .env.development
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_delivery_token
```

### Running

```bash
npm run develop     # dev server at localhost:8000, GraphiQL at /___graphql
npm run build       # production build to public/
npm run serve       # serve the production build locally
npm run clean       # clear the Gatsby cache
npm run format      # prettier across js, jsx, json, md, scss
```

## Project Structure

| Path | Purpose |
| :-- | :-- |
| `src/pages/` | Routes — `index`, `blog`, `me` (contact), `uses`, `404` |
| `src/templates/blog.js` | Post template; one page generated per CMS entry |
| `src/components/` | `layout`, `header`, `footer`, `nav-link`, `theme-toggle`, `head` |
| `src/components/ui/` | Styled primitives — button, badge, card, section-label |
| `src/hooks/use-theme.js` | Light/dark mode state and persistence |
| `src/theme/constants.js` | Theme identifiers and defaults |
| `src/styles/` | `tokens.scss`, `base.scss`, `index.scss` |
| `src/utils/css-module.js` | CSS Module class-name helper |
| `src/posts/` | Markdown posts from the original implementation (not built) |
| `gatsby-config.js` | Site metadata and plugin configuration |
| `gatsby-node.js` | `createPages()` — generates a route per post at build time |
| `gatsby-browser.js` / `gatsby-ssr.js` | Browser and SSR API hooks |
| `load-env.js` | Environment loading shared by config and build |

## Design Notes

**Why static generation.** The site is read-only from a visitor's perspective.
Rendering at build time removes the server, the database, and the attack surface
that comes with both, and reduces hosting to static file delivery.

**Why a headless CMS over markdown.** Markdown posts required a commit and a
push to publish, which gated writing behind a development environment.
Contentful decouples authoring from deployment while keeping the output static.

**Why design tokens instead of two themes.** A second stylesheet for dark mode
means every future style change has to be made twice and will eventually drift.
Resolving both themes against one set of custom properties makes the toggle a
variable swap.

**Why CSS Modules over a utility framework.** The component count is small and
the visual language is specific. Scoped modules kept the styles next to the
components they belong to without adding a build-time class generator.

**Why obfuscate contact details.** Publishing a plain `mailto:` on an indexed
page guarantees scraping. `react-obfuscate` reverses the string in the DOM and
restores it visually with CSS, defeating naive harvesters at no cost to a human
reader.

## License

MIT © Frank Santaguida — see [LICENSE](LICENSE).

<!-- TODO: package.json already declares "license": "MIT", but the LICENSE file
     in the repo is the Gatsby starter's BSD Zero Clause. Replace LICENSE with
     MIT text so the three agree. -->
