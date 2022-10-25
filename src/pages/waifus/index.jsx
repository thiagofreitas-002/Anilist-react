import { useEffect, useState } from "react";
import { css } from "@emotion/css";

import { apiTest } from "../../services/api";
import { WaifuImage } from "../../components/waifusImage";

import * as A from "./styles";

export function Waifus() {
  const [waifus, setWaifus] = useState([]);

  useEffect(() => {
    const array = ["ass", "hentai", "milf", "oral", "paizuri", "ecchi", "ero"];
    apiTest
      .get(
        `/random?many=true&is_nsfw=false&excluded_tags${array}&selected_tags=raiden-shogun&orientation=PORTRAIT`
      )
      .then((response) => {
        console.log(response);
        setWaifus(response.data.images);
      });
  }, []);

  return (
    <A.WaifusContainer>
      {waifus?.map((waifu) => {
        return (
          <a
            className={css`
              height: 100%;
            `}
            href={waifu.source}
            key={waifu.image_id}
            target="_blank"
            rel="noreferrer"
          >
            <WaifuImage
              key={waifu.image_id}
              src={waifu.url}
              title={waifu.tags[0].name}
            />
          </a>
        );
      })}
    </A.WaifusContainer>
  );
}
