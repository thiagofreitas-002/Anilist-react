import styled from "@emotion/styled";
import { ThumbsUp } from "phosphor-react";

const Review = styled.a`
  background: var(--blue-500);
  display: grid;
  grid-template-rows: 80px 1fr;
  border-radius: 4px;
`;

const Banner = styled.div`
  border-radius: 4px 4px 0px 0px;
  overflow: hidden;

  img {
    object-fit: cover;
    object-position: center top;
    width: 100%;
    height: 100%;
  }
`;

const Content = styled.div`
  padding: 12px;
`;

const Header = styled.div`
  font-weight: 500;
  font-size: 0.8rem;
  padding-bottom: 8px;
`;

const Text = styled.div`
  font-size: 0.8rem;
  font-weight: 300;
  text-align: justify;
  position: relative;
  color: var(--gray-100);
`;

const Like = styled.div`
  display: block;
  position: absolute;
  bottom: 0px;
  right: 0px;
  display: inline-flex;
  align-items: center;
`;

export function ReviewCard() {
  return (
    <Review href="#">
      <Banner>
        <img
          src="https://wallpaperaccess.com/full/4116948.jpg"
          alt="banner img"
        />
      </Banner>

      <Content>
        <Header>Review of title</Header>

        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
          quaerat sunt quasi fugit, accusantium, sed voluptas in distinctio,
          facilis nemo similique debitis autem quia nihil nostrum id magni
          commodi optio.
          <Like>
            <ThumbsUp size={12} weight="fill" />1
          </Like>
        </Text>
      </Content>
    </Review>
  );
}
