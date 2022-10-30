import { Container } from "../../layout/defaultLayout/styles";
import * as C from "./styles";

export function Profile() {
  return (
    <>
      <C.Banner>
        <C.Shadow>
          <C.Container></C.Container>
        </C.Shadow>
      </C.Banner>

      <Container>
        <C.Container>
          <div>Profile :)</div>
        </C.Container>
      </Container>
    </>
  );
}
