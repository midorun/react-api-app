import styled from 'styled-components/macro'

import { TButtonProps } from '../Submit'
import { Wrapper as LoginPageWrapper } from 'containers/styled'

export const Button = styled.button<TButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient${({ disabled }) => disabled
    ? '(0deg, #C4C4C4, #C4C4C4), linear-gradient(180deg, #45A6FF 0%, #0055FB 100%);'
    : '(180deg, #45A6FF 0%, #0055FB 100%), #C4C4C4;'};
  border-radius: 5px;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: #FFFFFF;
  cursor: pointer;

  ${LoginPageWrapper} & {
    margin-top: 20px;
    width: 110px;
    height: 40px;
  }
`
