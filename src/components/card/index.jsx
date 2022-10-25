import ScrollReveal from "scrollreveal";
import { useEffect, useState } from "react";

import { apiTest } from "../../services/api";

import * as A from "./styles";

export function Card() {
  function reveal() {
    window.effect = ScrollReveal({ reset: true });
    const mods = {
      duration: 500,
      delay: 50,
      distance: "100px",
      easing: "ease-in-out",
      interval: 150,
      opacity: 0,
      scale: 0.75,
      origin: "bottom",
      rotate: {
        x: 100,
        y: 0,
        z: 0,
      },
    };
    effect.reveal(".reveal", mods);
  }

  useEffect(() => {
    reveal();
  }, []);

  const [waifus, setWaifus] = useState([]);

  useEffect(() => {
    apiTest
      .get("/random?many=false&gif=false&is_nsfw=false&orientation=PORTRAIT")
      .then((response) => {
        setWaifus(response.data.images);
      });
  }, []);

  return (
    <>
      {waifus.map((waifu, index) => {
        return (
          <A.ContainerCard key={index} className="reveal">
            <a href={waifu.source}>
              <img src={waifu.url} alt="" />
              <A.Text>
                <span>Ep 12</span>
                <span>00d 00h 25m</span>
              </A.Text>
              <A.Overlay>
                <span>4 +</span>
              </A.Overlay>
            </a>
          </A.ContainerCard>
        );
      })}
    </>
  );
}
