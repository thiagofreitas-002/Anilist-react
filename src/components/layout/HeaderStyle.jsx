import styled from '@emotion/styled'

export const Header = styled.header`
  background: var(--blue-600);
  height: 68px;
  grid-area: header;
  color: #a0b1c5;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 999;
  width: 100%;
  transition: transform ease-out 300ms;
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1050px;
  margin-left: 50px;
  margin-right: 50px;
`

export const HeaderContent = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
`

export const HeaderLogo = styled.div`
  width: 65px;
  height: 55px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50px;
    height: 50px;
  }
`

export const HeaderNavbar = styled.nav`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-family: 'overpass', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;

  ul {
    height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    line-height: 1.09;

    li {
      display: inline-flex;

      a {
        letter-spacing: 0.01em;
        padding: 18px 16px;
        font-weight: 500;
        color: #a0b1c5;
        transition: ease-in-out 100ms;

        &:hover {
          color: #d3d5f3;
        }
      }
    }
  }
`

export const HeaderProfile = styled.div`
  display: inline-flex;
  align-items: center;
  height: 55px;
  width: 65px;
`

export const User = styled.div`
  width: 38px;
  height: 38px;
  position: relative;

  img {
    width: 100%;
    border-radius: 4px;
    object-fit: contain;
  }
`
