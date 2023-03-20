import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
   apiKey: 'AIzaSyDG8_2LB2HqUaKQp6h54NQG_fkymhHRxVc',
   authDomain: 'med-check-54542.firebaseapp.com',
   projectId: 'med-check-54542',
   storageBucket: 'med-check-54542.appspot.com',
   messagingSenderId: '246290970583',
   appId: '1:246290970583:web:8c1be153f695a933e5bd92',
   measurementId: 'G-1L8YQGGQ8M',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
