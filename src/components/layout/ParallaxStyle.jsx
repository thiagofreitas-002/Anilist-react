import styled from '@emotion/styled'

export const Parallax = styled.div`
  background-image: url(https://www.serialminds.com/wp-content/uploads/2022/09/Cyberpunk-Edgerunners-cover.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  margin-bottom: 20px;
`

export const Shadow = styled.div`
  height: 100%;
  background-image: linear-gradient(
    to right,
    rgba(12, 22, 34, 1),
    rgba(12, 22, 34, 0)
  );
`

export const ParallaxContainer = styled.div`
  display: grid;
  grid-auto-rows: 460px;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  max-width: 1150px;
  padding-left: 50px;
  padding-right: 50px;
  margin: 0 auto;
  padding: 20px 50px;

  @media (min-width: 1540px) {
    max-width: 1520px;
    padding-left: 100px;
    padding-right: 100px;
  }

  @media (min-width: 1024px) and (max-width: 1540px) {
    max-width: 1140px;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  gap: 20px;

  iframe {
    border-radius: 4px;
    width: 100%;
    height: 100%;
  }
`

export const Card = styled.div`
  text-align: center;

  h2 {
    color: var(--light-blue-100);
  }
`

export const Button = styled.a`
  background: var(--blue-700);
  padding: 8px 12px;
  border-radius: 4px;
  transition: 200ms ease-in;
  display: inline-block;
  text-align: center;
  margin-top: 20px;
  font-weight: 500;

  &:hover {
    color: var(--light-blue-100);
    transform: translateY(-2px);
  }
`

export const ParallaxPoster = styled.div`
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const Poster = styled.div`
  height: calc(115px * 4);
  width: calc(85px * 3);
  overflow: hidden;
  border-radius: 4px;

  img {
    transform: scale(1.5);
    transition: 200ms ease-in;
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%;

    &:hover {
      transform: scale(1.2);
    }
  }
`

export const Summary = styled.div`
  text-align: justify;
  background-color: rgba(22, 31, 46, 0.8);
  padding: 12px;
  border-radius: 4px;
  transition: 200ms ease-in-out;
  text-align: justify;

  p {
    color: rgba(159, 173, 189, 0.7);
    transition: 200ms ease-in;

    &:hover {
      color: rgba(159, 173, 189, 1);
    }
  }
`
