import styled from "@emotion/styled";

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 545px;
  gap: 40px;
  overflow: hidden;
  margin-top: 40px;
`;

export const Activities = styled.div``;

export const Aside = styled.div``;

export const Forum = styled.div``;

export const Header = styled.h2`
  font-size: 0.9rem;
  font-weight: 500;
  padding-left: 12px;
  margin-bottom: 10px;
  transition: var(--trans-200);
  cursor: pointer;

  &:hover{
    color: var(--light-blue-100);
  }
`;

export const ThreadCards = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Review = styled.div`

`;

export const ReviewsCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 16px;
`;
