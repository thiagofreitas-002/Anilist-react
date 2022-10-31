import { useEffect, useState } from "react";
import { css } from "@emotion/css";

import { danbooru } from "../../../../services/api";

import * as C from "./styles";

//! CORRIGIR MÚLTIPLAS RENDERIZAÇÕES E O REVEAL

export function Card() {
  /* console.log("Renderizou os cards"); */

  const [waifus, setWaifus] = useState([]);

  useEffect(() => {
    const randomNumber = (max) => {
      return Math.floor(Math.random() * max);
    };

    const login = "login=Ot4kuAki";
    const key = "api_key=yupv1JtHPF8aoRL6BTPKNJf2";

    danbooru
      .get(
        `/posts.json?${login}&${key}&limit=${randomNumber(
          20
        )}&tags=is:sfw&page=${randomNumber(25)}`
      )
      .then((response) => {
        setWaifus(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <>
      {waifus.map((waifu) => {
        return (
          <C.ContainerCard
            key={waifu.id}
            href={waifu.large_file_url}
            target="_blank"
            rel="noreferrer"
            className={css`
              background-image: url(${waifu.large_file_url});
            `}
          >
            <C.Text>
              <span>Ep 12</span>
              <span>00d 00h 25m</span>
            </C.Text>
            <C.Overlay>
              <span>4 +</span>
            </C.Overlay>
          </C.ContainerCard>
        );
      })}
    </>
  );
}
