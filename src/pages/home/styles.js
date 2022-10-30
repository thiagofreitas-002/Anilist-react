import styled from "@emotion/styled";

export const PreviewsContainer = styled.section`
  padding-top: 100px;
`;

export const Preview = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.div`
  padding-left: 12px;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  font-weight: 500;
  h2 {
    font-size: 0.9rem;
    font-weight: 500;
  }

  a {
    font-size: 0.9rem;
    font-weight: 500;
    transition: ${(props) => props.theme.transitions["trans-200"]};

    &:hover {
      color: ${(props) => props.theme.colors.others["color-blue"]};
    }
  }
`;

export const Buttons = styled.div`
  button {
    background-color: ${(props) =>
      props.theme.colors.foreground["color-foreground"]};
    padding: 4px 16px;
    border: none;
    cursor: pointer;
    font-weight: 400;

    &:first-child {
      border-radius: 2px 0px 0px 2px;
    }

    &:last-child {
      border-radius: 0px 2px 2px 0px;
    }
  }
`;

export const Textarea = styled.div`
  textarea {
    width: 100%;
    height: 36px;
    min-height: 36px;
    padding: 8px 16px;
    border-radius: 4px;
    caret-color: aliceblue;
    border: none;
    resize: none;
    margin-bottom: 20px;
    background-color: ${(props) =>
      props.theme.colors.foreground["color-foreground"]};

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${(props) => props.theme.colors.text["color-text"]};
    }
  }
`;

export const List = styled.div`
  background-color: ${(props) =>
    props.theme.colors.foreground["color-foreground"]};
  display: grid;
  grid-template-columns: repeat(auto-fill, 85px);
  grid-template-rows: repeat(auto-fill, 115px);
  padding: 16px;
  border-radius: 4px;
  margin-bottom: 20px;
  gap: 20px;
  justify-content: center;
  overflow: hidden;
`;

export const Right = styled.div``;

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr 545px;
  gap: 40px;
  overflow: hidden;

  @media (max-width: 1040px) {
    grid-template-columns: 1fr;

    ${Right} {
      display: none;
    }
  }
`;

export const Left = styled.div``;

export const Forum = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ThreadCards = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Review = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ReviewsCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 16px;
  margin-bottom: 25px;
`;

export const Trending = styled.div``;

export const ContentRight = styled.div`
  border-radius: ${(props) => props.theme.borderRadius["border-4"]};
  background-color: ${(props) =>
    props.theme.colors.foreground["color-foreground"]};
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(auto-fill, 115px);
  gap: 20px;
  padding: 20px;
  margin-bottom: 12px;
`;

export const ContentLeft = styled.div``;

export const LoadMore = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 600;
  border-radius: 4px;
  padding: 14px;
  border: none;
  width: 100%;
  background-color: ${(props) =>
    props.theme.colors.foreground["color-foreground"]};
  transition: ${(props) => props.theme.transitions["trans-200"]};

  &:hover {
    color: ${(props) => props.theme.colors.blue["color-blue-600"]};
  }
`;

export const AddedAnime = styled.div``;

export const AddedManga = styled.div``;
