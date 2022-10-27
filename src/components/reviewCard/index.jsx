import { ThumbsUp } from 'phosphor-react'

import * as A from './styles'

export function ReviewCard() {
  return (
    <A.ReviewContainer href="#">
      <A.Banner>
        <A.Overlay>
          <span>Read Full Review</span>
        </A.Overlay>
      </A.Banner>

      <A.Content>
        <header>Review of title</header>

        <A.Text>
          <p id="char-limit">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
            quaerat sunt quasi fugit, accusantium, sed voluptas in distinctio,
            facilis nemo similique debitis autem quia nihil nostrum id magni
            commodi optio.
          </p>
          <A.Like>
            <ThumbsUp size={12} weight="fill" />1
          </A.Like>
        </A.Text>
      </A.Content>
    </A.ReviewContainer>
  )
}
