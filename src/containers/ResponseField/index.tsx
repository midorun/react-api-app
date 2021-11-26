import React, { FC, useEffect, useState } from 'react'
import { useAppSelector } from 'store/hooks'

import * as ST from './styled'

export type TResponseFieldProps = {}

const ResponseField: FC<TResponseFieldProps> = () => {
  const { lastFullfilledRequest } = useAppSelector(state => state.request)
  const [value, setValue] = useState<string>()

  useEffect(() => {
    lastFullfilledRequest ? setValue(JSON.stringify(lastFullfilledRequest.response, null, 2)) : setValue('')
  }, [lastFullfilledRequest])

  return (
    <ST.ResponseField
      readOnly
      value={value}
    />
  )
}

export default ResponseField
