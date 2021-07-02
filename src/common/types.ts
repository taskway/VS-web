import { ThunkAction } from 'redux-thunk'
import { rootReducer } from 'store/store'
import { getFirebase } from 'react-redux-firebase'
import { actions as authActions } from 'features/Auth/actions'
import { actions as profileActions } from 'features/Profile/actions'
import { actions } from './actions'

type RootReducerType = typeof rootReducer
type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>
export type AppStateType = ReturnType<RootReducerType>
export type RootState = ReturnType<typeof rootReducer>

export type ActionTypes = InferActionsTypes<typeof actions | typeof authActions | typeof profileActions>
export type ThunkType = ThunkAction<Promise<void>, AppStateType, typeof getFirebase, ActionTypes>

export type AuthUserType = {
    apiKey: string | null,
    appName: string | null,
    authDomain: string | null,
    createdAt: string | null,
    displayName: string | null,
    email: string | null,
    emailVerified: boolean,
    isAnonymous: boolean,
    lastLoginAt: string | null,
    multiFactor: {
        enrolledFactors: []
    }
    phoneNumber: string | null,
    photoURL: string | null,
    providerData: {
        displayName: string | null,
        email: string | null,
        phoneNumber: string | null,
        photoURL: string | null,
        providerId: string | null,
        uid: string | null
    }[]
    redirectEventId: null,
    stsTokenManager: {
        accessToken: string | null,
        apiKey: string | null,
        expirationTime: number
        refreshToken: string | null,
    }
    tenantId: string | null,
    uid: string | null
}
