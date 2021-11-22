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
