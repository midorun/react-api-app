import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import { Resizable } from 're-resizable'

import { Submit, Icon } from 'components'
import { Header, RequestHistory, RequestField, ResponseField } from 'containers'
import { ECONSOLE_PAGE_TEXT } from 'containers/ConsolePage/constants'
import { useActions, useAppSelector } from 'store/hooks'
import { TRequest } from 'types'

import * as ST from './styled'

const ConsolePage = () => {
  const navigate = useNavigate()
  const fullscreenHandle = useFullScreenHandle()
  const { authenticateCheck, requestSend } = useActions()
  const [requestFieldWidth, setRequestFieldWidth] = useState<string | number>('50%')
  const { login } = useAppSelector(state => state.auth)
  const { lastFullfilledRequest } = useAppSelector(state => state.request)
  const [isRequestBodyValidJSON, setIsRequestBodyValidJSON] = useState(true)
  const [requestBody, setRequestBody] = useState('{ "action": "pong" }')

  const formatRequestBody = (requestBody: TRequest) => {
    setRequestBody(JSON.stringify(requestBody, null, 2))
  }

  const handleSubmitBtnClick = () => {
    checkRequestBodyOnValidJSON(requestBody)
    if (isRequestBodyValidJSON) {
      requestSend(JSON.parse(requestBody))
    }
  }

  const checkRequestBodyOnValidJSON = (requestBody: string) => {
    try {
      const parsedJSONBody = JSON.parse(requestBody)
      setIsRequestBodyValidJSON(true)
      return parsedJSONBody
    } catch (e) {
      console.log(e)
      setIsRequestBodyValidJSON(false)
    }
  }

  useEffect(() => {
    authenticateCheck()
    if (!login) {
      navigate('/')
    }
  }, [login])

  useEffect(() => {
    if (lastFullfilledRequest) {
      setRequestBody(JSON.stringify(lastFullfilledRequest.request, null, 2))
    }
  }, [lastFullfilledRequest])

  return (
    <FullScreen handle={fullscreenHandle}>
      <ST.ConsolePage>
        <Header
          fullScreenHandle={fullscreenHandle}
        />
        <RequestHistory />

        <ST.FieldsWrapper>
          <Resizable
            size={{ width: requestFieldWidth, height: '100%' }}
            onResizeStop={(e, direction, elementRef) => {
              setRequestFieldWidth(elementRef.clientWidth)
            }}
            minWidth={'25%'}
            maxWidth={'75%'}
            enable={{ right: true }}
          >
            <ST.FieldWrapper>
              <ST.FieldHeader>${ECONSOLE_PAGE_TEXT.REQUEST_FIELD_TITLE}</ST.FieldHeader>
              <RequestField
                requestBody={requestBody}
                setRequestBody={setRequestBody}
                setIsRequestBodyValidJSON={setIsRequestBodyValidJSON}
                isRequestBodyValidJSON={isRequestBodyValidJSON}
              />
            </ST.FieldWrapper>

          </Resizable>

          <ST.FieldWrapper>
            <ST.FieldHeader>${ECONSOLE_PAGE_TEXT.RESPONSE_FIELD_TITLE}</ST.FieldHeader>
            <ResponseField />
          </ST.FieldWrapper>
        </ST.FieldsWrapper>
        <ST.Footer>
          <Submit
            width={'120px'}
            height={'40px'}
            placeholder={'Отправить'}
            onClick={() => handleSubmitBtnClick()}
            loading={false}
          />
          <ST.GitHubLink>${ECONSOLE_PAGE_TEXT.GITHUB_LINK}</ST.GitHubLink>
          <ST.FormatJSON
            onClick={() => formatRequestBody(JSON.parse(requestBody))}
          >
            <Icon id={'format-json'}/>
            ${ECONSOLE_PAGE_TEXT.FORMAT}
          </ST.FormatJSON>
        </ST.Footer>
      </ST.ConsolePage>
    </FullScreen>
  )
}

export default ConsolePage
