import styled from 'styled-components/macro'

import { ECOLORS } from 'constants/colors'

export const ConsolePage = styled.div`
  background: ${ECOLORS.GRAY_BLUE};
  height: 100vh;
`

export const FieldsWrapper = styled.div`
  padding: 30px 15px 15px 15px;
  display: flex;
  height: calc(100% - 170px);
  gap: 10px;
  background: ${ECOLORS.WHITE};
`

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

export const FieldHeader = styled.span`
  color: #999999;
`

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  height: 70px;
  background: ${ECOLORS.WHITE};
`

export const GitHubLink = styled.a`
  color: ${ECOLORS.BORDER_GRAY};
  display: flex;
  align-items: center;
`

export const FormatJSON = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  user-select: none;
  border: 2px solid ${ECOLORS.WHITE};
  
  &:hover{
    color: ${ECOLORS.BLUE};
    
    svg{
      stroke: ${ECOLORS.BLUE};
    }
  }
  
  &:active{
    border: 2px solid #45A5FF;
    border-radius: 7px;
  }
  
`
