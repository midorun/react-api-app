import ResponseField from 'containers/ResponseField'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'

import { useActions, useAppSelector } from 'store/hooks'
import { Header, RequestHistory, RequestField } from 'containers'

import * as ST from './styled'

const ConsolePage = () => {
  const navigate = useNavigate()
  const fullscreenHandle = useFullScreenHandle()
  const { authenticateCheck } = useActions()

  const { login } = useAppSelector(state => state.auth)

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
        <ST.ReqResContainer>
          <RequestField />
          <ResponseField />
        </ST.ReqResContainer>
        {/* <Controls/> */}
      </ST.ConsolePage>
    </FullScreen>
  )
}

export default ConsolePage
