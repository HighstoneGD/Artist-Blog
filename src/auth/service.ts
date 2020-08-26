import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/database"

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
})

export const logIn = async (userData: { email: string, password: string }) => {
    return app.auth().signInWithEmailAndPassword(userData.email, userData.password)
}

export const signUp = async (userData: { email: string, password: string }) => {
    return app.auth().createUserWithEmailAndPassword(userData.email, userData.password)
}

export const signOut = async () => {
    return app.auth().signOut()
}

export const createDBUser = (user: firebase.User | null) => {
    if (user) {
        app.database()
        .ref('users/' + user.uid)
        .set({
            email: user.email,
            name: '',
            isAdmin: false
        })
    }
}

export const changeDBUserName = (userId: string | undefined, newName: string | undefined) => {
    if (userId) app.database()
        .ref('users/' + userId + '/name')
        .set(newName)
}

export const getDBUserSnapshot = async (userId: string): Promise<firebase.database.DataSnapshot> => {
    return app.database()
        .ref('users/' + userId)
        .once('value')
}

export const getUsersListSnapshot = (): Promise<firebase.database.DataSnapshot> => {
    return app.database()
        .ref('users')
        .once('value')
}

export default app