import { Icon } from 'components'
import Dropdown from 'components/Dropdown'
import Modal from 'components/Modal'
import React, { FC, useRef, useState } from 'react'
import { TFullfilledRequest } from 'types'

import * as ST from './styled'

export type TRequestHistoryItemProps = {
  data: TFullfilledRequest
}

const RequestHistoryItem: FC<TRequestHistoryItemProps> = ({ data: { request, response, error } }) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const requestHistoryItemRef = useRef<HTMLDivElement>(null)
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)
  const [width, setWidth] = useState(0)
  const [showCopyConfirmation, setShowCopyConfirmation] = useState(false)

  const handleDropdownIconClick = () => {
    setShowDropdown(!showDropdown)
    setTop(requestHistoryItemRef.current!.getBoundingClientRect().top)
    setLeft(requestHistoryItemRef.current!.getBoundingClientRect().left)
    setWidth(requestHistoryItemRef.current!.getBoundingClientRect().width)
    console.log(requestHistoryItemRef.current!.getBoundingClientRect())
  }

  return (
    <ST.RequestHistoryItem
      ref={requestHistoryItemRef}
    >
      <ST.Status error={error === null} />
      <ST.Action>
        {request.action}
      </ST.Action>
      <ST.ShowDropdownIcon onClick={() => handleDropdownIconClick()}>
        <Icon
          id={'dots'}
          width={'6px'}
          height={'18px'}
        />
      </ST.ShowDropdownIcon>
      {showDropdown && (
        <Modal
          top={top + 30 + 'px'}
          left={left + 'px'}
        >
          <Dropdown
            setShowCopyConfirmation={setShowCopyConfirmation}
            setShowDropdown={setShowDropdown}
            requestBody={request}
          />
        </Modal>
      )}
      {showCopyConfirmation &&
      <ST.CopyConfirmation>
        Скопировано
      </ST.CopyConfirmation>
      }
    </ST.RequestHistoryItem>
  )
}

export default RequestHistoryItem
