import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { danbooru } from '../../services/api'
import * as C from './styles'

export function CurrentWaifu() {
  const [currentWaifu, setCurrentWaifu] = useState([])
  const { id } = useParams()

  useEffect(() => {
    try {
      const login = 'login=Ot4kuAki'
      const key = 'api_key=yupv1JtHPF8aoRL6BTPKNJf2'
      danbooru.get(`/posts/${id}.json?${login}&${key}`).then((response) => {
        const currentWaifu = response.data
        console.log(currentWaifu)
        setCurrentWaifu(currentWaifu)
      })
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <C.Container style={{ paddingTop: '68px' }}>
      <img src={currentWaifu.file_url} alt={currentWaifu.tag_string} style={{ width: '100%' }} />
      <img src={currentWaifu.large_file_url} alt={currentWaifu.tag_string} />
    </C.Container>
  )
}
