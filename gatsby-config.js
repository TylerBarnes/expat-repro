module.exports = {
/*pathPrefix: `/testsite`,*/

  siteMetadata: {
    title: `Expat Guide Turkey`,
    description: `Expat Guide Turkey - Ata Institutional Consultancy & Consulting Services for foreigners.`,
    keywords: 'turkey',
    author: `@amreshabux`,
    siteUrl:`https://www.expatguideturkey.com`,
    baseUrl:`https://www.expatguideturkey.com`,
    url: `https://www.expatguideturkey.com`,
  },
  plugins: [
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
          once: true, // Defines if animation needs to be launched once
          disable: false, // Flag for disabling animations
          
          // Advanced Options
          selector: '[data-sal]', // Selector of the elements to be animated
          animateClassName: 'sal-animate', // Class name which triggers animation
          disabledClassName: 'sal-disabled', // Class name which defines the disabled state
          rootMargin: '0% 50%', // Corresponds to root's bounding box margin
          enterEventName: 'sal:in', // Enter event name
          exitEventName: 'sal:out' // Exit event name
      }
    },

    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {   
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },  
    },  

    `gatsby-transformer-sharp`,
    `gatsby-plugin-less`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/expat-guide-turkey-icon.png`, // This path is relative to the root of the site.
      },
    },

    "gatsby-plugin-offline",
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        excludedRoutes: [
          '/wp/v2/users/**',
          '/wp/v2/settings*',
          '/wp/v2/themes*',
        ],
        baseUrl: `cms.expatguideturkey.com`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: true,

       includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
          "**/herosliders",
          "**/services",
          "**/footer",
          "**/cta",
          "**/comments",
          "**/menus"
        ],
        searchAndReplaceContentUrls: {
          sourceUrl: 'https://cms.expatguideturkey.com',
          replacementUrl: '',
        }, // This path is relative to the root of the site.
      },
    },

    `gatsby-plugin-styled-components`,
    {
      resolve:  'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Raleway',
            variants: ['200', '400', '500', '600', '700'],

          },

        ],

      },

    },

    `gatsby-plugin-page-transitions`,
    {
      resolve: 'gatsby-plugin-page-transitions',
      options: {
        transitionTime: 500
      }
    },

    `@debiki/gatsby-plugin-talkyard`,
    {
      resolve: `@debiki/gatsby-plugin-talkyard`,
      options: {
        talkyardServerUrl: 'https://comments-for-fervent-goldwasser-d8fed7-netlify-com.talkyard.net'
      }
    },


    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/expatguideturkey-sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: [`/category/*`, `/path/to/page`],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
            }
          })
      }
    }

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
