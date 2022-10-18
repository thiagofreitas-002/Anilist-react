import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Global, css } from "@emotion/react";

ReactDOM.createRoot(document.getElementById("wrapper")).render(
  <React.StrictMode>
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Overpass:wght@100;200;300;400;500;600;700&family=Roboto:wght@100;300;400;500;700&display=swap");

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
        }

        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          list-style: none;
          text-decoration: none;
          font-family: "Roboto", "Overpass", sans-serif;
          color: #9fadbd;
        }
        
        #wrapper {
          display: grid;
          grid-template-areas:
            "header"
            "main"
            "footer";
        }

        html,
        body {
          min-height: 100vh;
          width: 100%;
          scroll-behavior: smooth;
          background: var(--blue-800);
        }
        
        .nav__hidden {
          --nav_height: 68px;
          transform: translateY(calc(-1 * var(--nav_height)));
        }
        `}
    />
    <App />
  </React.StrictMode>
);
