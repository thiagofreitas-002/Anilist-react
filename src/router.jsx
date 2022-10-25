import { Route, Routes } from 'react-router-dom'

//! Pages
import { Home } from './pages/home'
import { Profile } from './pages/profile'
import { AnimeList } from './pages/animeList'
import { MangaList } from './pages/mangaList'
import { Waifus } from './pages/waifus'
import { Browse } from './pages/browse'
import { Forum } from './pages/forum'

//! Layout
import { DefaultLayout } from './layout/defaultLayout/'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/anime-list" element={<AnimeList />} />
        <Route path="/manga-list" element={<MangaList />} />
        <Route path="/waifus" element={<Waifus />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/forum" element={<Forum />} />
      </Route>
    </Routes>
  )
}
