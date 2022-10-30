import { css } from "@emotion/css";
import { Cloud, Heart } from "phosphor-react";
import * as C from "./styles";

export function ActivityFeed() {
  return (
    <C.Container>
      <a
        href=""
        target="_blank"
        className={css`
          background-image: url("https://wallpaperaccess.com/full/2730401.jpg");
        `}
      ></a>

      <C.Content>
        <C.Header>
          <a href="" target="_blank">
            User
          </a>
          <time>2 hours ago</time>
        </C.Header>

        <C.Main>
          Watched episode 1 of <a href="">Kaguya-sama</a>
        </C.Main>

        <C.Footer>
          <a
            href=""
            target="_blank"
            className={css`
              background-image: url("https://i.pinimg.com/736x/e7/fe/70/e7fe701cff4a18cdd05ae67b79ef8376.jpg");
            `}
          ></a>

          <C.FooterBottom>
            <button>
              1<Cloud size={"16px"} weight="fill" />
            </button>

            <button>
              2<Heart size={"16px"} weight="fill" />
            </button>
          </C.FooterBottom>
        </C.Footer>
      </C.Content>
    </C.Container>
  );
}
