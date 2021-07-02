import { ActionTypes, ProfileType } from './types'

const initialState = {
  profile: null as ProfileType | null
}

export const ProfileReducer = (state = initialState, action: ActionTypes): typeof initialState => {
  switch (action.type) {
    case 'PROFILE__SET_MY_PROFILE':
      return { ...state, profile: action.profile }
    default: return state
  }
}
