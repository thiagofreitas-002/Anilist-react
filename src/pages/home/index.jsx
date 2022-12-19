//! Components
import { Card } from './components/card'
import { ReviewCard } from '../../components/reviewCard'
import { ThreadCard } from '../../components/threadCard'
import { Parallax } from './components/parallax'
import { ActivityFeed } from './components/activityFeed'

//! Styles
import * as C from './styles'
import { Container } from '../../layout/defaultLayout/styles'
import { SwiperContent } from './components/swiper'

export function Home() {
  return (
    <>
      <Container>
        <C.PreviewsContainer>
          <C.Preview>
            <C.Header>
              <h2>Airing</h2>
            </C.Header>

            <C.List>
              <Card />
            </C.List>
          </C.Preview>

          <C.Preview>
            <C.Header>
              <h2>Anime in progress</h2>
            </C.Header>

            <C.List>
              <Card />
            </C.List>
          </C.Preview>

          <C.Preview>
            <C.Header>
              <h2>Manga in progress</h2>
            </C.Header>

            <C.List>
              <Card />
            </C.List>
          </C.Preview>
        </C.PreviewsContainer>
      </Container>

      <Parallax />

      <Container>
        <C.Content>
          <C.Left>
            <C.Header>
              <h2>Activity</h2>

              <C.Buttons>
                <button>Following</button>
                <button>Global</button>
              </C.Buttons>
            </C.Header>

            <C.Textarea>
              <textarea name="" id="" cols="30" rows="10" placeholder="Write a status..." />
            </C.Textarea>

            <C.ContentLeft>
              <ActivityFeed />
              <C.LoadMore>Load More</C.LoadMore>
            </C.ContentLeft>
          </C.Left>

          <C.Right>
            <SwiperContent />

            <C.Forum>
              <C.Header>
                <a href="#">Forum Activity</a>
              </C.Header>

              <C.ThreadCards>
                <ThreadCard />
                <ThreadCard />
                <ThreadCard />
              </C.ThreadCards>
            </C.Forum>

            <C.Review>
              <C.Header>
                <a href="#">Recent Reviews</a>
              </C.Header>

              <C.ReviewsCards>
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
              </C.ReviewsCards>
            </C.Review>

            <C.Trending>
              <C.Header>
                <a href="#">Trending Anime & Manga</a>
              </C.Header>

              <C.ContentRight>
                <Card />
              </C.ContentRight>
            </C.Trending>

            <C.AddedAnime>
              <C.Header>
                <a href="#">Newly Added Anime</a>
              </C.Header>

              <C.ContentRight>
                <Card />
              </C.ContentRight>
            </C.AddedAnime>

            <C.AddedManga>
              <C.Header>
                <a href="#">Newly Added Manga</a>
              </C.Header>

              <C.ContentRight>
                <Card />
              </C.ContentRight>
            </C.AddedManga>
          </C.Right>
        </C.Content>
      </Container>
    </>
  )
}
