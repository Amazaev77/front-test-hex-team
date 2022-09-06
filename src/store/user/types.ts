export interface ILoginPayloadSuccess {
  username: string
  token: ILoginResponse
}

export interface UserState {
  token: ILoginResponse | null
  error: IErrorResponse | null
  isLoading: boolean
  user: { username: string } | null
}

export interface IErrorResponse {
  data: { detail: string }
  status: 400
  statusText: string
}

export interface IUsernamePassword {
  username: string
  password: string
}

export interface ILoginResponse {
  access_token: string
  token_type: string
}

export interface IRegisterResponse {
  username: string
}
