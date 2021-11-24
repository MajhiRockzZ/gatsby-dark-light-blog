import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { graphql } from "gatsby"
import Image from "../components/Image"
import { getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Post = ({ data }) => {
  const post = data.mdx

  return (
    <Layout>
      <Seo title={post.frontmatter.title} />
      <Image
        image={getImage(post.frontmatter.image)}
        alt={post.frontmatter.title}
      />
      <main>
        <h2>{post.frontmatter.title}</h2>
        <MDXRenderer>{post.body}</MDXRenderer>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetSinglePost($slug: String) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        date
        image {
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`

export default Post
