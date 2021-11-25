
import { PayloadAction } from '@reduxjs/toolkit'
import api from 'helpers/sendsay'
import { all, put, takeLatest } from 'redux-saga/effects'
import { requestActions } from 'store/reducers/request'
import { TRequest } from 'types'

const { requestSuccess, requestFailure, addRequestToHistory, request } = requestActions

export function * requestSaga (action: PayloadAction<TRequest>) {
  let response

  try {
    yield api.sendsay
      .request(action.payload)
      .then((res: any) => {
        requestSuccess({
          res
        })
      })

    // yield put(requestSuccess({
    //   response
    // }))

    // yield put(
    //   addRequestToHistory({
    //     ...action.payload
    //   })
    // )
  } catch (e) {
    yield put(
      requestFailure({
        ...action.payload
      })
    )
  }
}

export default function * root () {
  yield all([
    takeLatest(request.type, requestSaga)
  ])
}
