import styled from 'styled-components'

export const Modal = styled.div<{top: string, left: string, width: string}>`
  position: absolute;
  top: ${({ top }) => top || 'auto'};
  left: ${({ left }) => left || 'auto'};
  width: ${({ width }) => width || 'auto'};
`
