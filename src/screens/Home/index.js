import React, { useState } from 'react'
import Splash from '../../components/loaders/Splash'

import { Container } from './styles'

export default function HomeScreen() {
  const [starting, setStarting] = useState(true)

  return (
    <Container>
      <Splash active={starting}/>
    </Container>
  )
}
