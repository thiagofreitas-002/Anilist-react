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
                <Link to="/images">Images</Link>
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
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cb6d15ee-9f60-434a-9a5d-d91026e33e0a/d7til5w-2f3260a3-7092-47b4-aad3-d921b361cc4b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NiNmQxNWVlLTlmNjAtNDM0YS05YTVkLWQ5MTAyNmUzM2UwYVwvZDd0aWw1dy0yZjMyNjBhMy03MDkyLTQ3YjQtYWFkMy1kOTIxYjM2MWNjNGIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pD52YTUbCEL4DLf6lnWcLUJFI9gpFglFsfO5xLAMErQ"
                alt="profile__img"
              />
            </H.User>
          </H.HeaderProfile>
        </H.HeaderContent>
      </H.HeaderContainer>
    </H.Header>
  )
}
