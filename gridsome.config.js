// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const autoprefixer = require('autoprefixer')

module.exports = {
  siteUrl: "https://codywilson.dev",
  siteName: "codywilson.dev",
  siteDescription: '',
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss"
    },
    // // TODO: Configure once we need to add filesystem-based content entries
    // // {
    // //   // SEE: https://gridsome.org/plugins/@gridsome/source-filesystem
    // //   use: "@gridsome/source-filesystem"
    // // },
    // {
    //   // SEE: https://gridsome.org/plugins/@gridsome/plugin-sitemap
    //   use: "@gridsome/plugin-sitemap"
    //   // TODO: Update config prior to production deployment
    //   // TODO: Once client-specific cover letter pages are added, be sure to add those paths to options.exclude
    //   // options: {
    //   //   exclude: [],
    //   //   config: {
    //   //     "/*": {
    //   //       changefreq: 'weekly',
    //   //       priority: 0.5,
    //   //       lastmod: "2021-XX-XX",
    //   //     },
    //   //   }
    //   // }
    // },
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
