import styled from 'styled-components/macro'

import { Wrapper as LogoWrapper } from 'components/Logo/styled'

export const svg = styled.svg<{width?: string, height?: string}>`
  width: ${({ width }) => width || '24px'};
   height: ${({ height }) => height || '24px'};
  
   ${LogoWrapper} &{
     width: 115px;
     height: 30px;
   }
`
