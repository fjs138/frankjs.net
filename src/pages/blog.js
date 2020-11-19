import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery} from "gatsby"

export default function BlogPage() {
  const data = useStaticQuery(graphql`
    query {allMarkdownRemark{edges{node{frontmatter{title date}}}}}
  `)

  return (
    <Layout>
      <h1>Blog Page</h1>
      <ol>
        {data.allMarkdownRemark.edges.map((edge)=>{
          return (
            <li>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol>

    </Layout>
  )
}

// generate slug for each post  gatsby.md -> gatsby -> /blog/gatsby
// generate blog post page template
// generate new page for each post
