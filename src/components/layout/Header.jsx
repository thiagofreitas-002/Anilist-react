import { Link } from 'react-router-dom'
import { css } from '@emotion/css'
import { useEffect } from 'react'

import logo from '../../assets/img/anilist__logo.svg'
import * as H from './HeaderStyle'

export function Header() {
  function handleScrollEffect() {
    const nav = document.querySelector('#navbar')
    const NavHidden = css`
      transform: translateY(calc(-1 * var(--nav-height)));
    `

    let lastScrollY = window.scrollY
    window.addEventListener('scroll', () => {
      if (lastScrollY < window.scrollY) {
        nav.classList.add(NavHidden)
      } else {
        nav.classList.remove(NavHidden)
      }

      lastScrollY = window.scrollY
    })
  }

  useEffect(() => {
    handleScrollEffect()
  }, [])

  return (
    <H.Header id="navbar">
      <H.HeaderContainer>
        <H.HeaderContent>
          <H.HeaderLogo>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </H.HeaderLogo>

          <H.HeaderNavbar>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/anime-list">Anime List</Link>
              </li>

              <li>
                <Link to="/manga-list">Manga List</Link>
              </li>

              <li>
                <Link to="/waifus">Waifus</Link>
              </li>

              <li>
                <Link to="/profile">Profile</Link>
              </li>

              <li>
                <Link to="/browse">Browse</Link>
              </li>

              <li>
                <Link to="/forum">Forum</Link>
              </li>
            </ul>
          </H.HeaderNavbar>

          <H.HeaderProfile>
            <H.User>
              <a href=""></a>
              <img
                src="https://i.pinimg.com/736x/e7/fe/70/e7fe701cff4a18cdd05ae67b79ef8376.jpg"
                alt="profile__img"
              />
            </H.User>
          </H.HeaderProfile>
        </H.HeaderContent>
      </H.HeaderContainer>
    </H.Header>
  )
}
