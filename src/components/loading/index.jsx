import Loader from "../../assets/loading/loading2.gif";

import * as C from "./styles";

export function Loading() {
  return (
    <C.Content>
      <img src={Loader} alt="Loading" />
    </C.Content>
  );
}
