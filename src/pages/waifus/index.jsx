import { useEffect, useState } from "react";
import { css } from "@emotion/css";

import { apiTest, apiTest3 } from "../../services/api";
import { WaifuImage } from "../../components/waifusImage";
import { Loading } from "../../components/loading";

import * as A from "./styles";

export function Waifus() {
  const [waifus, setWaifus] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const randomPageNumber = (max) => {
        return Math.floor(Math.random() * max);
      };

      apiTest
        .get(
          `/random?many=true&included_tags=ecchi&gif=false&orientation=PORTRAIT`
        )
        .then((response) => {
          console.log(response);
          setWaifus(response.data.images);
          setRemoveLoading(true);
        });
    }, 3000);
  }, []);

  /* /post.json?limit=100&page=${randomPageNumber(1000)} apiTest3 */
  /* /random?many=true&is_nsfw=false&gif=false&selected_tags=waifu&orientation=PORTRAIT apiTest */

  console.log("Renderizou as imagens");

  return (
    <A.WaifusContainer>
      {waifus.length >= 10 &&
        waifus?.map((waifu) => {
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
      {!removeLoading && <Loading />}
    </A.WaifusContainer>
  );
}
