import { ECOLORS } from 'constants/colors'
import styled from 'styled-components/macro'

export const RequestHistoryItem = styled.div`
  position: relative;
  padding: 5px 10px;
  width: 120px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  background: ${ECOLORS.WHITE};
`

export const Status = styled.div<{ success: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ success }) => success ? ECOLORS.GREEN : ECOLORS.RED};
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

export const Dropdown = styled.div`
  position: absolute;
  padding: 5px 0;
  width: 100%;
  height: 140px;
  left: 0;
  top: 30px;
  border-radius: 3px;
  background: black;
`
