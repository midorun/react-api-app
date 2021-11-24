import { ECOLORS } from 'constants/colors'
import styled from 'styled-components/macro'

export const RequestHistory = styled.div`
  padding: 10px 0 10px 15px;
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${ECOLORS.BORDER_GRAY};
  overflow-x: scroll;
  overflow-y: visible;

  &::-webkit-scrollbar {
    display: none;
  }

`

export const RequestHistoryList = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const ClearHistory = styled.div`
  margin-left: auto;
  position: absolute;
  right: 0;
  background: ${ECOLORS.WHITE};
  border-bottom: 1px solid ${ECOLORS.BORDER_GRAY};
  
  &:before{
    content: '';
    position: absolute;
    top: 1px;
    left: -15px;
    width: 15px;
    height: calc(100% - 2px);
    background: linear-gradient(269.93deg, ${ECOLORS.WHITE} 0.06%, rgba(246, 246, 246, 0) 99.93%);
  }
`

export const IconWrapper = styled.div`
  height: 50px;
  padding: 15px;
  display: flex;
  align-items: center;
  border-left: 1px solid ${ECOLORS.BORDER_GRAY};
  cursor: pointer;
`
