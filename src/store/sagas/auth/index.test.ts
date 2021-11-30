import { PayloadAction } from '@reduxjs/toolkit'
import expect from 'expect'
import { call, put } from 'redux-saga/effects'
import api from 'helpers/sendsay'
import { authActions as actions } from 'store/reducers/auth'
import { authenticateCheckSaga, authenticateSaga } from 'store/sagas/auth/index'
import { TAuthPayload } from 'types'

describe(`saga triggered on ${actions.authenticateCheck.type} action`, () => {
  const saga = authenticateCheckSaga()

  it('should ping to api', () => {
    expect(saga.next().value)
      .toEqual(call(
        api.pingWithAuthorization
      ))
  })

  it('should be closed on next iteration', () => {
    expect(saga.next().done).toBeTruthy()
  })
})

describe(`saga triggered on ${actions.authenticate.type} action`, () => {
  const action: PayloadAction<TAuthPayload> = {
    type: actions.authenticate.type,
    payload: {
      login: 'lmidorunl@gmail.com',
      password: 'shi7Neime',
      sublogin: 'sublogin'
    }
  }
  const saga = authenticateSaga(action)

  it('should authenticate into api', () => {
    expect(saga.next().value)
      .toEqual(call(api.login, action.payload))
  })

  it(`should put ${actions.authenticateSuccess.type}`, () => {
    expect(saga.next().value)
      .toEqual(
        put(
          actions.authenticateSuccess(
            {
              sessionKey: api.sendsay.session,
              login: 'lmidorunl@gmail.com',
              sublogin: 'sublogin'
            })
        )
      )
  })
})
