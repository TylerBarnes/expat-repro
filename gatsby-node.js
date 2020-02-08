const path = require("path")
const slash = require("slash")
const _ = require("lodash")
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pageTemplate = path.resolve("./src/templates/page.js")
  const archiveTemplate = path.resolve("./src/templates/archive.js")
  const postTemplate = path.resolve("./src/templates/post.js")

  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            status
            link
            wordpress_id
            wordpress_parent
          }
        }
      }
    }
  `)

  // Check for errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  const { allWordpressPage } = result.data

  exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
      devtool: "eval-source-map",
    })
  }

  allWordpressPage.edges.forEach(edge => {
    if (edge.node.status === "publish") {
      console.log(edge.node.link)
      const path = decodeURIComponent(edge.node.link)
      console.log(path)
      createPage({
        path,
        component: slash(pageTemplate),
        context: {
          id: edge.node.id,
          parent: edge.node.wordpress_parent,
          wpId: edge.node.wordpress_id,
        },
      })
    }
  })
}
