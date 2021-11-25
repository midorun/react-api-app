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
  const { authenticateCheck } = useActions()
  const [requestFieldWidth, setRequestFieldWidth] = useState<string | number>('50%')
  const { login } = useAppSelector(state => state.auth)
  const { request } = useActions()
  const [requestBody, setRequestBody] = useState('{ "action": "pong" }')

  const formatRequestField = () => {
    setRequestBody(JSON.stringify(JSON.parse(requestBody), null, 2))
  }

  useEffect(() => {
    authenticateCheck()
    if (!login) {
      navigate('/')
    }
  }, [login])

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
                requestBody={requestBody}
                setRequestBody={setRequestBody}
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
            onClick={() => request(JSON.parse(requestBody))}
            loading={false}
          />
          <ST.GitHubLink>@link-to-my-github</ST.GitHubLink>
          <ST.FormatJSON
            onClick={formatRequestField}
          >
            <Icon id={'format-json'}/>
            Форматировать
          </ST.FormatJSON>
        </ST.Footer>
      </ST.ConsolePage>
    </FullScreen>
  )
}

export default ConsolePage
