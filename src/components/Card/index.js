import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Link } from "gatsby"
import { Wrapper, Author, Avatar, HalfCircle, Header } from "./Card.styles"
import * as classes from "./Card.module.css"

const Card = () => {
  return (
    <Wrapper className={classes.card}>
      <Header>
        <p>Nov 24 2021</p>
        <h2>Never forget</h2>
      </Header>

      <Author>
        <Avatar>
          <StaticImage src="../../images/gatsby-icon.png" alt="image" />
        </Avatar>

        <HalfCircle viewBox="0 0 106 57">
          <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
        </HalfCircle>

        <div>
          <div>Author</div>
          Sumesh Majhi
        </div>
      </Author>
    </Wrapper>
  )
}

export default Card
