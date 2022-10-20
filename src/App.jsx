import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//! Pages
<<<<<<< HEAD
import { Home } from "./components/pages/Home";
import { Profile } from "./components/pages/Profile";
import { AnimeList } from "./components/pages/AnimeList";
import { MangaList } from "./components/pages/MangaList";
import { Images } from "./components/pages/Images";
import { Browse } from "./components/pages/Browse";
import { Forum } from "./components/pages/Forum";
=======
import { Home } from './components/pages/Home'
import { Profile } from './components/pages/Profile'
import { AnimeList } from './components/pages/AnimeList'
import { MangaList } from './components/pages/MangaList'
import { Waifus } from './components/pages/Waifus'
import { Browse } from './components/pages/Browse'
import { Forum } from './components/pages/Forum'
>>>>>>> beta

//! Layout
import { Header } from './components/layout/Header'
import { Container } from './components/layout/Container'
import { Footer } from './components/layout/Footer'

export function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/anime-list" element={<AnimeList />} />
          <Route path="/manga-list" element={<MangaList />} />
          <Route path="/images" element={<Images />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  )
}
