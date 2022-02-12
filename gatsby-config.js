const path = require('path')

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        "pages": path.join(__dirname, 'src/pages'),
        "src": path.join(__dirname, 'src')
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat\:400,600`,
        ],
        display: 'swap'
      }
    }
  ],
}
