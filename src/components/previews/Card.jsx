import ScrollReveal from "scrollreveal";

import styled from "@emotion/styled";
import { useEffect } from "react";

const CardContent = styled.div`
  a {
    background-color: white;
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
`;

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
`;

const Overlay = styled.div``;

export function Card() {
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

  return (
    <CardContent className="test">
      <a href="#">
        <Text></Text>
        <Overlay></Overlay>
      </a>
    </CardContent>
  );
}
