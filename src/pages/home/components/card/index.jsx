import ScrollReveal from "scrollreveal";
import { useEffect, useState } from "react";
import { css } from "@emotion/css";

import { api, apiTest, apiTest3 } from "../../../../services/api";
import { CardImage } from "../cardImage";

import * as C from "./styles";

//! CORRIGIR MÚLTIPLAS RENDERIZAÇÕES E O REVEAL

export function Card() {
  /* console.log("Renderizou os cards"); */

  const [waifus, setWaifus] = useState([]);

  useEffect(() => {
    const randomNumber = (max) => {
      return Math.floor(Math.random() * max);
    };

    apiTest3
      .get(
        `/post.json?limit=${randomNumber(
          10
        )}&tags=genshin_impact&page=${randomNumber(50)}`
      )
      .then((response) => {
        setWaifus(response.data);
        /* console.log(response); */
      });
  }, []);

  return (
    <>
      {waifus.map((waifu, index) => {
        return (
          <C.ContainerCard key={index}>
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
              {/* <CardImage src={waifu.preview_url} /> */}
              <C.Text>
                <span>Ep 12</span>
                <span>00d 00h 25m</span>
              </C.Text>
              <C.Overlay>
                <span>4 +</span>
              </C.Overlay>
            </a>
          </C.ContainerCard>
        );
      })}
    </>
  );
}
