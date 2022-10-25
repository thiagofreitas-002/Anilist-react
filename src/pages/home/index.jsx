//! Components
import { Card } from "../../components/card";
import { ReviewCard } from "../../components/reviewCard";
import { ThreadCard } from "../../components/threadCard";
import { Parallax } from "../../components/parallax";

//! Styles
import * as P from "./styles";
// eslint-disable-next-line no-unused-vars
import { MobileButton } from "../../components/mobileButton";
import { Container } from "../../layout/defaultLayout/styles";
import { SwiperContent } from "../../components/swiper";

export function Home() {
  return (
    <>
      <Container>
        <P.PreviewsContainer>
          <P.Preview>
            <P.Header>
              <h2>Airing</h2>
            </P.Header>

            <P.List>
              <Card />
            </P.List>
          </P.Preview>

          <P.Preview>
            <P.Header>
              <h2>Anime in progress</h2>
            </P.Header>

            <P.List>
              <Card />
            </P.List>
          </P.Preview>

          <P.Preview>
            <P.Header>
              <h2>Manga in progress</h2>
            </P.Header>

            <P.List>
              <Card />
            </P.List>
          </P.Preview>
        </P.PreviewsContainer>
      </Container>

      <Parallax />

      <Container>
        <P.ContentContainer>
          <P.Left>
            <P.Header>
              <h2>Activity</h2>
            </P.Header>
          </P.Left>

          <P.Right>
            <SwiperContent />

            <P.Forum>
              <P.Header>
                <a href="#">Forum Activity</a>
              </P.Header>

              <P.ThreadCards>
                <ThreadCard />
                <ThreadCard />
                <ThreadCard />
              </P.ThreadCards>
            </P.Forum>

            <P.Review>
              <P.Header>
                <a href="#">Recent Reviews</a>
              </P.Header>

              <P.ReviewsCards>
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
              </P.ReviewsCards>
            </P.Review>

            <P.Trending>
              <P.Header>
                <a href="#">Trending Anime & Manga</a>
              </P.Header>

              <P.Content>
                <Card />
              </P.Content>
            </P.Trending>

            <P.AddedAnime>
              <P.Header>
                <a href="#">Newly Added Anime</a>
              </P.Header>

              <P.Content>
                <Card />
              </P.Content>
            </P.AddedAnime>

            <P.AddedManga>
              <P.Header>
                <a href="#">Newly Added Manga</a>
              </P.Header>

              <P.Content>
                <Card />
              </P.Content>
            </P.AddedManga>
          </P.Right>
        </P.ContentContainer>
      </Container>
    </>
  );
}
