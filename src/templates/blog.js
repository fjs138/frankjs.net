import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

// useStaticQuery doesn't let us access the context which contains our slug
export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }){
        title
        publishedDate(formatString: "MMMM Do, YYYY")
        body{raw}
    }
  }
`

export default function Blog(props) {
  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      <h2>body here{
        documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw))}</h2>

    </Layout>
  )
}
