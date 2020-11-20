import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

// useStaticQuery doesn't let us access the context which contains our slug
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

export default function Blog(props) {
  return (
    <Layout>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html}}></div>
    </Layout>
  )
}
