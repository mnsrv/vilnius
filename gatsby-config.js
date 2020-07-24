require('dotenv').config()

module.exports = {
  siteMetadata: {
    mapboxToken: process.env.MAPBOX_TOKEN,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/pages/blog`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'wishlist',
        path: `${__dirname}/src/pages/wishlist`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'books',
        path: `${__dirname}/src/pages/books`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-ackee-tracker',
      options: {
        // Domatin ID found when adding a domain in the admin panel.
        domainId: '9ef0578c-7a24-44ec-9866-7cbf5446d462',
        // URL to Server eg: "https://analytics.test.com".
        server: 'https://ackee-mansurov-me.herokuapp.com',
        // Disabled analytic tracking when running localy
        ignoreLocalhost: true,
        // If enabled it will collect info on OS, BrowserInfo, Device  & ScreenSize
        detailed: true,
      },
    },
    'gatsby-plugin-dark-mode',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 960,
              linkImagesToOriginal: false,
              showCaptions: true,
              wrapperStyle: (fluidResult) => {
                if (fluidResult.aspectRatio < 1) {
                  return 'max-width: 480px !important; width: 50%;'
                }
                return ''
              },
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
          },
        ],
      },
    },
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
  ],
}
