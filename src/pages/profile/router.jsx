//! Pages
import { Submissions } from "./pages/submissions";
import { AnimeList } from "./pages/animeList";
import { MangaList } from "./pages/mangaList";
import { Favorites } from "./pages/favorites";
import { Overview } from "./pages/overview";
import { Reviews } from "./pages/reviews";
import { Social } from "./pages/social";
import { Waifus } from "./pages/waifus";
import { Stats } from "./pages/stats";

import { Route, Routes } from "react-router-dom";

export function Router() {
  return (
    <Routes>
      <Route path="/" element="">
        <Route path="/" element="" />
        <Route path="/" element="" />
        <Route path="/" element="" />
        <Route path="/" element="" />
        <Route path="/" element="" />
        <Route path="/" element="" />
        <Route path="/" element="" />
        <Route path="/" element="" />
      </Route>
    </Routes>
  );
}
