import React from "react"
import { Content, FakeBGImage, Wrapper } from "./BGImage.styles"

const BGImage = ({ image, title, className, children }) => {
  return (
    <Wrapper>
      <FakeBGImage image={image} alt={title} />
      <Content className={className}>{children}</Content>
    </Wrapper>
  )
}

export default BGImage
