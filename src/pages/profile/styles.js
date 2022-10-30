import styled from "@emotion/styled";

export const Banner = styled.div`
  height: 330px;
  background-image: url("https://s4.anilist.co/file/anilistcdn/user/banner/b449691-Z0ccnN1HpJnR.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 35%;
  position: relative;
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
