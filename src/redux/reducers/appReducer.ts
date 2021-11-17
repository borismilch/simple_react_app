
import { IAppStore, IAction } from "../../types/redux"
import { ADD_USER, START_LOADING,END_LOADING, CHANGE_CURRENCY_ACTION } from '../actions/variables'

const initializeState: IAppStore  = {
  loading: false,
  user: null,
  currency: 'UA'

}

export const appReducer = (state: IAppStore = initializeState, action: IAction) => {
  switch (action.type) {
    case ADD_USER: return { ...state, user: action.payload }
    case START_LOADING: return { ...state, loading: true }
    case END_LOADING: return { ...state, loading: false }
    case CHANGE_CURRENCY_ACTION: return { ...state, currency: action.payload }
    default: return state
  }
}