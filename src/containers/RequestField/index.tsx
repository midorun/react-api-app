import React, { Dispatch, FC, SetStateAction } from 'react'
import { useAppSelector } from 'store/hooks'
import { TRequest } from 'types'

import * as ST from './styled'

export type TRequestFieldProps = {
  setRequestBody: Dispatch<SetStateAction<string>>,
  setParsingError: Dispatch<SetStateAction<boolean>>
  parsingError: boolean
}

const RequestField: FC<TRequestFieldProps> = ({ setRequestBody, parsingError, setParsingError }) => {
  const { lastFullfilledRequest } = useAppSelector(state => state.request)

  const handleRequestFieldChange = (newValue: string) => {
    setRequestBody(newValue)
    setParsingError(false)
  }

  return (
    <ST.RequestField
      parsingError={parsingError}
      onChange={(e) => handleRequestFieldChange(e.target.value)}
      value={JSON.stringify(lastFullfilledRequest?.request, null, 2)}
      onPaste={(e) => handleRequestFieldChange(e.clipboardData.getData('text'))}
    />
  )
}

export default RequestField
