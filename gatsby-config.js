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
            item: ['letterboxd:watchedDate', 'letterboxd:filmTitle', 'letterboxd:filmYear', 'letterboxd:memberRating']
          }
        }
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-plugin-styled-components'
  ]
}