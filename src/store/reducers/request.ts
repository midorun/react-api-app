import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TFullfilledRequest, TRequest, TRequestState } from 'types'

const requestHistoryLimit = 15

const initialState: TRequestState = {
  loading: false,
  error: null,
  requestBody: '{ "action": "pong" }',
  history: null,
  lastFullfilledRequest: null
}

const requestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {
    requestSend (state, action: PayloadAction<TRequest>) {
      state.loading = true
    },
    requestSuccess (state) {
      state.loading = false
      state.error = false
    },
    requestFailure (state) {
      state.loading = false
      state.error = true
    },
    addRequestToHistory (state, action: PayloadAction<TFullfilledRequest>) {
      state.lastFullfilledRequest = action.payload
      if (!state.history) {
        state.history = []
        state.history.push(action.payload)
      } else {
        const nonUniqueRequest = state.history?.find(historyItem => historyItem.request.action === action.payload.request.action)

        if (nonUniqueRequest && state.history) {
          state.history = state.history?.filter(historyItem => historyItem.request.action !== nonUniqueRequest.request.action)
          state.history.unshift(nonUniqueRequest)
        } else {
          state.history?.push(action.payload)
        }
      }
    },
    removeRequestFromHistory (state, action: PayloadAction<TRequest>) {
      if (state.history) {
        state.history = state.history.filter(item => item.request.action !== action.payload.action)
      }
    },
    clearHistory (state) {
      state.history = null
    },
    changeRequestBody (state, action: PayloadAction<TRequest>) {
      state.requestBody = JSON.stringify(action.payload, null, 2)
    }
  }
})

export const requestActions = requestSlice.actions
export default requestSlice.reducer
