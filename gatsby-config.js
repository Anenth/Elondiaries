module.exports = {
  siteMetadata: {
    title: 'Elon Diaries - A timeline of Elon Musk',
    description: 'What is Elon talking about today',
    keywords: 'Elon, Elon Musk, Tesla, SpaceX'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-60526867-3",
        head: false,
      },
    },
  ],
}
