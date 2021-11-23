import { FC } from 'react'

import LoadingSpinner from '../LoadingSpinner'
import * as ST from 'components/Submit/styled'

type TSubmitProps = {
  onClick: () => void
  placeholder: string
  disabled?: boolean
  loading: boolean
}

export type TButtonProps = {
  disabled?: boolean
}

const Submit: FC<TSubmitProps> = ({ placeholder, disabled, loading }) => {
  return (
    <ST.Button type="submit" disabled={disabled}>
      {loading ? <LoadingSpinner /> : placeholder}
    </ST.Button>
  )
}

export default Submit
