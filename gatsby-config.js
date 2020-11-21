/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    { resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID, // for security
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, // for security
      }},
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          'gatsby-plugin-react-helmet',
          {
            resolve: "gatsby-plugin-page-progress",
            options: {
              includePaths: ["/", { regex: "^/blog" }],
              excludePaths: ["/blog/beep-beep-lettuce"],
              height: 3,
              prependToBody: false,
              color: `#663399`,
              footerHeight: 500,
            }
          },
          "gatsby-remark-relative-images",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              // above: keeps images from linking to the image
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`, // nodejs file, nodejs syntax
      },
    },
  ],
  siteMetadata: {
    title: "Frank Joseph Santaguida",
    author: "Frank J Santaguida",
  },
}
