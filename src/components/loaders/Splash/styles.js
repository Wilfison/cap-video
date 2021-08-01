import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(to top, #9c27b0 0%,#673ab7 100%);
`

export const Logo = styled.img`
  width: 150px;
  height: 150px;
`

export const Spinner = styled.div`
  margin: 100px auto 0;
  width: 70px;
  text-align: center;
`

const bouncedelay = keyframes`
  0%, 80%, 100% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% { 
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
`

const SpinnerItem = styled.div`
  width: 18px;
  height: 18px;
  background-color: #FFFFFF;

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: ${bouncedelay} 1.4s infinite ease-in-out both;
  animation: ${bouncedelay} 1.4s infinite ease-in-out both;
`

export const SpinnerItem1 = styled(SpinnerItem)`
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
`

export const SpinnerItem2 = styled(SpinnerItem)`
  -webkit-animation-delay: -0.15s;
  animation-delay: -0.15s;
`

export const SpinnerItem3 = styled(SpinnerItem)`
  -webkit-animation-delay: 0;
  animation-delay: 0;
`
