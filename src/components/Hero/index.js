import { graphql, Link, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import React from "react"
import BGImage from "../BGImage"
import { HeroWrapper, TextWrapper } from "./Hero.styles"

const query = graphql`
  {
    allMdx(filter: { frontmatter: { type: { eq: "hero" } } }) {
      nodes {
        frontmatter {
          heroImage {
            childImageSharp {
              gatsbyImageData(
                width: 2000
                placeholder: TRACED_SVG
                layout: CONSTRAINED
              )
            }
          }
          heroImageBtnLink
          heroImageBtnText
          heroImageText
        }
      }
    }
  }
`

const Hero = () => {
  const {
    allMdx: { nodes: data },
  } = useStaticQuery(query)

  const { heroImage, heroImageBtnLink, heroImageBtnText, heroImageText } =
    data[0].frontmatter

  return (
    <HeroWrapper>
      <BGImage title="heroImage" image={getImage(heroImage)}>
        <TextWrapper>
          <h2>{heroImageText}</h2>
          <Link to={heroImageBtnLink}>
            <button>{heroImageBtnText}</button>
          </Link>
        </TextWrapper>
      </BGImage>
    </HeroWrapper>
  )
}

export default Hero
