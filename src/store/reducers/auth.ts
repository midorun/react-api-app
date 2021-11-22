import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TAuthPayload, TAuthSuccess } from 'types'

type TAuthState = {
  loading: boolean,
  sessionKey: string | null,
  login: string | null,
  sublogin?: string | null
}

const initialState: TAuthState = {
  loading: false,
  sessionKey: null,
  login: null,
  sublogin: null
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
        sublogin
      }
    },
    authenticateFailure (state) {
      return {
        ...state,
        sessionKey: null,
        login: null,
        sublogin: null
      }
    },
    logout (state) {
      return {
        ...state,
        loading: false,
        sessionKey: null
      }
    }
  }
})

export const authActions = authSlice.actions
export default authSlice.reducer
