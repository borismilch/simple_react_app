import { IMessages } from "../types/redux"

export const messages: IMessages = {
  USER_SIGNED_IN: { type: 'success', message: 'Ви ввійшли' },
  USER_REGISTEDER: { type: 'success', message: 'Ви зареєструвалися' },
  'auth/user-not-found': { type: 'error', message: 'Невірний E-mail' },
  'auth/wrong-password': { type: 'error', message: 'Невірний пароль' },
  'auth/email-already-in-use': { type: 'error', message: 'E-mail вже зайнято' },
  USER_SIGNED_OUT: { type: 'success', message: 'Ви вийшли із системи' },
  REWIEW_CREATED: { type: 'success', message: 'Ви зробили рецензію' }
}