import React, { FC } from 'react'
import { createPortal } from 'react-dom'

import * as ST from './styled'

export type TModalProps = {
  top: string,
  left: string,
  width: string,
}

const Modal: FC<TModalProps> = ({ children, ...positioning }) => {
  return (
    createPortal(
      <ST.Modal
        {...positioning}
      >
        {children}
      </ST.Modal>,
      document.getElementById('root')!)
  )
}

export default Modal
