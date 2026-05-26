import React from "react"
import { Link, graphql } from "gatsby"
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Head from "../components/head"
import blogModule from "./blog.module.scss"
import { cssModule } from "../utils/css-module"

const styles = cssModule(blogModule)

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM D, YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            gatsbyImageData(layout: CONSTRAINED, width: 750)
            file {
              url
            }
          }
        }
      }
    }
  }
`

export default function Blog({ data }) {
  const post = data.contentfulBlogPost
  const body = renderRichText(post.body, {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = node.data.target
        const image = getImage(asset)

        if (image) {
          return <GatsbyImage alt={asset.title || ""} image={image} />
        }

        if (asset?.file?.url) {
          return <img alt={asset.title || ""} src={asset.file.url} />
        }

        return null
      },
    },
  })

  return (
    <Layout>
      <Head title={post.title} />
      <Link to="/blog" className={`${styles.back} page-enter`}>
        ← Back to blog
      </Link>
      <article>
        <header className={`${styles.header} page-enter-delay-1`}>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.meta}>{post.publishedDate}</p>
        </header>
        <div className={`${styles.body} page-enter-delay-2`}>{body}</div>
      </article>
    </Layout>
  )
}
