import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const FormStyled = styled.form`
  width: 520px;
  min-height: 425px;
  left: calc(50% - 520px / 2);
  top: 222px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 40px 30px;
`

export const LogoWrapper = styled.div`
  margin-bottom: 20px;
`

export const Header = styled.h1`
  font-size: 24px;
  line-height: 30px;
  font-weight: normal;
`

export const Error = styled.div`
  padding: 15px 12px 10px;
  display: flex;
  align-items: center;
  background: #cf2c0019;
  border-radius: 5px;
  color: var(--color-error);
`

export const ErrorIcon = styled.div`
  margin-right: 10px;
`

export const ErrorText = styled.span`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`

export const ErrorTitle = styled.span`
  font-size: 18px;
`

export const ErrorDescription = styled.span`
  font-size: 12px;
`
