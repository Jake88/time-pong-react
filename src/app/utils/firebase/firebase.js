import firebase from 'firebase/app'
import 'firebase/auth'
import {
  prodConfig,
  devConfig
} from '../../../configs/firebaseAuth'

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export const auth = firebase.auth()
