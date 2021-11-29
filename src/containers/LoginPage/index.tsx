import { useEffect } from 'react'
import { Form, Field } from 'react-final-form'
import { useNavigate } from 'react-router-dom'

import { composeValidators, required, withoutCyrillic } from 'helpers/validators'
import { useActions, useAppSelector } from 'store/hooks'
import { Input, Icon, Submit, Logo } from 'components'
import { ELOGIN_PAGE_TEXT } from 'containers/LoginPage/constants'
import { TAuthPayload } from 'types'

import * as ST from './styled'

const Index = () => {
  const navigate = useNavigate()
  const { authenticate } = useActions()
  const loading = useAppSelector((state) => state.auth.loading)
  const isLoggedIn = useAppSelector((state) => !!state.auth.sessionKey?.length)
  const authError = useAppSelector(state => state.auth.error)

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/console')
    }
  }, [isLoggedIn])

  const onSubmit = ({ login, sublogin, password }: TAuthPayload) => {
    authenticate({
      login,
      sublogin,
      password
    })
  }

  return (
    <ST.Wrapper>
      <ST.LogoWrapper>
        <Logo />
      </ST.LogoWrapper>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, pristine, hasValidationErrors }) => (
          <ST.FormStyled onSubmit={handleSubmit}>
            <ST.Header>{ELOGIN_PAGE_TEXT.HEADER}</ST.Header>
            {
              authError &&
            <ST.Error>
              <ST.ErrorIcon>
                <Icon id='meh-face' />
              </ST.ErrorIcon>
              <ST.ErrorText>
                <ST.ErrorTitle>
                  {ELOGIN_PAGE_TEXT.ERROR_TITLE}
                </ST.ErrorTitle>
                <ST.ErrorDescription>
                  {`id:${authError?.id}, explain:${authError?.explain}`}
                </ST.ErrorDescription>
              </ST.ErrorText>
            </ST.Error>
            }
            <Field
              name='login'
              render={(props) => <Input {...props} type='text' label='Логин' />}
              validate={composeValidators(required, withoutCyrillic)}
            />
            <Field
              name='sublogin'
              placeholder={ELOGIN_PAGE_TEXT.SUBLOGIN}
              render={(props) => <Input {...props} type="text" label="Сублогин" optional />}
            />
            <Field
              name='password'
              placeholder={ELOGIN_PAGE_TEXT.PASSWORD}
              render={(props) => <Input {...props} type='password' label="Пароль" />}
              validate={composeValidators(required, withoutCyrillic)}
            />
            <Submit
              onClick={() => form.submit()}
              placeholder={ELOGIN_PAGE_TEXT.SUBMIT}
              loading={loading}
              disabled={pristine || hasValidationErrors}
            />
          </ST.FormStyled>
        )}
      >
      </Form>
    </ST.Wrapper>
  )
}

export default Index
