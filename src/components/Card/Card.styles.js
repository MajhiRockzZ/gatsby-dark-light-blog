import styled from "styled-components"

export const Wrapper = styled.article`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 350px;
  width: 400px;
  min-width: 250px;
  padding: 1.5rem;
  border-radius: 16px;
  background: ${props => props.theme.colors.background};
  transition: 0.2s;

  :hover {
    transform: translateY(-1rem);
  }

  :not(:first-child) {
    margin-left: -130px;
  }
`

export const Author = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 75px 1fr;
  align-items: center;
  margin: 3rem 0 0;
`

export const Avatar = styled.a`
  img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    /* filter: grayscale(100%); */
    margin: 16px 10px;
  }
`

export const HalfCircle = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 48px;
  fill: none;
  stroke: #ff8a00;
  stroke-width: 8;
  stroke-linecap: round;
`

export const Header = styled.header`
  margin-bottom: auto;

  p {
    font-size: 14px;
    margin: 0 0 1rem;
    color: #7a7a8c;
  }

  h2 {
    font-size: 20px;
    margin: 0.25rem 0 auto;
    cursor: pointer;
    :hover {
      background: linear-gradient(90deg, #ff8a00, #e52e71);
      text-shadow: none;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`
