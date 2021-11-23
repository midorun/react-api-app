import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TAuthFailure, TAuthPayload, TAuthState, TAuthSuccess } from 'types'

const initialState: TAuthState = {
  loading: false,
  sessionKey: null,
  login: null,
  sublogin: null,
  error: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate (state, action: PayloadAction<TAuthPayload>) {
      return { ...state, loading: true }
    },
    authenticateCheck (state) {
      return { ...state }
    },
    authenticateSuccess (state, action: PayloadAction<TAuthSuccess>) {
      const { sessionKey, login, sublogin } = action.payload
      return {
        ...state,
        loading: false,
        login,
        sessionKey,
        sublogin,
        error: null
      }
    },
    authenticateFailure (state, action: PayloadAction<TAuthFailure>) {
      return {
        ...state,
        sessionKey: null,
        login: null,
        sublogin: null,
        error: action.payload,
        loading: false
      }
    },
    logout (state) {
      return {
        ...state,
        sessionKey: null,
        login: null,
        sublogin: null,
        loading: false
      }
    }
  }
})

export const authActions = authSlice.actions
export default authSlice.reducer
