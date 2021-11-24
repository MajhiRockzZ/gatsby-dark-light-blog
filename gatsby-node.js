const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

// Create the slug for posts and pages
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `content`,
    })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const content = await graphql(`
    {
      posts: allMdx(filter: { frontmatter: { type: { eq: "post" } } }) {
        nodes {
          frontmatter {
            published
          }
          slug
        }
      }

      pages: allMdx(filter: { frontmatter: { type: { eq: "page" } } }) {
        nodes {
          slug
        }
      }
    }
  `)

  // Do nothing more if error
  if (content.error) {
    return
  }

  const allPosts = content.data.posts.nodes
  const allPages = content.data.pages.nodes

  // Create the individual post pages
  allPosts.forEach(node => {
    if (node.frontmatter.published) {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/post-template.js`),
        context: {
          slug: node.slug,
        },
      })
    }
  })

  // Create the individual pages
  allPages.forEach(node => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/page-template.js`),
      context: {
        slug: node.slug,
      },
    })
  })

  // Create the archive pages
  const postsPerPage = 5
  const numPages = Math.ceil(allPosts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: path.resolve(`./src/templates/home-template.js`),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
