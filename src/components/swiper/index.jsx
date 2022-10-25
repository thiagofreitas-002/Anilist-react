import { Autoplay, EffectCreative } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";

import { css } from "@emotion/css";
import { apiTest } from "../../services/api";
import { Image } from "./image";

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
    }
  }
`;

export function SwiperContent() {
  const [waifus, setWaifus] = useState([]);

  useEffect(() => {
    apiTest
      .get(
        "/random?many=true&is_nsfw=false&gif=false&selected_tags=waifu&orientation=LANDSCAPE"
      )
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
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: ["-105%", 0, -500],
        },
        next: {
          shadow: true,
          translate: ["105%", 0, -500],
        },
      }}
      modules={[Autoplay, EffectCreative]}
      className={swiperStyle}
    >
      {waifus?.map((waifu) => {
        return (
          <SwiperSlide key={waifu.image_id}>
            <Image
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
