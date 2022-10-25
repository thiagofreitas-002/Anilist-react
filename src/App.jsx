import { ThemeProvider } from '@emotion/react'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'

import { Theme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}
