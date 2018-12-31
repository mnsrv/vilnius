require("dotenv").config({
  path: '.env',
})

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'OpenWeatherAPI',
        fieldName: 'weather',
        url: 'https://cnty2dmxbjaipcnilhtlihn5km.appsync-api.us-west-2.amazonaws.com/graphql',
        headers: {
          "x-api-key": process.env.AWS_WEATHER_API_KEY
        },
        refetchInterval: 60
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    }
  ]
}