import { appReducer } from "./reducers/appReducer";
import { combineReducers } from "redux";
import { snackReducer } from "./reducers/snackbarReducer";
import { connectRouter } from 'connected-react-router'
import { dishReducer } from './reducers/dishReducer'

export const rootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  dish: dishReducer,
  loading: appReducer,
  snackBar: snackReducer,
})