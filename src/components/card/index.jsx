import ScrollReveal from "scrollreveal";
import { useEffect, useState } from "react";

import { api, apiTest, apiTest3 } from "../../services/api";

import * as A from "./styles";
import { css } from "@emotion/css";

//! CORRIGIR MÚLTIPLAS RENDERIZAÇÕES E O REVEAL

export function Card() {
  console.log("Renderizou os cards");

  function reveal() {
    window.effect = ScrollReveal({ reset: false });
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
    const randomNumber = (max) => {
      return Math.floor(Math.random() * max);
    };

    apiTest3
      .get(
        `/post.json?limit=${randomNumber(
          20
        )}&tags=genshin_impact&page=${randomNumber(250)}`
      )
      .then((response) => {
        setWaifus(response.data);
        console.log(response);
      });
  }, []);

  return (
    <>
      {waifus.map((waifu, index) => {
        return (
          <A.ContainerCard key={index} className="reveal">
            <a
              href={waifu.file_url}
              target="_blank"
              rel="noreferrer"
              className={css`
                background-image: url(${waifu.preview_url});
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
              `}
            >
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
