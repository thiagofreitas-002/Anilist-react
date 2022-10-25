import { Link } from 'react-router-dom'
import { css } from '@emotion/css'

import * as A from './styles'

export function ThreadCard() {
  return (
    <A.ThreadContainer>
      <a href="#">Title of the thread</a>

      <A.Profile>
        <A.Left>
          <A.Avatar href="#">
            <img src="https://cdn.waifu.im/2000.png" alt="avatar" />
          </A.Avatar>

          <A.Name>
            <Link
              to="profile"
              className={css`
                color: var(--light-blue-100);
              `}
              href="profile"
            >
              User
            </Link>
            <a href="thread">replied 7 minutes ago</a>
          </A.Name>
        </A.Left>

        <A.Right>
          <a href="category">anime</a>
        </A.Right>
      </A.Profile>
    </A.ThreadContainer>
  )
}
