import React, { useContext, useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Menu from "../Menu"
import ModeButton from "../ModeButton"
import { ModeContext } from "../../context/ModeProvider"
import { Wrapper, Logo } from "./Header.styles"
import Hamburger from "../../components/Hamburger"

const query = graphql`
  {
    allMdx(filter: { frontmatter: { type: { eq: "config" } } }) {
      nodes {
        frontmatter {
          logo {
            publicURL
          }
          menu {
            id
            link
            name
          }
        }
      }
    }
  }
`

const Header = ({ siteTitle = `` }) => {
  const [darkMode, setDarkMode] = useContext(ModeContext)
  const [menuOpen, setMenuOpen] = useState(false)

  const {
    allMdx: { nodes: data },
  } = useStaticQuery(query)
  const { logo, menu } = data[0].frontmatter

  return (
    <Wrapper>
      <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu items={menu} />
      <Link to="/">
        <Logo src={logo.publicURL} alt={siteTitle} />
      </Link>
      <ModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
    </Wrapper>
  )
}

export default Header
