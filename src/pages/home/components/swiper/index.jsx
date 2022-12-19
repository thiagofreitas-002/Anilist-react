import { useState, useEffect } from 'react'
import { css } from '@emotion/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCreative } from 'swiper'
import 'swiper/css/effect-creative'
import 'swiper/css'

import { danbooru } from '../../../../services/api'

const swiperStyle = css`
  height: 300px;
  background: rgba(21, 31, 46);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;

  .swiper-wrapper {
    display: flex;
    position: absolute;
    align-items: flex-start;
    height: inherit;

    .swiper-slide {
      height: inherit;
    }
  }
`

export function SwiperContent() {
  const [waifus, setWaifus] = useState([])

  const randomNumber = (max) => {
    return Math.floor(Math.random() * max)
  }

  const login = 'login=Ot4kuAki'
  const key = 'api_key=yupv1JtHPF8aoRL6BTPKNJf2'

  useEffect(() => {
    danbooru.get(`/posts.json?${login}&${key}&limit=100&tags=is:sfw&page=${randomNumber(25)}`).then((response) => {
      console.log(response.data)
      setWaifus(response.data)
    })
  }, [])

  return (
    <Swiper
      grabCursor={true}
      effect={'creative'}
      /* autoHeight={true} */
      creativeEffect={{
        prev: {
          shadow: true,
          translate: ['-121%', 0, -500],
        },
        next: {
          translate: ['121%', 0, -500],
        },
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[EffectCreative, Autoplay]}
      className={swiperStyle}
    >
      {waifus?.map((waifu) => {
        return (
          <SwiperSlide
            key={waifu.id}
            className={css`
              background-image: url(${waifu.large_file_url});
              background-size: contain;
              background-position: center;
              background-repeat: no-repeat;
            `}
          ></SwiperSlide>
        )
      })}
    </Swiper>
  )
}
