import { ECOLORS } from 'constants/colors'
import styled from 'styled-components/macro'

export const ResponseField = styled.textarea`
  width: 100%;
  height: 100%;
  border: 1px solid ${ECOLORS.BORDER_GRAY};
  border-radius: 5px;
  resize: none;
  
  &:focus{
    border: 1px solid ${ECOLORS.BORDER_GRAY};
    outline: none;
  }

`
