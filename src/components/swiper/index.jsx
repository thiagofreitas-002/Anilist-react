import { useState, useEffect } from "react";
import { css } from "@emotion/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper";
import "swiper/css/effect-creative";
import "swiper/css";

import { api, apiTest } from "../../services/api";

const swiperStyle = css`
  height: 300px;
  background: rgba(21, 31, 46);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;

  .swiper-wrapper {
    display: flex;
    position: absolute;
    align-items: flex-start;
    height: inherit;

    .swiper-slide {
      height: inherit;

      img {
        object-fit: contain;
        object-position: center;
        /* transform: scale(1); */
        height: 100%;
        width: 100%;
      }
    }
  }
`;

export function SwiperContent() {
  const [waifus, setWaifus] = useState([]);

  useEffect(() => {
    apiTest
      .get("/random?many=true&nsfw=true&included-tags=ass")
      .then((response) => {
        console.log(response);
        setWaifus(response.data.images);
      });
  }, []);

  return (
    <Swiper
      grabCursor={true}
      effect={"creative"}
      /* autoHeight={true} */
      creativeEffect={{
        prev: {
          shadow: true,
          translate: ["-121%", 0, -500],
        },
        next: {
          translate: ["121%", 0, -500],
        },
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[EffectCreative, Autoplay]}
      className={swiperStyle}
    >
      {waifus?.map((waifu) => {
        return (
          <SwiperSlide key={waifu.image_id}>
            <img
              key={waifu.image_id}
              src={waifu.url}
              title={waifu.tags[0].name}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
