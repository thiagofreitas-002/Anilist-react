import { Route, Routes } from 'react-router-dom'

//! Pages
import { Home } from './pages/home'

import { AnimeList } from './pages/animeList'
import { CurrentAnime } from './pages/currentAnime'

import { MangaList } from './pages/mangaList'
import { CurrentManga } from './pages/currentManga'

import { Waifus } from './pages/waifus'
import { CurrentWaifu } from './pages/currentWaifu'

import { Profile } from './pages/profile'
import { CurrentProfile } from './pages/currentProfile'

import { Browse } from './pages/browse'
import { Forum } from './pages/forum'

//! Layout
import { DefaultLayout } from './layout/defaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/anime-list" element={<AnimeList />} />
        <Route path="/anime-list/:id" element={<CurrentAnime />} />
        <Route path="/manga-list" element={<MangaList />} />
        <Route path="/manga-list/:id" element={<CurrentManga />} />
        <Route path="/waifus" element={<Waifus />} />
        <Route path="/waifu/:id" element={<CurrentWaifu />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:userName/:id" element={<CurrentProfile />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/forum" element={<Forum />} />
      </Route>
    </Routes>
  )
}
