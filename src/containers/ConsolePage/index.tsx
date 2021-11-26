import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import { Resizable } from 're-resizable'

import { Submit, Icon } from 'components'
import ResponseField from 'containers/ResponseField'
import { useActions, useAppSelector } from 'store/hooks'
import { Header, RequestHistory, RequestField } from 'containers'

import * as ST from './styled'

const ConsolePage = () => {
  const navigate = useNavigate()
  const fullscreenHandle = useFullScreenHandle()
  const { authenticateCheck, request } = useActions()
  const [requestFieldWidth, setRequestFieldWidth] = useState<string | number>('50%')
  const { login } = useAppSelector(state => state.auth)
  const [requestBody, setRequestBody] = useState('{ "action": "pong" }')
  const [parsingError, setParsingError] = useState(false)
  const [formatIconId, setFormatIconId] = useState('format-json')

  const formatRequestBody = () => {
    setRequestBody(JSON.stringify(parseRequestBody(), null, 2))
  }

  const parseRequestBody = () => {
    try {
      const parsedJSONBody = JSON.parse(requestBody)
      setParsingError(false)
      return parsedJSONBody
    } catch (e) {
      console.log(e)
      setParsingError(true)
      return requestBody
    }
  }

  useEffect(() => {
    authenticateCheck()
    if (!login) {
      navigate('/')
    }
  }, [login])

  useEffect(() => {
    formatRequestBody()
  }, [])

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
              <ST.FieldHeader>Запрос:</ST.FieldHeader>
              <RequestField
                setRequestBody={setRequestBody}
                setParsingError={setParsingError}
                parsingError={parsingError}
              />
            </ST.FieldWrapper>

          </Resizable>

          <ST.FieldWrapper>
            <ST.FieldHeader>Ответ:</ST.FieldHeader>
            <ResponseField />
          </ST.FieldWrapper>
        </ST.FieldsWrapper>
        <ST.Footer>
          <Submit
            width={'120px'}
            height={'40px'}
            placeholder={'Отправить'}
            onClick={() => request(parseRequestBody())}
            loading={false}
          />
          <ST.GitHubLink>@link-to-my-github</ST.GitHubLink>
          <ST.FormatJSON
            onMouseEnter={() => setFormatIconId('format-json-blue')}
            onMouseLeave={() => setFormatIconId('format-json')}
            onClick={formatRequestBody}
          >
            <Icon id={formatIconId}/>
            Форматировать
          </ST.FormatJSON>
        </ST.Footer>
      </ST.ConsolePage>
    </FullScreen>
  )
}

export default ConsolePage
