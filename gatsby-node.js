const path = require("path") // nodejs
// path.basename('/foo/bar/baz/asdf/quux.html');
//returns 'quux.html'
// path.basename('/foo/bar/baz/asdf/quux.html', '.html');
//returns 'quux'


// generate pages
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions; // deconstruct from actions
  // 1 get path to template
  const blogTemplate = path.resolve("./src/templates/blog.js");

  // 2 get contentful data
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach((edge) => {
    // 3 create new pages
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        //things we can pass down to the template
        slug: edge.node.slug,
      },
    })
  })
}
