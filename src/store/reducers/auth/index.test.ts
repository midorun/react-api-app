import { PayloadAction } from '@reduxjs/toolkit'
import { TAuthFailure, TAuthPayload, TAuthState, TAuthSuccess } from 'types'
import reducer, { initialState, authActions as actions } from './index'
import expect from 'expect'

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as PayloadAction)).toStrictEqual(initialState)
  })

  it(`should handle action ${actions.authenticate.type}`, function () {
    const action: PayloadAction<TAuthPayload> = {
      type: actions.authenticate.type,
      payload: {
        login: 'lmidorunl@gmail.com',
        sublogin: 'sublogin',
        password: 'shi7Neime'
      }
    }
    expect(reducer(initialState, action)).toStrictEqual({ ...initialState, loading: true })
  })

  it(`should handle action ${actions.authenticateCheck.type}`, () => {
    expect(reducer(initialState, {} as PayloadAction)).toStrictEqual(initialState)
  })

  it(`should handle action ${actions.authenticateSuccess.type}`, () => {
    const action: PayloadAction<TAuthSuccess> = {
      type: actions.authenticateSuccess.type,
      payload: {
        login: '',
        sublogin: '',
        sessionKey: ''
      }
    }
    expect(reducer(initialState, action)).toStrictEqual({ ...action.payload, loading: false, error: null } as TAuthState)
  })

  it(`should handle action ${actions.authenticateFailure.type}`, () => {
    const action: PayloadAction<TAuthFailure> = {
      type: actions.authenticateFailure.type,
      payload: {
        id: 'id',
        explain: 'explain',
        request: 'request'
      }
    }
    expect(reducer(initialState, action)).toStrictEqual({
      ...initialState,
      sessionKey: null,
      login: null,
      sublogin: null,
      error: action.payload,
      loading: false
    })
  })

  it(`should handle action ${actions.logout.type}`, () => {
    expect(reducer(initialState, {} as PayloadAction)).toStrictEqual({
      ...initialState,
      sessionKey: null,
      login: null,
      sublogin: null,
      loading: false
    })
  })
})
