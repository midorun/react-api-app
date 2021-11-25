export type TAuthPayload = {
  login: string
  sublogin?: string
  password: string
}

export type TAuthSuccess = {
  sessionKey: string
  login: string
  sublogin?: string
}

export type TAuthFailure = {
  id: string,
  explain: string,
  request: unknown
}

export type TAuthState = {
  loading: boolean,
  sessionKey: string | null,
  login: string | null,
  sublogin?: string | null
  error: TAuthFailure | null
}

export type TRequestState = {
  loading: boolean,
  requestValue: TRequest,
  response: any | null,
  error: unknown | null,
  history: TRequest[]
}

export type TRequest = {
  action: string
}

export type TResponse = unknown

// export type TResponse = {
//   requestId: string
//   duration: null | string
// }
