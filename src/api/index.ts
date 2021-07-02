import axios from 'axios'
import { getFirebase } from 'react-redux-firebase'
import { proj } from '../firebase'
import { AuthUserType } from '../common/types'

const instance = axios.create({
  baseURL: `https://us-central1-${proj}.cloudfunctions.net/`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*'
  }
})

instance.interceptors.request.use(
  async (config) => {
    const authUser = getFirebase().auth().currentUser?.toJSON() as AuthUserType | undefined
    if (authUser) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${authUser.stsTokenManager.accessToken}`
    }
    return config
  }, (error) => {
    console.log(error)
  }
)

export const profileAPI = {
  getMyProfile() {
    return instance.get('api/user').then((res) => res.data)
  },
  getMatches() {
    return instance.get('api/matches').then((res) => res.data)
  },
  getRecommended() {
    return instance.get('/api/recommend/me').then((res) => res.data)
  }
}

export const usersAPI = {
  getUser(userId: string) {
    return instance.get(`api/user/${userId}`).then((res) => res.data)
  },
  deleteUser(userId: string) {
    return instance.delete(`/api/user/${userId}`).then((res) => res.data)
  },
  likeUser(userId: string) {
    return instance.post(`api/like/${userId}`).then((res) => res.data)
  }
}
