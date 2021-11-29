import { graphql } from "gatsby"
import React from "react"
import BlogPostCard from "../components/BlogPostCard"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import PageNavigation from "../components/PageNavigation"
import Seo from "../components/Seo"

export default function Home({ data, pageContext }) {
  const posts = data.allMdx.nodes
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <main>
        <PageNavigation
          currentPage={pageContext.currentPage}
          numPages={pageContext.numPages}
        />
        {posts.map((post, index) => {
          const title = post.frontmatter.title || "No title"
          return (
            <BlogPostCard
              key={post.slug}
              slug={post.slug}
              title={title}
              date={post.frontmatter.date}
              readingTime={post.timeToRead}
              excerpt={post.excerpt}
              image={post.frontmatter.image}
            />
          )
        })}
      </main>
    </Layout>
  )
}

export const indexQuery = graphql`
  query BlogListQuery($skip: Int, $limit: Int) {
    allMdx(
      limit: $limit
      skip: $skip
      filter: { frontmatter: { type: { eq: "post" }, published: { eq: true } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        slug
        timeToRead
        frontmatter {
          date
          title
          image {
            childImageSharp {
              gatsbyImageData(
                placeholder: TRACED_SVG
                layout: CONSTRAINED
                width: 200
                height: 200
              )
            }
          }
        }
        excerpt
      }
    }
  }
`
