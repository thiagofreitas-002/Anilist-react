import styled from "@emotion/styled";

export const Waifus = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(192px, 1fr));
  align-items: flex-start;
  grid-template-rows: repeat(auto-fill, minmax(225px, 325px));
`;
