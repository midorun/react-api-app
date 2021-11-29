import React, { Dispatch, FC, SetStateAction } from 'react'

import * as ST from './styled'

export type TRequestFieldProps = {
  requestBody: string
  setRequestBody: Dispatch<SetStateAction<string>>
  setIsRequestBodyValidJSON: Dispatch<SetStateAction<boolean>>
  isRequestBodyValidJSON: boolean
}

const RequestField: FC<TRequestFieldProps> = (
  {
    isRequestBodyValidJSON,
    setIsRequestBodyValidJSON,
    requestBody,
    setRequestBody
  }
) => {
  const handleRequestChange = (newRequestBody: string) => {
    setRequestBody(newRequestBody)
    setIsRequestBodyValidJSON(true)
  }

  return (
    <ST.RequestField
      isRequestBodyValidJSON={!isRequestBodyValidJSON}
      onChange={(e) => handleRequestChange(e.target.value)}
      value={requestBody}
    />
  )
}

export default RequestField
