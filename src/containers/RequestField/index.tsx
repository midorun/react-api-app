import React, { FC, useEffect, useRef, useState } from 'react'
import JSONEditor, { JSONEditorOptions } from 'jsoneditor'
import { useActions } from 'store/hooks'
import request from 'store/reducers/request'
import { TRequest, TRequestState } from 'types'

import * as ST from './styled'
/* eslint-disable */
const initialJson = {
  'action': 'pong',
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
  request: TRequest | null
}

const RequestField: FC<TRequestFieldProps> = () => {
  const [jsonEditor, setJsonEditor] = useState<JSONEditor>()
  const requestFieldRef = useRef<HTMLDivElement>(null)
  const { request } = useActions()

  useEffect(() => {
    jsonEditor?.destroy()

    jsonEditorOptions.onChange = () => {
      console.log(jsonEditor?.get())
    }

    if (requestFieldRef.current) {
      setJsonEditor(new JSONEditor(requestFieldRef.current, jsonEditorOptions, initialJson))
      setTimeout(() => {
        console.log(jsonEditor?.get())
      }, 1000)
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
