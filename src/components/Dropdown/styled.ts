import styled from 'styled-components'

import { ECOLORS } from 'constants/colors'

export const Dropdown = styled.div`
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  background: ${ECOLORS.WHITE};
`

export const DropdownItem = styled.div`
  padding: 10px 15px;
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  
  &:hover{
    color: ${ECOLORS.WHITE};
  }
`

export const Execute = styled(DropdownItem)`
  &:hover{
    color: ${ECOLORS.BLACK}
  }
`

export const Copy = styled(DropdownItem)`
  &:hover{
    background: ${ECOLORS.BLUE};
  }
`

export const Delete = styled(DropdownItem)`
  border-top: 1px solid ${ECOLORS.BORDER_GRAY};
  &:hover{
    background: ${ECOLORS.RED};
  }
`
