import styled from 'styled-components/macro'

import { ECOLORS } from 'constants/colors'

export const RequestField = styled.textarea`
  width: 100%;
  height: 100%;
  border: 1px solid ${ECOLORS.BORDER_GRAY};
  border-radius: 5px;
  resize: none;
`
