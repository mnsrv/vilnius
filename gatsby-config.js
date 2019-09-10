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
    'gatsby-plugin-twitter',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-transformer-json',
    'gatsby-plugin-styled-components'
  ]
}
