import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

// eslint-disable-next-line no-unused-vars
import './styles/global'

ReactDOM.createRoot(document.getElementById('wrapper')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
