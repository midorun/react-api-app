import { useEffect } from 'react'
import { Form, Field } from 'react-final-form'
import { useNavigate } from 'react-router-dom'

import { composeValidators, required, withoutCyrillic } from 'helpers/validators'
import { useActions, useAppSelector } from 'store/hooks'
import { Input, Icon, Submit, Logo } from 'components'
import { TAuthPayload } from 'types'

import * as ST from './styled'

const LoginPage = () => {
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
            <ST.Header>API Консолька</ST.Header>
            {
              authError &&
            <ST.Error>
              <ST.ErrorIcon>
                <Icon id='meh-face' />
              </ST.ErrorIcon>
              <ST.ErrorText>
                <ST.ErrorTitle>
                  Вход не вышел
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
              placeholder='Сублогин'
              render={(props) => <Input {...props} type="text" label="Сублогин" optional />}
            />
            <Field
              name='password'
              placeholder='Пароль'
              render={(props) => <Input {...props} type='password' label="Пароль" />}
              validate={composeValidators(required, withoutCyrillic)}
            />
            <Submit
              onClick={form.reset}
              placeholder="Войти"
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

export default LoginPage
