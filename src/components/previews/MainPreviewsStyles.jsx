import styled from "@emotion/styled";

export const Previews = styled.div`
  margin-top: 32px;
`;

export const Preview = styled.div``;

export const Header = styled.div`
  padding-left: 12px;
  margin-bottom: 10px;
  width: 100%;

  h2 {
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

export const List = styled.div`
  background-color: var(--blue-700);
  display: grid;
  grid-template-columns: repeat(auto-fill, 85px);
  grid-auto-rows: 115px;
  padding: 16px;
  border-radius: 4px;
  margin-bottom: 20px;
  gap: 20px;
`;
