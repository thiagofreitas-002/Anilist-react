import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { css } from "@emotion/css";

const Thread = styled.div`
  border-radius: 4px;
  padding: 16px;
  background: var(--blue-500);
  width: 100%;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;

  > a {
    font-size: 0.9rem;
    font-weight: 400;
    margin-bottom: 12px;
    margin-right: auto;
    display: inline-block;
    transition: var(--trans-200);

    &:hover {
      color: var(--light-blue-100);
    }
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.a`
  width: 28px;
  height: 28px;
  border-radius: 2px;
  overflow: hidden;

  img {
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100%;
  }
`;

const Name = styled.div`
  padding-left: 8px;
  display: flex;
  gap: 4px;

  a {
    font-size: 0.8rem;
    transition: var(--trans-200);

    &:last-of-type:hover {
      color: var(--light-blue-100);
    }
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const Tag = styled.a`
  border-radius: 12px;
  background: var(--light-blue-100);
  color: #fff;
  padding: 4px 8px;
  font-size: 0.6rem;
  transition: var(--trans-200);
  line-height: 1.1;

  &:hover {
    color: #000;
  }
`;

export function ThreadCard() {
  return (
    <Thread>
      <a href="#">Title of the thread</a>

      <Profile>
        <Left>
          <Avatar href="#">
            <img src="https://cdn.waifu.im/2000.png" alt="avatar" />
          </Avatar>

          <Name>
            <Link
              to="profile"
              className={css`
                color: var(--light-blue-100);
              `}
              href="profile"
            >
              User
            </Link>
            <a href="thread">replied 7 minutes ago</a>
          </Name>
        </Left>

        <Right>
          <Tag href="category">anime</Tag>
        </Right>
      </Profile>
    </Thread>
  );
}
