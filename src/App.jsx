import { ThemeProvider } from '@emotion/react'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'

import { Theme } from './styles/themes/default'

export function App() {
  return (
<<<<<<< HEAD
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/anime-list" element={<AnimeList />} />
          <Route path="/manga-list" element={<MangaList />} />
          <Route path="/Waifus" element={<Waifus />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
=======
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
>>>>>>> beta
  )
}
