const proxy = require('http-proxy-middleware')

module.exports = {
  siteMetadata: {
    title: 'Gatsby + WordPress Starter',
    siteUrl: 'https://eastbaymajority.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        baseUrl: '168.235.94.38',
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: 'http',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: false,
        auth: {},
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-MPWHKMC',

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // Specify optional GTM environment details.
        // gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING',
        // gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME',
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/tags/*', '/categories/*', '/author/*', '/do-not-delete/'],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-purgecss',
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
  developMiddleware: app => {
    app.use(
      proxy('/.netlify/functions/', {
        target: 'http://localhost:8080/',
        pathRewrite: {
          '^/\\.netlify/functions': '',
        },
      })
    )
  },
}
