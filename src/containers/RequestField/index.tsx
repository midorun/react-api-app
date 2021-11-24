import React, { FC, useEffect, useRef } from 'react'
import JSONEditor, { JSONEditorOptions } from 'jsoneditor'

import * as ST from './styled'

export type TRequestFieldProps = {}

const RequestField: FC<TRequestFieldProps> = () => {
  const requestFieldRef = useRef<HTMLDivElement>(null)
  const editorRef = useRef<JSONEditor>(null)

  useEffect(() => {
    // if (editorRef.current) {
    //   editorRef.current.destroy()
    // }

    if (requestFieldRef.current) {
      const jsonEditor = new JSONEditor(requestFieldRef.current, {
        mode: 'code',
        mainMenuBar: false,
        navigationBar: false,
        statusBar: false,
        search: false
      })
    }
  })

  return (
    <ST.RequestField ref={requestFieldRef}>

    </ST.RequestField>
  )
}

export default RequestField
