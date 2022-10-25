import styled from "@emotion/styled";

export const Image = styled.div`
  overflow: hidden;
  height: inherit;

  img {
    object-fit: cover;
    object-position: center;
    /* transform: scale(1); */
    height: 100%;
    width: 100%;
  }
`;
