import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import blogModule from "./blog.module.scss"
import labelModule from "../components/ui/section-label.module.scss"
import { cssModule } from "../utils/css-module"
import Head from "../components/head"

const blogStyles = cssModule(blogModule)
const label = cssModule(labelModule)

export default function BlogPage() {
  const data = useStaticQuery(graphql`
    query BlogList {
      allContentfulBlogPost(sort: { publishedDate: DESC }) {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `)

  const posts = data.allContentfulBlogPost.edges

  return (
    <Layout>
      <Head title="Blog" />
      <header className={`${blogStyles.header} page-enter`}>
        <span className={label.label}>Writing</span>
        <h1 className={blogStyles.title}>Blog</h1>
        <p className={blogStyles.subtitle}>
          Notes on engineering, AI, and things I am learning.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className={blogStyles.empty}>No posts yet.</p>
      ) : (
        <ol className={`${blogStyles.posts} page-enter-delay-1`}>
          {posts.map((edge) => (
            <li key={edge.node.slug} className={blogStyles.post}>
              <Link
                to={`/blog/${edge.node.slug}`}
                className={blogStyles.link}
              >
                <h2>{edge.node.title}</h2>
              </Link>
            </li>
          ))}
        </ol>
      )}
    </Layout>
  )
}
