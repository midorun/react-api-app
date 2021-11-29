import styled from 'styled-components/macro'

import { ECOLORS } from 'constants/colors'

export const requestHistoryItemVerticalPadding = 5
export const requestHistoryItemHeight = 30

export const RequestHistoryItem = styled.div`
  position: relative;
  padding: ${requestHistoryItemVerticalPadding}px 10px;
  height: ${requestHistoryItemHeight}px;
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  background: ${ECOLORS.WHITE};
`

export const Status = styled.div<{ error: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ error }) => error ? ECOLORS.RED : ECOLORS.GREEN};
`

export const Action = styled.div`

`

export const ShowDropdownIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  width: 10px;
  cursor: pointer;
`

export const animationDurationSec = 3
export const animationDelaySec = 3

export const CopyConfirmation = styled.span`
  position: absolute;
  justify-content: center;
  font-size: 12px;
  background: ${ECOLORS.GRAY_BLUE};
  animation: antMoveUpOut ${animationDurationSec}s;
  animation-delay: ${animationDelaySec}s;
  
  @keyframes antMoveUpOut{
    from { top: ${requestHistoryItemVerticalPadding}px}
    to {top: -${requestHistoryItemHeight + requestHistoryItemVerticalPadding}px}
  }
`
