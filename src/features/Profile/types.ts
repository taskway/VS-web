import { ThunkAction } from 'redux-thunk'
import { AppStateType, InferActionsTypes } from 'common/types'
import { actions } from './actions'

export type ActionTypes = InferActionsTypes<typeof actions>
export type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

export type ProfileType = {
    first_name: string,
    last_name: string,
    displayName: string,
    email: string,
    phoneNumber: string,
    zoomID: string,
    photoURL: string,
    activeRole: string,
    stages: number[],
    roles: string[],
    industries: string[],
    tags: [],
    liked: {},
    slots: {
        [key: string]: {
            status: string,
                duration: number,
                disabled: [],
                reccurent: string
        }
    },
    likes: {
        [key: string]: {
            name: string,
            photoURL: string,
            displayName: string,
            headline: string,
            dt: string,
            job_company: string,
            uid: string,
            job_title: string
        }
    },
    founder: {
        videos: {
            Technology: string,
            _order_: string[],
            _uploading_: string[],
            Team: string
        },
        job: {
            company: string,
            title: string,
            headline: string
        },
        docs: {
            _order_: []
        }
    },
    mutuals: {
        [key: string]: {
            headline: string,
            name: string,
            uid: string,
            job_company: string,
            photoURL: string,
            dt: string,
            displayName: string,
            job_title: string
        }
    },
    investors: {
        [key: string]: {
            status: string
        }
    },
    verified: {
        linkedIn: string
    },
    settings: {
        allow_new_matches: boolean,
        allow_zoom_calls: boolean,
        allow_founder_updates: boolean,
        disable_instant_calls: boolean
    },
    devices: {
        [key: string]: {
            login_counter: number,
            name: string,
            os: string,
            fcm_token: string,
            id: string,
            lastlogin_at: string,
            install_counter: number
        }
    }
}
