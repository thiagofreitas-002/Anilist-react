import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

import * as C from "./styles";

export function CardImage({ src }) {
  function reveal() {
    window.effect = ScrollReveal({ reset: false });
    const mods = {
      duration: 100,
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

    effect.reveal(".reveal", mods);
  }

  useEffect(() => {
    reveal();
  }, []);

  return (
    <C.Content className="reveal">
      <img src={src} /* alt={title} */ />
    </C.Content>
  );
}
