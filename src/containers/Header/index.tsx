import React from 'react';

import Logo from 'components/Logo';
import Icon from 'components/Icon'

import * as ST from './styles';

const Header = () => {
  return (
    <ST.Header>

      <ST.LeftSide>
        <Logo />
        <ST.Title>
          API-консолька
        </ST.Title>
      </ST.LeftSide>

      <ST.RightSide>
        <ST.User>
          <ST.Account>some@email.com</ST.Account>
          <ST.Divider>:</ST.Divider>
          <ST.Sublogin>sublogin</ST.Sublogin>
        </ST.User>
        <ST.Controls>
          <ST.Logout>
            <ST.Exit>Выйти </ST.Exit>
            <Icon id={'log-out'}/>
          </ST.Logout>
          <ST.FullScreen>
            <Icon id={'full-screen'}/>
          </ST.FullScreen>
        </ST.Controls>
      </ST.RightSide>


    </ST.Header>
  );
};

export default Header;
