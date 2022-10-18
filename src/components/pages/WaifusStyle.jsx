import styled from "@emotion/styled";

export const Waifus = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

export const Column = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
`;

export const Image = styled.div`
  overflow: hidden;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    transform: scale(1.1);
  }
`;
