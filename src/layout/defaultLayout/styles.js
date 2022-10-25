import styled from '@emotion/styled'

export const LayoutContainer = styled.main`
  grid-area: main;
  min-height: 100vh;
  background: var(--blue-800);
`

export const Container = styled.div`
  width: 100%;
  max-width: 1150px;
  padding-left: 50px;
  padding-right: 50px;
  margin: 0 auto;

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
