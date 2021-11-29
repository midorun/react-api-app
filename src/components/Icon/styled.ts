import styled from 'styled-components/macro'

import { ECOLORS } from 'constants/colors'

import { Wrapper as LogoWrapper } from 'components/Logo/styled'

export const svg = styled.svg<{ width?: string, height?: string }>`
  width: ${({ width }) => width || '24px'};
  height: ${({ height }) => height || '24px'};
  display: flex;
  justify-content: center;
  align-items: center;
  stroke: ${ECOLORS.BLACK};

  ${LogoWrapper} & {
    width: 115px;
    height: 30px;
  }
  
  &:hover {
    stroke: ${ECOLORS.BLUE};
  }
`
