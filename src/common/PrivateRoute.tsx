import React, { useContext } from 'react'
import { Route, Redirect, RouteProps} from 'react-router-dom'
import { AuthContext, LoadedContext } from '../auth/AuthContext'
import { Loading } from '../components/Loading'

export const PrivateRoute = (props: IPrivateRoute) => {
    const { isAdminRoute, ...rest } = props
    const currentUser = useContext(AuthContext)
    const isLoaded = useContext(LoadedContext)
    const isAdmin = currentUser?.isAdmin && isAdminRoute
    const isLoggedInUser = !!currentUser && !isAdminRoute

    return (
        (isAdmin || isLoggedInUser) ?
        <Route
            { ...rest } />
        : (isLoaded ? 
            (isLoggedInUser ? 
                <Redirect to = "/"/> 
                : <Redirect to = "/log-in"/>)
            : <Loading />)
    )
}

interface IPrivateRoute extends RouteProps {
    isAdminRoute?: boolean
}