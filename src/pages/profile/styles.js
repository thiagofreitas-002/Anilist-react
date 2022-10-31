import styled from "@emotion/styled";

export const Banner = styled.div`
  height: 330px;
  background-image: url("https://s4.anilist.co/file/anilistcdn/user/banner/b449691-Z0ccnN1HpJnR.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 35%;
  position: relative;
`;

export const Nav = styled.nav`
  background-color: ${(props) =>
    props.theme.colors.foreground["color-foreground"]};
  padding: 0px 50px;

  ul {
    display: flex;
    justify-content: center;

    li {
      font-weight: 600;
      font-size: 0.9rem;

      a {
        font-family: "Overpass", sans-serif;
        color: ${(props) => props.theme.colors.text["color-text-light"]};
        display: inline-block;
        padding: 15px;
        margin: 0px 10px;
        transition: ${(props) => props.theme.transitions["trans-200"]};
      }
    }
  }
`;

export const Container = styled.div`
  height: 200vh;
`;

export const Shadow = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(var(--color-shadow-dark), 0) 40%,
    rgba(var(--color-shadow-dark), 0.6)
  );
`;
