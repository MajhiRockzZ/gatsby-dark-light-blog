import { useStaticQuery, graphql } from "gatsby"

export const useHeroQuery = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      allMdx(filter: { frontmatter: { type: { eq: "hero" } } }) {
        nodes {
          frontmatter {
            heroImage {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
              }
            }
            heroImageBtnLink
            heroImageBtnText
            heroImageText
          }
        }
      }
    }
  `)

  return data.allMdx.nodes.frontmatter
}
