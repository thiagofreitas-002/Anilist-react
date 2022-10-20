import ScrollReveal from 'scrollreveal'

<<<<<<< HEAD
import styled from "@emotion/styled";
import { useEffect } from "react";

const CardContent = styled.div`
  a {
    background-color: white;
=======
import styled from '@emotion/styled'
import { useEffect } from 'react'

const CardContent = styled.div`
  a {
    background-image: url('https://cdn.waifu.im/6466.jpeg');
>>>>>>> beta
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    display: inline-block;
    width: 100%;
    min-height: 115px;
    border-radius: 4px;
    position: relative;
    /* visibility: hidden; */
  }
`

const Text = styled.div`
  position: absolute;
  background-color: rgba(31, 38, 49, 0.7);
  width: 100%;
  height: 41%;
  bottom: 0;
  padding: 8px;
  text-align: center;
  color: white;
  font-size: 0.8rem;
  text-transform: capitalize;
`

const Overlay = styled.div``

export function Card() {
<<<<<<< HEAD
  function revealCards() {
    window.effect = ScrollReveal({ reset: true });
    const mods = {
      duration: 500,
      delay: 50,
      distance: "10px",
      easing: "ease-in-out",
      interval: 50,
      opacity: 0,
      scale: 0.75,
      origin: "bottom",
      rotate: {
        x: 100,
        /*  
      y: 100,
      z: 100, 
      */
      },
    };
    effect.reveal(".test", mods);
  }

  useEffect(() => {
    revealCards()
  })
=======
  function reveal() {
    window.effect = ScrollReveal({ reset: true })
    const mods = {
      duration: 500,
      delay: 0,
      distance: '10px',
      easing: 'ease-in-out',
      interval: 50,
      opacity: 0,
      scale: 0.75,
      origin: 'bottom',
      rotate: {
        x: 100,
        y: 0,
        z: 0,
      },
    }
    // eslint-disable-next-line no-undef
    effect.reveal('.test', mods)
  }

  useEffect(() => {
    reveal()
  }, [])
>>>>>>> beta

  return (
    <CardContent className="test">
      <a href="#">
        <Text></Text>
        <Overlay></Overlay>
      </a>
    </CardContent>
  )
}
