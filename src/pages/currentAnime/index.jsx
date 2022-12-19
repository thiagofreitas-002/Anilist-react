import { useEffect } from 'react'

import { danbooru } from '../../services/api'
import * as C from './styles'

export function CurrentAnime() {
  useEffect(() => {
    try {
      danbooru.get('/')
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <C.Container>
      <h1>Hello world</h1>
    </C.Container>
  )
}
