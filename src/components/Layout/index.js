import React, { useContext } from "react"
import { ThemeProvider } from "styled-components"
import { ModeContext } from "../../context/ModeProvider"
import { darkTheme, GlobalStyles, lightTheme } from "../../styles/GlobalStyles"
import Header from "../Header"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        description
        title
      }
    }
  }
`

const Layout = ({ children }) => {
  const {
    site: { siteMetadata: data },
  } = useStaticQuery(query)

  const [darkMode] = useContext(ModeContext)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header siteTitle={data.title} />
      {children}
    </ThemeProvider>
  )
}

export default Layout
