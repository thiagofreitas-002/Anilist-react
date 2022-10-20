import styled from '@emotion/styled'

export const Footer = styled.footer`
  background: var(--blue-900);
  height: 100px;
  grid-area: footer;
  color: #a0b1c5;
  font-family: 'overpass', sans-serif;
  font-weight: 600;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1140px;

  @media (min-width: 1024px) and (max-width: 1540px) {
    width: 100%;
    max-width: 1140px;
    padding-left: 50px;
    padding-right: 50px;
    margin: 0 auto;
  }

  @media (min-width: 1540px) {
    width: 100%;
    max-width: 1520px;
    padding-left: 100px;
    padding-right: 100px;
    margin: 0 auto;
  }

  @media (max-width: 450px) {
    max-width: 300px;
    padding-left: 25px;
    padding-right: 25px;
  }
`

export const FooterContent = styled.div`
  width: 100%;
  height: 100%;
`
