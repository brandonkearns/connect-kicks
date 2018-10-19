const dotenv = require('dotenv');

if (process.env.ENVIRONMENT !== 'production') {
  dotenv.config();
}

const { spaceId, accessToken } = process.env;

module.exports = {
  siteMetadata: {
    title: 'Connect Kicks',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId,
        accessToken,
      }
    }
  ],
}
