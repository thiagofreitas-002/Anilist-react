import { useEffect, useState } from "react";
import { css } from "@emotion/css";

import { danbooru } from "../../services/api";
import { WaifuImage } from "./components/waifusImage";
import { Loading } from "../../components/loading";

import * as C from "./styles";

export function Waifus() {
  const [waifus, setWaifus] = useState([]);
  /* const [removeLoading, setRemoveLoading] = useState(false); */

  useEffect(() => {
    setTimeout(
      () => {
        const randomNumber = (max) => {
          return Math.floor(Math.random() * max);
        };

        const login = "login=Ot4kuAki";
        const key = "api_key=yupv1JtHPF8aoRL6BTPKNJf2";

        danbooru
          .get(
            `/posts.json?${login}&${key}&random:50&limit=100&tags=is:sfw&page=${randomNumber(
              25
            )}`
          ) /* &random:50 */
          .then((response) => {
            console.log(response.data);
            setWaifus(response.data);
            /* setRemoveLoading(true); */
          });
      } /* 1000 */
    );
  }, []);

  console.log("Renderizou as imagens");

  return (
    <C.Container>
      {waifus.length >= 10 &&
        waifus?.map((waifu) => {
          return (
            <div
              className={css`
                height: 100%;
                position: relative;
              `}
              key={waifu.id}
              target="_blank"
              rel="noreferrer"
            >
              <WaifuImage
                src={waifu.large_file_url}
                alt={waifu.tag_string_general}
                waifu={waifu}
              />
            </div>
          );
        })}
      {/* {!removeLoading && <Loading />} */}
    </C.Container>
  );
}
