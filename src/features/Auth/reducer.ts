import { ConfirmationResult } from '@firebase/auth-types'
import { ActionTypes } from './types'

const initialState = {
  auth: false,
  confirmation: null as ConfirmationResult | null,
  isFailedConfirmationCode: false,
  isLoading: false
}

export const AuthReducer = (state = initialState, action: ActionTypes): typeof initialState => {
  switch (action.type) {
    case 'SIGN_IN__SET_AUTH':
      return {
        ...state,
        auth: action.auth
      }
    case 'SIGN_IN__SET_CONFIRMATION':
      return {
        ...state,
        confirmation: action.confirmation
      }
    case 'SIGN_IN__SET_IS_FAILED_CONFIRMATION_CODE':
      return {
        ...state,
        isFailedConfirmationCode: action.isFailedConfirmationCode
      }
    case 'SIGN_IN__SET_IS_LOADING':
      return {
        ...state,
        isLoading: action.isLoading
      }
    case 'SIGN_IN__SET_RESET':
      return initialState
    default: return state
  }
}
