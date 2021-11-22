import styled from 'styled-components/macro'

import { Wrapper as LogoWrapper } from 'components/Logo/styled'

export const svg = styled.svg`
  width: 24px;
  height: 24px;
  
   ${LogoWrapper} &{
     width: 115px;
     height: 30px;
   }
`
