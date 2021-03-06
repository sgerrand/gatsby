// isomorphic-fetch sets global.fetch which seems to conflicts with source-map@<0.8.0 where it does a
// simple browser check if (global.fetch) which is true when isomorphic-fetch is used. This creates an
// exception in react-hot-loader. @see https://github.com/gatsbyjs/gatsby/pull/13713
//
// This is only necessary if we are testing react < 16.9 or if you are forcing GATSBY_HOT_LOADER=react-hot-loader.
// When we are using fast-refresh we do not need this hack.
// TODO: Remove once fast-refresh is the default
//
require(`isomorphic-fetch`)

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    author: `@gatsbyjs`,
    social: {
      twitter: `kylemathews`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-source-fake-data`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-subcache`],
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-image`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
