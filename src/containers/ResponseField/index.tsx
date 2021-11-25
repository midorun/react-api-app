import React, { FC } from 'react'
import { useAppSelector } from 'store/hooks'

import * as ST from './styled'

export type TResponseFieldProps = {}

const ResponseField: FC<TResponseFieldProps> = () => {
  const { response } = useAppSelector(state => state.request)
  console.log(response)
  console.log(response && JSON.parse(response))
  return (
    <ST.ResponseField
      readOnly
      value={JSON.parse(response)}
    />
  )
}

export default ResponseField
