import { FormData, Dispatch } from "../../types/redux"
import { auth, db } from '../../libs/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut  } from 'firebase/auth'
import { push } from 'connected-react-router'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { createAlert, createUserAction, endLoadung, hideAlert, startLoading, createSignOutAction } from './generatorActions'

export const RegisterAction = (payload: FormData) => {
 
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(startLoading())
      await createUserWithEmailAndPassword(auth, payload.email, payload.password)
      const uid: string = auth.currentUser!.uid
      const user = {...payload, id: uid}
  
      const userRef = doc(db, 'users', uid)
  
      await setDoc(userRef, user)
  
      dispatch(createUserAction(user))
      dispatch(endLoadung())
  
      dispatch(push('/'))
  
      dispatch(createAlert('USER_REGISTEDER'))
  
      setTimeout(() => dispatch(hideAlert()), 6000)
    }
    catch (e: any) {
      console.log(e.code)
      dispatch(createAlert(e.code))
      dispatch(endLoadung())
      setTimeout(() => dispatch(hideAlert()), 3000)
    }
  
  }
}

export const AuthAction = (payload: FormData) => {

  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(startLoading())
      await signInWithEmailAndPassword(auth, payload.email, payload.password)
      const user = { ...payload, id: auth.currentUser!.uid }
  
      const userRef = doc(db, 'users', user.id)
      const userDoc = (await getDoc(userRef)).data()
      console.log(userDoc)
      dispatch(createUserAction(userDoc))
      dispatch(endLoadung())
  
      dispatch(push('/'))
  
      dispatch(createAlert('USER_SIGNED_IN'))
  
      setTimeout(() => dispatch(hideAlert()), 3000)
    }
    catch(e: any) {
      console.log(e.code)
      dispatch(createAlert(e.code))
      dispatch(endLoadung())
      setTimeout(() => dispatch(hideAlert()), 3000)
    }
   
  }
}

export const SignOutAction = () => {
  return async (dispatch: Dispatch) => {
    await signOut(auth)
    dispatch(createUserAction(null))
    dispatch(createAlert('USER_SIGNED_OUT'))

  }
}