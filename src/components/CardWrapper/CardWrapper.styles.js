import styled from "styled-components"

export const Wrapper = styled.section`
  display: flex;
  padding: 3rem;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.background};
    border-radius: 10px;
    box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),
      inset -2px -2px 2px rgba(0, 0, 0, 0.25);
  }

  ::-webkit-scrollbar-track {
    background: linear-gradient(
      90deg,
      #201c29,
      #201c29 1px,
      ${props => props.theme.colors.background} 0,
      ${props => props.theme.colors.background}
    );
  }
`
