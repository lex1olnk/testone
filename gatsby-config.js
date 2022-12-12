module.exports = {
    pathPrefix: "/testone",
    siteMetadata: {
        siteUrl: `https://testonemain.gatsbyjs.io`,
      },
    plugins: [
        {
            resolve: 'gatsby-plugin-postcss',
            options: {
                postCssPlugins: [require('tailwindcss')('./tailwind.config.js')],
            },
        },
        `gatsby-plugin-sass`,
      ],
}