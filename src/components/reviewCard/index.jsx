import { ThumbsUp } from "phosphor-react";
import { useEffect, useState } from "react";
import { apiJsonPlaceholder } from "../../services/api";

import * as A from "./styles";

export function ReviewCard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const randomNumber = (max) => {
      return Math.floor(Math.random() * max);
    };

    apiJsonPlaceholder
      .get(`/comments?postId=${randomNumber(3)}`)
      .then((response) => {
        setPosts(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <A.ReviewContainer href="#">
      <A.Banner>
        <A.Overlay>
          <span>Read Full Review</span>
        </A.Overlay>
      </A.Banner>

      <A.Content>
        <header>Review of title</header>

        <A.Text>
          {posts?.map((post) => {
            return <p key={post.id}>{post.name}</p>;
          })}
        </A.Text>
      </A.Content>

      <A.Like>
        <ThumbsUp size={12} color="red" weight="fill" />1
      </A.Like>
    </A.ReviewContainer>
  );
}
