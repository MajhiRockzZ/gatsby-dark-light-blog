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
    background: #201c29;
    border-radius: 10px;
    box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),
      inset -2px -2px 2px rgba(0, 0, 0, 0.25);
  }

  ::-webkit-scrollbar-track {
    background: linear-gradient(
      90deg,
      #201c29,
      #201c29 1px,
      #17141d 0,
      #17141d
    );
  }
`
