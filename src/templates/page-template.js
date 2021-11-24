import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Image from "../components/Image"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Page = ({ data }) => {
  const { title, image } = data.mdx.frontmatter

  return (
    <Layout>
      <Seo title={title} />
      <Image image={getImage(image)} alt={title} />
      <main>
        <h2>{title}</h2>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetSinglePage($slug: String) {
    mdx(slug: { eq: $slug }) {
      frontmatter {
        title
        date
        image {
          childImageSharp {
            gatsbyImageData(
              placeholder: TRACED_SVG
              layout: CONSTRAINED
              width: 2000
            )
          }
        }
      }
      body
    }
  }
`

export default Page
