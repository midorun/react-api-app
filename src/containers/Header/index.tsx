import React, { FC } from 'react'
import { FullScreenHandle } from 'react-full-screen'

import { Logo, Icon } from 'components'
import { EHeaderConstants } from 'containers/Header/constants'
import { useActions, useAppSelector } from 'store/hooks'

import * as ST from './styled'

export type THeaderProps = {
  fullScreenHandle: FullScreenHandle
}

const Header:FC<THeaderProps> = ({ fullScreenHandle }) => {
  const { logout } = useActions()
  const { login, sublogin } = useAppSelector(state => state.auth)

  const handleFullScreenIconClick = () => {
    fullScreenHandle.active
      ? fullScreenHandle.exit()
      : fullScreenHandle.enter()
  }

  return (
    <ST.Header>

      <ST.LeftSide>
        <Logo />
        <ST.Title>
          {EHeaderConstants.TITLE}
        </ST.Title>
      </ST.LeftSide>

      <ST.RightSide>
        <ST.User>
          <ST.Account>{login}</ST.Account>
          {sublogin &&
           <>
             <ST.Divider>:</ST.Divider>
             <ST.Sublogin>{sublogin}</ST.Sublogin>
           </>
          }
        </ST.User>

        <ST.Logout onClick={() => logout()}>
          <ST.Exit>{EHeaderConstants.EXIT} </ST.Exit>
          <Icon id={'log-out'} />
        </ST.Logout>
        <ST.FullScreen onClick={handleFullScreenIconClick}>
          <Icon id={'full-screen'} />
        </ST.FullScreen>

      </ST.RightSide>

    </ST.Header>
  )
}

export default Header
