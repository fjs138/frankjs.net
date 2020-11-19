/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
    { resolve: "gatsby-source-filesystem" ,
      options: {
      name:'src',
        path:`${__dirname}/src/` // nodejs file, nodejs syntax
      }
    }
    ],
  siteMetadata: {
    title: "Frank Joseph Santaguida",
    author: "Frank J Santaguida",
  },
}
