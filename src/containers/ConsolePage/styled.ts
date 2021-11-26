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
`

export const FormatJSON = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
  
  &:hover{
    color: ${ECOLORS.BLUE};
  }
  
  &:focus{
    border: 1px solid ${ECOLORS.BLUE};
  }
  
`
