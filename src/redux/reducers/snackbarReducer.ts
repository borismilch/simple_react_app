
import { IAppStore, IAction } from "../../types/redux"
import { SHOW_HIDE, SHOW_SNACKBAR } from '../actions/variables'

const initializeState  = {
  snackBar: ''
}

export const snackReducer = (state: { snackBar: string } = initializeState, action: IAction) => {
  switch (action.type) {
    case SHOW_SNACKBAR: return { ...state, snackBar: action.payload }
    case SHOW_HIDE: return { ...state, snackBar: '' }
    default: return state
  }
}