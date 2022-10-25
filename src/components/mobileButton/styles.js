import styled from '@emotion/styled'

export const Menu = styled.ul`
  position: relative;
  width: 240px;
  height: 235px;
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    position: absolute;
    left: 0;
    list-style: none;
    transition: 0.5s;
    transition-delay: calc(0.1s * var(--i));
    transform-origin: 140px;
    transform: rotate(0deg) translateX(110px);
  }

  img {
    width: 30px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    color: var(--clr);
    border: 2px solid var(--clr);
    border-radius: 50%;
    font-size: 1.5em;
    transform: rotate(calc(360deg / -8 * var(--i)));
    transition: 1s;

    &:hover {
      transition: 0;
      background: var(--clr);
      color: #333;
      box-shadow: 0 0 10px var(--clr), 0 0 30px var(--clr), 0 0 50px var(--clr);
    }
  }
`

export const Avatar = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  background: #2f363e;
  border: 2px solid #fff;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  text-align: center;
  z-index: 10000;
  font-size: 2rem;
  transition: transform 2.25s;
  overflow: hidden;

  &:hover {
    filter: grayscale(100%);
    box-shadow: 0 0 10px #fff;
  }

  img {
    width: 70px;
    cursor: pointer;
  }
`
