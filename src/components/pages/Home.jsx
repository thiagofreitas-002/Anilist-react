//! Components
import { Parallax } from '../layout/Parallax'
import { Card } from '../previews/Card'
import { ThreadCard } from '../aside/ThreadCard'
import { ReviewCard } from '../aside/ReviewCard'

//! Styles
import * as C from '../layout/ContainerStyle'
import * as P from '../previews/MainPreviewsStyles'
import * as M from './Content'

export function Home() {
  return (
    <>
      <C.MainContainer>
        <P.Previews>
          <P.Preview>
            <P.Header>
              <h2>Airing</h2>
            </P.Header>

            <P.List>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </P.List>
          </P.Preview>

          <P.Preview>
            <P.Header>
              <h2>Anime in progress</h2>
            </P.Header>

            <P.List>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </P.List>
          </P.Preview>

          <P.Preview>
            <P.Header>
              <h2>Manga in progress</h2>
            </P.Header>

            <P.List>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </P.List>
          </P.Preview>
        </P.Previews>
      </C.MainContainer>

      <Parallax />

      <C.MainContainer>
        <M.Content>
          <M.Activities>Activity</M.Activities>
          <M.Aside>
            <M.Forum>
              <M.Header href="/Forum">Forum Activity</M.Header>

              <M.ThreadCards>
                <ThreadCard />
                <ThreadCard />
                <ThreadCard />
              </M.ThreadCards>
            </M.Forum>

            <M.Review>
              <M.Header href="/Reviews">Recent Reviews</M.Header>

              <M.ReviewsCards>
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
              </M.ReviewsCards>
            </M.Review>
          </M.Aside>
        </M.Content>
      </C.MainContainer>
    </>
  )
}
