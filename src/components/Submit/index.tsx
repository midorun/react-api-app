import { FC } from 'react'

import LoadingSpinner from '../LoadingSpinner'
import * as ST from 'components/Submit/styled'

export type TSubmitProps = {
  onClick: () => void
  placeholder: string
  disabled?: boolean
  loading: boolean
  width?: string,
  height?: string
}

export type TButtonProps = Pick<
  TSubmitProps,
  'width' | 'height' | 'onClick' | 'disabled'>

const Submit: FC<TSubmitProps> = ({ placeholder, loading, ...rest }) => {
  return (
    <ST.Button type="submit" {...rest}>
      {loading ? <LoadingSpinner /> : placeholder}
    </ST.Button>
  )
}

export default Submit
