import React from "react"
import { graphql } from "gatsby"
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Head from "../components/head"

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
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
      <h1>{post.title}</h1>
      {body}
    </Layout>
  )
}
