import { AlertColor } from '@mui/material';

export interface IAppStore {
  loading: boolean,
  user: IUser | null
  currency: string
}
export interface IAction {
  type: string
  payload?: any
}

export interface IUser {
  name: string
  email: string
  password: string
  img: string
}

export interface InputProps {
  label: string
  name: string
}

export interface FormData {
  email:string
  password: string
  name?: string
}

export type Dispatch = (action: IAction) => void

export interface IMessage {
  type: AlertColor,
  message: string
}

export interface IReview {
  raiting: number
  author: string
  message: string
  target: string
}

export interface IMessages {
  [key: string]: IMessage
}

export interface IDish {
  name: string
  categories: string[]
  cost: number

}

export interface IProduct {
  img: string,
  title: string,
  background: string
  categories: string[],
  raiting: number,
  comments?: IReview[],
  id: string,
  dishes: IDish[]
}

export interface RouteParams {id: string, param2?: string}

export interface BGProps {
  bg: string
  title: string
  subtitle: string
  overlay?: boolean
  raiting?: number
}

export interface IBasketItem extends IDish {
  count: number
}

export interface IBasket {
  [key: string]: IBasketItem
}

export interface ICurrency {
  mul: number
  symbol: string
}

export interface ICurrencies {
  [key: string]: ICurrency
}