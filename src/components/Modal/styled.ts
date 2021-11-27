import { TModalProps } from 'components/Modal/index'
import styled from 'styled-components/macro'

export const Modal = styled.div<TModalProps>`
  position: absolute;
  top: ${({ top }) => top || 'auto'};
  left: ${({ left }) => left || 'auto'};
  width: ${({ width }) => width || 'auto'};
`
