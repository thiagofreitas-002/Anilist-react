import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'

import * as A from './styles'

export function WaifuImage({ src, title }) {
  function reveal() {
    window.effect = ScrollReveal({ reset: true })
    const mods = {
      duration: 500,
      delay: 50,
      distance: '100px',
      easing: 'ease-in-out',
      interval: 150,
      opacity: 0,
      scale: 0.75,
      origin: 'bottom',
      rotate: {
        x: 100,
        y: 0,
        z: 0,
      },
    }
    const test = document.querySelectorAll('.reveal')

    // eslint-disable-next-line no-undef
    effect.reveal(test, mods)
  }

  useEffect(() => {
    reveal()
  }, [])

  return (
    <A.ImageContainer className="reveal">
      <img src={src} alt={title} />
    </A.ImageContainer>
  )
}
