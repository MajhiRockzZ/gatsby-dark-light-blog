import React, { useContext } from "react"
import { ThemeProvider } from "styled-components"
import { ModeContext } from "../../context/ModeProvider"
import { darkTheme, GlobalStyles, lightTheme } from "../../styles/GlobalStyles"

const Layout = ({ children }) => {
  const [darkMode] = useContext(ModeContext)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default Layout
