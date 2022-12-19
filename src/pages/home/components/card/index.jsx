import ScrollReveal from 'scrollreveal'
import { useEffect, useState } from 'react'

import { danbooru } from '../../../../services/api'

import * as C from './styles'

//! CORRIGIR MÚLTIPLAS RENDERIZAÇÕES E O REVEAL

export function Card() {
  const [waifus, setWaifus] = useState([])

  function reveal() {
    window.effect = ScrollReveal({ reset: true })
    const mods = {
      duration: 200,
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

    effect.reveal('.reveal', mods)
  }

  useEffect(() => {
    const login = 'login=Ot4kuAki'
    const key = 'api_key=yupv1JtHPF8aoRL6BTPKNJf2'
    const randomNumber = (max) => {
      return Math.floor(Math.random() * max)
    }

    danbooru.get(`/posts.json?${login}&${key}&limit=${randomNumber(20)}&tags=is:sfw&page=${randomNumber(25)}`).then((response) => {
      setWaifus(response.data)
      console.log(response.data)
    })

    reveal()
  }, [])

  return (
    <>
      {waifus.map((waifu) => {
        return (
          <C.Container key={waifu.id} href={waifu.large_file_url} target="_blank" rel="noreferrer" className="reveal">
            <C.Text>
              <span>Ep 12</span>
              <span>00d 00h 25m</span>
            </C.Text>
            <C.Overlay>
              <span>4 +</span>
            </C.Overlay>
          </C.Container>
        )
      })}
    </>
  )
}
