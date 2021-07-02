import { actions as authActions } from 'features/Auth/actions'
import { profileAPI } from 'api'
import { actions as profileActions } from 'features/Profile/actions'
import { ThunkType } from './types'

export const actions = {
  setInitialized: (initialized: boolean) => ({ type: 'APP__SET_INITIALIZED', initialized } as const)
}

export const init = (): ThunkType => async (dispatch, getState, getFirebase) => {
  getFirebase().auth().onAuthStateChanged(async (userAuth) => {
    dispatch(actions.setInitialized(true))
    if (userAuth) {
      dispatch(authActions.setAuth(true))
      const profile = await profileAPI.getMyProfile()
      dispatch(profileActions.setMyProfile(profile))
    }
  })
}
