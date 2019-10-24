require('dotenv').config()

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-source-rss-feed',
      options: {
        url: 'https://letterboxd.com/mansurov/rss/',
        name: `Letterboxd`,
        parserOption: {
          customFields: {
            item: [
              'letterboxd:watchedDate',
              'letterboxd:filmTitle',
              'letterboxd:filmYear',
              'letterboxd:memberRating'
            ]
          }
        }
      }
    },
    {
      resolve: '@jamesdanylik/gatsby-source-goodreads',
      options: {
        key: process.env.GOODREADS_KEY,
        id: '74776573'
      }
    },
    {
      resolve: `gatsby-source-tumblr`,
      options: {
        blogIdentifier: 'sasha-mjolnir',
        consumerKey: process.env.TUMBLR_CONSUMER_KEY
      }
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
        detailed: true
      }
    },
    'gatsby-plugin-dark-mode',
    'gatsby-plugin-twitter',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-transformer-json',
    'gatsby-plugin-styled-components'
  ]
}
