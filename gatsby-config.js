module.exports = {
  siteMetadata: {
    title: 'Elon Diaries - A timeline of Elon Musk',
    description: 'What is Elon talking about today',
    keywords: 'Elon, Elon Musk, Tesla, SpaceX'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-60526867-3",
        head: false,
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      }
    }
  ],
}
// {
//   resolve: `gatsby-plugin-google-fonts`,
//     options: {
//   fonts: [
//     `montserrat alternates\:400,600`
//   ]
// }
// }
//
// {
//   resolve: `gatsby-plugin-favicon`,
//     options: {
//   logo: "./src/favicon.ico",
//     injectHTML: true,
//     icons: {
//     android: true,
//       appleIcon: true,
//       appleStartup: true,
//       coast: false,
//       favicons: true,
//       firefox: true
//   }
// }
// }