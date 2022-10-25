import styled from '@emotion/styled'

export const ImageContainer = styled.div`
  overflow: hidden;
  height: 100%;

  img {
    object-fit: contain;
    object-position: center;
    transform: scale(1.4);
    height: 100%;
    width: 100%;
  }
`
