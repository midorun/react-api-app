import { FC } from 'react'
import { FieldRenderProps } from 'react-final-form'

import * as ST from 'components/Input/styled'

interface IInputProps extends FieldRenderProps<string, HTMLInputElement> {
  type: string
  label: string
  optional?: boolean
}

export interface IInputStyledProps extends IInputProps {
  isEmpty: boolean
}

const Input: FC<IInputProps> = ({ input, meta, ...rest }) => {
  return (
    <ST.LabelStyled
      optional={rest.optional}
      invalid={meta.error && meta.touched}
    >
      {rest.label}
      <ST.InputStyled {...rest} {...input} isEmpty={!(input.value)} />
    </ST.LabelStyled>
  )
}

export default Input
