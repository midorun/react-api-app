import React, { FC, useEffect, useState } from 'react'
import { useAppSelector } from 'store/hooks'

import * as ST from './styled'

export type TResponseFieldProps = {}

const ResponseField: FC<TResponseFieldProps> = () => {
  const { lastFullfilledRequest } = useAppSelector(state => state.request)
  const [value, setValue] = useState()

  useEffect(() => {
    if (lastFullfilledRequest) {
      lastFullfilledRequest.response
        ? setValue(lastFullfilledRequest.response)
        : setValue(lastFullfilledRequest.error)
    }
  }, [lastFullfilledRequest])

  return (
    <ST.ResponseField
      isRequestBodyValidJSON={lastFullfilledRequest?.error}
      readOnly
      value={JSON.stringify(value, null, 2)}
    />
  )
}

export default ResponseField
