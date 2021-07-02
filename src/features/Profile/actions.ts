import { profileAPI } from 'api'
import { ThunkType } from './types'

export const actions = {
  setMyProfile: (profile: any) => ({ type: 'PROFILE__SET_MY_PROFILE', profile } as const)
}

export const init = (): ThunkType => async (dispatch, getState, getFirebase) => {
  const profile = await profileAPI.getMyProfile()
  dispatch(actions.setMyProfile(profile))
}
