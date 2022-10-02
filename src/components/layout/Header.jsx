import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import logo from "../../assets/img/anilist__logo.svg";

export default function Header() {
  return (
    <header>
      <div className={styles.header__container}>
        <div className={styles.header__content}>
          <div className={styles.header__logo}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <nav className={styles.header__navbar}>
            <ul className={styles.header__links}>
              <li className={styles.header__link}>
                <Link to="/">Home</Link>
              </li>

              <li className={styles.header__link}>
                <Link to="/anime-list">Anime List</Link>
              </li>

              <li className={styles.header__link}>
                <Link to="/manga-list">Manga List</Link>
              </li>

              <li className={styles.header__link}>
                <Link to="/waifus">Waifus</Link>
              </li>

              <li className={styles.header__link}>
                <Link to="/profile">Profile</Link>
              </li>

              <li className={styles.header__link}>
                <Link to="/browse">Browse</Link>
              </li>

              <li className={styles.header__link}>
                <Link to="/forum">Forum</Link>
              </li>
            </ul>
          </nav>

          <div className={styles.header__profile}>
            <div className={styles.user}>
              <a href=""></a>
              <img src="https://i.pinimg.com/736x/e7/fe/70/e7fe701cff4a18cdd05ae67b79ef8376.jpg" alt="profile__img" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
