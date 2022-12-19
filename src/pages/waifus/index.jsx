import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { css } from '@emotion/css'

import { danbooru } from '../../services/api'
import { WaifuImage } from './components/waifusImage'
import { Loading } from '../../components/loading'

import * as C from './styles'

export function Waifus() {
  const [waifus, setWaifus] = useState([])
  /* const [removeLoading, setRemoveLoading] = useState(false); */

  useEffect(() => {
    try {
      setTimeout(
        () => {
          const randomNumber = (max) => {
            return Math.floor(Math.random() * max)
          }

          const login = 'login=Ot4kuAki'
          const key = 'api_key=yupv1JtHPF8aoRL6BTPKNJf2'
          /* &random:50 */
          danbooru.get(`/posts.json?${login}&${key}&limit=500&tags=is:sfw&page=${randomNumber(50)}`).then((response) => {
            console.log(response.data)
            setWaifus(response.data)
            /* setRemoveLoading(true); */
          })
        } /* 1000 */
      )
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <C.Container>
      {waifus.length >= 10 &&
        waifus?.map((waifu) => {
          return (
            <Link
              to={`/waifu/${waifu.id}`}
              key={waifu.id}
              className={css`
                height: 100%;
                position: relative;
              `}
              rel="noreferrer"
            >
              <WaifuImage src={waifu.large_file_url} alt={waifu.tag_string_general} waifu={waifu} />
            </Link>
          )
        })}
      {/* {!removeLoading && <Loading />} */}
    </C.Container>
  )
}
