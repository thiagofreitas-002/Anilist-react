```js
const url = "https://api.waifu.im/random/?selected_tags=ecchi";
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
getApiData();


import ScrollReveal from "scrollreveal";

window.effect = ScrollReveal({ reset: true });
const mods = {
  duration: 1000,
  delay: 100,
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
```
