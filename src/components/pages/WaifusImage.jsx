import styled from '@emotion/styled'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'

const Image = styled.div`
  overflow: hidden;
  height: 100%;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`

export function WaifuImage({ src, title }) {
  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      reset: true,
      delay: 500,
      opacity: 0,
      scale: 0.8,
      easing: 'ease-in-out',
    })
  }, [])

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image className="reveal">
      <img src={src} alt={title} />
    </Image>
  )
}
