import { ECOLORS } from 'constants/colors'
import styled from 'styled-components/macro'

export const RequestField = styled.textarea<{parsingError: boolean}>`
  width: 100%;
  height: 100%;
  border: 1px solid ${({ parsingError }) => parsingError ? ECOLORS.RED : ECOLORS.BORDER_GRAY};
  border-radius: 5px;
  resize: none;
`
