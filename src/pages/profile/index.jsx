import { Link } from "react-router-dom";
import { Container } from "../../layout/defaultLayout/styles";
import * as C from "./styles";

export function Profile() {
  return (
    <>
      <C.Banner>
        <C.Shadow></C.Shadow>
      </C.Banner>

      <C.Nav>
        <ul>
          <li>
            <Link to="/">Overview</Link>
          </li>

          <li>
            <Link to="/anime-list">Anime List</Link>
          </li>

          <li>
            <Link to="/manga-list">Manga List</Link>
          </li>

          <li>
            <Link to="/favorites">Favorites</Link>
          </li>

          <li>
            <Link to="/stats">Stats</Link>
          </li>

          <li>
            <Link to="/social">Social</Link>
          </li>

          <li>
            <Link to="/reviews">Reviews</Link>
          </li>

          <li>
            <Link to="/submissions">Submissions</Link>
          </li>
        </ul>
      </C.Nav>

      <Container>
        <div>Profile :)</div>
      </Container>
    </>
  );
}
