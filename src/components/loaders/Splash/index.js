import React from 'react'

import { Container, Logo, Spinner, SpinnerItem1, SpinnerItem2, SpinnerItem3 } from './styles'
import logoSrc from '../../../assets/img/logo.svg'

export default function Splash({ active }) {
  if(!active){
    return <div></div>
  }
  
  return (
    <Container>
      <Logo src={logoSrc}/>
      <Spinner>
        <SpinnerItem1/>
        <SpinnerItem2/>
        <SpinnerItem3/>
      </Spinner>
    </Container>
  )
}
