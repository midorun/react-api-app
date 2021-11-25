import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TRequest, TRequestState, TResponse } from 'types'

const requestHistoryLimit = 15

const initialState: TRequestState = {
  loading: false,
  request: null,
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
      state.request = action.payload
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
      // const uniqueRequest = history?.find(historyItem => historyItem.action === state.request)
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
      // const { request, success } = action.payload
      //
      // history = history?.filter(historyItem => historyItem.request !== request)
    },
    clearHistory (state) {
      state.history = []
    }
  }
})

export const requestActions = requestSlice.actions
export default requestSlice.reducer
