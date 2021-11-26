import React, { Dispatch, FC, SetStateAction, useEffect } from 'react'
import { useActions, useAppSelector } from 'store/hooks'
import { TRequest } from 'types'

import * as ST from './styled'

export type TDropdownProps = {
  requestBody: TRequest
  setShowDropdown: Dispatch<SetStateAction<boolean>>
}

const Dropdown: FC<TDropdownProps> = ({ setShowDropdown, requestBody }) => {
  const { request, removeRequestFromHistory } = useActions()

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
    request(requestBody)
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(JSON.stringify(requestBody, null, 2))
  }

  const handleDeleteClick = () => {
    removeRequestFromHistory(requestBody)
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
