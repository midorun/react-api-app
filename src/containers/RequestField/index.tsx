import React, { ChangeEvent, FC, Ref, useEffect, useRef, useState } from 'react'
import JSONEditor, { JSONEditorOptions } from 'jsoneditor'
import internal from 'stream'

import * as ST from './styled'
/* eslint-disable */
const initialJson = {
  "action":"pong",
}
/* eslint-enable */

const jsonEditorOptions: JSONEditorOptions = {
  mode: 'text',
  mainMenuBar: false,
  navigationBar: false,
  statusBar: false,
  search: false
}

export type TRequestFieldProps = {
  request: string | undefined,
  changeRequest: (request: string | undefined) => void

}

const RequestField: FC<TRequestFieldProps> = ({ request, changeRequest }) => {
  const [jsonEditor, setJsonEditor] = useState<JSONEditor>()
  const requestFieldRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    jsonEditor?.destroy()

    if (requestFieldRef.current) {
      setJsonEditor(new JSONEditor(requestFieldRef.current, jsonEditorOptions, initialJson))
      console.log(jsonEditor?.get())
    }

    return () => {
      jsonEditor?.destroy()
    }
  }, [])

  return (
      <ST.RequestField
        ref={requestFieldRef}
      />
  )
}

export default RequestField
