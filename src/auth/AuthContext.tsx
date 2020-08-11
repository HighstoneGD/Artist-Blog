import React, { useEffect, useState } from 'react'
import app, { getDBUserSnapshot } from './service'

export const AuthContext = React.createContext<firebase.User & { name: string, isAdmin: boolean } | null>(null)
export const LoadedContext = React.createContext<boolean>(false)

export const AuthProvider = (props: { children: any }) => {
    const [currentUser, setCurrentUser] = useState<firebase.User & { name: string, isAdmin: boolean } | null>(null)
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    useEffect(() => {
        app.auth().onAuthStateChanged(authUser => {
            setIsLoaded(false)
            if (authUser) {
                const promise = getDBUserSnapshot(authUser.uid)
                promise.then(snapshot => {
                    if (snapshot?.exists()) {
                        const user = {
                            ...authUser,
                            isAdmin: snapshot.val().isAdmin,
                            name: snapshot.val().name
                        }
                        setCurrentUser({ ...user })
                        setIsLoaded(true)
                    }
                })
                .catch(error => console.log(error))
            } else {
                setIsLoaded(true)
            }
        })
    }, [])

    return (
        <AuthContext.Provider value = { currentUser }>
            <LoadedContext.Provider value = { isLoaded }>
                { props.children }
            </LoadedContext.Provider>
        </AuthContext.Provider>
    )
}