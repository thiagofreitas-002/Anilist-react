import * as A from "./styles"

export function Image({src, title}) {
  return (
    <A.Image>
      <img src={src} alt={title} />
    </A.Image>
  )
}
