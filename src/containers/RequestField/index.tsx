import React, { Dispatch, FC, SetStateAction } from 'react'
import { TRequest } from 'types'

import * as ST from './styled'

export type TRequestFieldProps = {
  requestBody: TRequest | any,
  setRequestBody: Dispatch<SetStateAction<string>>
}

const RequestField: FC<TRequestFieldProps> = ({ requestBody, setRequestBody }) => {
  const handleRequestFieldChange = (newValue: string) => {
    setRequestBody(newValue)
  }

  return (
    <ST.RequestField
      onChange={(e) => handleRequestFieldChange(e.target.value)}
      value={requestBody}
    />
  )
}

export default RequestField
