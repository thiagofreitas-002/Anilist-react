import { useEffect, useState } from "react";

import { api } from "../../services/api";
import { WaifuImage } from "./WaifusImage";
import * as W from "./WaifusStyle";

export function Waifus() {
  const [waifus, setWaifus] = useState([]);

  useEffect(() => {
    api.get("/waifus/").then((response) => {
      console.log(response);
      setWaifus(response.data);
    });
  }, []);

  return (
    <W.Waifus>
      {waifus?.map((waifu) => {
        return (
          <WaifuImage
            key={waifu.image_id}
            src={waifu.url}
            title={waifu.tags[0].description}
          />
        );
      })}
    </W.Waifus>
  );
}
