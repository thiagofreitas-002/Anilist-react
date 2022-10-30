import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import { cx, css } from "@emotion/css";

import * as C from "./styles";
import { Heart, ImageSquare, LinkSimple, Star } from "phosphor-react";

export function WaifuImage({ waifu }) {
  function reveal() {
    window.effect = ScrollReveal({ reset: true });
    const mods = {
      duration: 200,
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

    // eslint-disable-next-line no-undef
    effect.reveal(".reveal", mods);
  }

  useEffect(() => {
    reveal();
  }, []);

  return (
    <C.Content
      className={cx(
        css`
          background-image: url(${waifu.large_file_url});
          background-position: center;
          background-size: cover;
          position: relative;
        `,
        "reveal"
      )}
    >
      <C.Numbers>
        <C.Likes>
          <Heart size={"16px"} weight="fill" color="red" />
          {waifu.fav_count}
        </C.Likes>

        <C.Score>
          <Star size={"16px"} weight="fill" color="yellow" />
          {waifu.score}
        </C.Score>
      </C.Numbers>
      <C.FullImage href={waifu.large_file_url} target="_blank">
        <ImageSquare size={"16px"} weight={"regular"} />
        <C.Popup>Full size</C.Popup>
      </C.FullImage>
      <C.Overlay>
        <a href={waifu.source} target="_blank" rel="noreferrer">
          <LinkSimple size={"16px"} weight={"bold"} />
          Source
        </a>
        <C.WidthHeight>
          <p>
            Width: <span>{`${waifu.image_width}px`}</span>
          </p>
          <p>
            Height: <span>{`${waifu.image_height}px`}</span>
          </p>
          <p>
            Author: <span>{`@${waifu.tag_string_artist}`}</span>
          </p>
          <p>
            Character: <span>{waifu.tag_string_character}</span>
          </p>
          {/* <p>
            Tags: <span>{waifu.tag_string_general}</span>
          </p> */}
        </C.WidthHeight>
      </C.Overlay>
    </C.Content>
  );
}
