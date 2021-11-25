import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TRequest, TRequestState, TResponse } from 'types'

const requestHistoryLimit = 15

const initialState: TRequestState = {
  loading: false,
  requestValue: { action: 'pong' },
  response: null,
  error: null,
  history: []
}

const requestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {
    request (state, action: PayloadAction<TRequest>) {
      state.loading = true
      state.requestValue = action.payload
    },
    requestSuccess (state, action: PayloadAction<TResponse>) {
      state.loading = false
      state.error = false
      state.response = action.payload
    },
    requestFailure (state, action: PayloadAction<TResponse>) {
      state.loading = false
      state.error = true
      state.response = action.payload
    },
    addRequestToHistory (state, action: PayloadAction<TResponse>) {
      // let { history } = state
      //
      //
      // const uniqueRequest = history?.find(historyItem => historyItem.action === state.requestValue)
      //
      // if (uniqueRequest) {
      //   history = history?.filter(historyItem => historyItem.action === uniqueRequest.action)
      //   history?.unshift(uniqueRequest)
      // } else {
      //   history?.push()
      // }
    },
    removeRequestFromHistory (state, action: PayloadAction<TResponse>) {
      // let { history } = state
      // const { requestValue, success } = action.payload
      //
      // history = history?.filter(historyItem => historyItem.requestValue !== requestValue)
    },
    clearHistory (state) {
      state.history = []
    }
  }
})

export const requestActions = requestSlice.actions
export default requestSlice.reducer
