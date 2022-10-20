import * as P from './ParallaxStyle'

export function Parallax() {
  return (
    <P.Parallax>
      <P.Shadow>
        <P.ParallaxContainer>
          <P.Header>
            <P.Card>
              <h2>Title Anime</h2>
              <P.Button href="#">More Details</P.Button>
            </P.Card>

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/q74fX9CnqtQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />

            <P.Summary>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maiores incidunt delectus vel aliquam a, quae minus quis ut sunt
                exercitationem labore tempora beatae ea autem illo nihil harum
                eaque commodi?
              </p>
            </P.Summary>
          </P.Header>

          <P.ParallaxPoster>
            <P.Poster>
              <img
                src="https://cdn-l-cyberpunk.cdprojektred.com/edgerunners/Cyberpunk-Edgerunners-S1-Poster-en.jpg"
                alt=""
              />
            </P.Poster>
          </P.ParallaxPoster>
        </P.ParallaxContainer>
      </P.Shadow>
    </P.Parallax>
  )
}
