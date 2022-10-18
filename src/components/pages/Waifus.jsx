import ScrollReveal from "scrollreveal";

import * as W from "./WaifusStyle";

/* const url = "https://api.waifu.im/random/?selected_tags=ecchi";
const getApiData = async () => {
  const response = await fetch(url, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.images[0].url);
    })
    .catch((e) => {
      console.log("Error..");
    });
};
getApiData(); */

window.effect = ScrollReveal({ reset: true });
const mods = {
  duration: 1000,
  delay: 100,
  distance: "10px",
  easing: "ease-in-out",
  interval: 100,
  opacity: 0,
  scale: 0.75,
  origin: "bottom",
  /* rotate: {
    x: 100,
    y: 100,
    z: 100
  } */
};
effect.reveal(".reveal", mods);

export function Waifus() {

  return (
    <W.Waifus>
      <W.Column>
        <W.Image>
          <img className="reveal" src="https://cdn.waifu.im/7471.png" alt="" />
          <img className="reveal" src="https://cdn.waifu.im/1825.png" alt="" />
        </W.Image>
      </W.Column>

      <W.Column>
        <W.Image>
          <img className="reveal" src="https://cdn.waifu.im/2316.png" alt="" />
          <img className="reveal" src="https://cdn.waifu.im/7422.png" alt="" />
        </W.Image>
      </W.Column>

      <W.Column>
        <W.Image>
          <img className="reveal" src="https://cdn.waifu.im/3053.jpeg" alt="" />
          <img className="reveal" src="https://cdn.waifu.im/4664.jpeg" alt="" />
        </W.Image>
      </W.Column>

      <W.Column>
        <W.Image>
          <img className="reveal" src="https://cdn.waifu.im/3221.png" alt="" />
          <img className="reveal" src="https://cdn.waifu.im/2682.png" alt="" />
        </W.Image>
      </W.Column>

      <W.Column>
        <W.Image>
          <img className="reveal" src="https://cdn.waifu.im/2796.png" alt="" />
          <img className="reveal" src="https://cdn.waifu.im/2940.jpeg" alt="" />
        </W.Image>
      </W.Column>

      <W.Column>
        <W.Image>
          <img className="reveal" src="https://cdn.waifu.im/2348.jpeg" alt="" />
          <img className="reveal" src="https://cdn.waifu.im/7742.png" alt="" />
        </W.Image>
      </W.Column>
    </W.Waifus>
  );
}
