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
  padding: 15px;
  height: 70px;
  background: ${ECOLORS.WHITE};
`
