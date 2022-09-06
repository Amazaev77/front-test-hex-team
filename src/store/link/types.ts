export interface LinkState {
  error: null | string
  isLoading: boolean
  link: ILink | null
}

export interface ILink {
  id: number
  short: string
  target: string
  counter: number
}

export interface ILinkToken {
  link: string
  token: string
}
