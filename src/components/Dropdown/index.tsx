import { animationDelaySec, animationDurationSec } from 'containers/RequestHistoryItem/styled'
import React, { Dispatch, FC, SetStateAction, useEffect } from 'react'
import { useActions, useAppSelector } from 'store/hooks'
import { TRequest } from 'types'

import * as ST from './styled'

export type TDropdownProps = {
  requestBody: any
  setShowDropdown: Dispatch<SetStateAction<boolean>>
  setShowCopyConfirmation: Dispatch<SetStateAction<boolean>>
}

const Dropdown: FC<TDropdownProps> = ({ setShowDropdown, requestBody, setShowCopyConfirmation }) => {
  const { requestSend, removeRequestFromHistory } = useActions()

  useEffect(() => {
    document.addEventListener('click', hideDropdown)

    return () => {
      document.removeEventListener('click', hideDropdown)
    }
  })

  const hideDropdown = () => {
    setShowDropdown(false)
  }

  const handleExecuteClick = () => {
    requestSend(requestBody)
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(JSON.stringify(requestBody, null, 2))
    setShowCopyConfirmation(true)
    setTimeout(() => setShowCopyConfirmation(false), (animationDurationSec + animationDelaySec) * 1000)
  }

  const handleDeleteClick = () => {
    removeRequestFromHistory(JSON.parse(requestBody))
  }

  return (
    <ST.Dropdown>
      <ST.Execute onClick={handleExecuteClick}>Выполнить</ST.Execute>
      <ST.Copy onClick={handleCopyClick}>Скопировать</ST.Copy>
      <ST.Delete onClick={handleDeleteClick}>Удалить</ST.Delete>
    </ST.Dropdown>
  )
}

export default Dropdown
