import { injectGlobal } from '@emotion/css'

injectGlobal`
  :root {
    --blue-900: #11161c;
    --blue-800: #0c1622;
    --blue-700: #161f2e;
    --blue-600: #152232;
    --blue-500: #151f2e;
    --gray-100: #8596a5;
    --light-blue-100: #3db4f2;
    --trans-200: 200ms;
    --color-text: #9fadbd;
    --nav-height: 68px;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Roboto', 'Overpass', sans-serif;
    color: #9fadbd;
  }

  #wrapper {
    display: grid;
    grid-template-areas:
    'header'
    'main'
    'footer';
  }

  body {
    min-height: 100vh;
    width: 100%;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
  }
`
