// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const autoprefixer = require('autoprefixer')

module.exports = {
  siteName: "codywilson.dev",
  siteDescription: 'Personal portfolio, blog, and resume website of Cody Wilson',
  siteUrl: "https://codywilson.dev",
  titleTemplate: '%s | codywilson.dev',
  icon: 'src/favicon.png',
  author: 'Cody Wilson',
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss"
    },
    // // TODO: Configure once we need to add filesystem-based content entries
    // // {
    // //   // SEE: https://gridsome.org/plugins/@gridsome/source-filesystem
    // //   use: "@gridsome/source-filesystem"
    // // },
    {
      // SEE: https://gridsome.org/plugins/@gridsome/plugin-sitemap
      use: "@gridsome/plugin-sitemap"
      // TODO: Once client-specific cover letter pages are added, be sure to add those paths to options.exclude
      options: {
        exclude: [
          '/404',
          '/submission-success',
        ],
        config: {
          "/*": {
            changefreq: 'weekly',
            priority: 0.5,
            lastmod: "2021-08-08",
          },
        }
      }
    },
    // {
    //   // SEE: https://gridsome.org/plugins/gridsome-plugin-robots-txt
    //   use: "gridsome-plugin-robots-txt"
    //   // TODO: Update config prior to production deployment
    //   // options: {}
    // }
  ],
  loaderOptions: {
    postcss: {
      plugins: {
        autoprefixer: {}
      }
    }
  }
}
