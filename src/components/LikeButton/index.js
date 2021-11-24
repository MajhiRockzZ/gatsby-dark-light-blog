import React from "react"
import { Wrapper } from "./LikeButton.styles"
import { AiOutlineLike } from "react-icons/ai"

const LikeButton = () => {
  const [value, setValue] = React.useState(0)
  return (
    <Wrapper>
      <div>
        <button onClick={() => setValue(value + 1)}>
          <AiOutlineLike />
        </button>
        <p>
          Liked the post?
          <br />
          Click thumbs up few times
        </p>
      </div>
      <span>+{value}</span>
    </Wrapper>
  )
}

export default LikeButton
