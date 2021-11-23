import { createGlobalStyle } from "styled-components"
import MuliRegular from "../fonts/Muli-Regular.woff"
import MuliBlack from "../fonts/Muli-Black.woff"

export const colors = {
  white: "#fff",
  darkGrey: "#1a1c20",
  deepDarkGrey: "#404040",
  blueShade1: "#215973",
  blueShade2: "#6fadc6",
  blueShade3: "#d1e1e9",
}

export const darkTheme = {
  colors: {
    background: colors.darkGrey,
    menuBackground: colors.blueShade1,
    textDark: colors.blueShade3,
    textMain: colors.blueShade2,
    textSecondary: colors.blueShade3,
  },
}

export const lightTheme = {
  colors: {
    background: colors.white,
    menuBackground: colors.blueShade3,
    textDark: colors.blueShade1,
    textMain: colors.blueShade2,
    textSecondary: colors.deepDarkGrey,
  },
}

export const GlobalStyles = createGlobalStyle`
  :root {
    --site-max-width: 1200px;
  }

  @font-face {
    font-family: 'Muli Regular';
    src: local('Muli Regular'), local('MuliRegular'),
      url(${MuliRegular}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Muli Black';
    src: local('Muli Black'), local('MuliBlack'),
      url(${MuliBlack}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.textSecondary};
    font-family: "Muli Regular", Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0 20px 80px 20px;
    transition: all 0.5s ease;
  }

`
