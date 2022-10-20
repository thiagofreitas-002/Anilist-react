import styled from "@emotion/styled";
import { css } from "@emotion/css";
import ScrollReveal from "scrollreveal";

export const Image = styled.div`
  overflow: hidden;
  height: 100%;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

window.effect = ScrollReveal({ reset: true });
const mods = {
  duration: 500,
  delay: 125,
  distance: "10px",
  easing: "ease-in-out",
  interval: 100,
  opacity: 0,
  scale: 1,
  origin: "bottom",
  /* rotate: {
  x: 100,
  y: 100,
  z: 100
} */
};
effect.reveal(".reveal", mods);

export function WaifuImage({ src, title }) {
  return (
    <Image className="reveal ">
      <img src={src} alt={title} />
    </Image>
  );
}
