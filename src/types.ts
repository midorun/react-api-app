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
