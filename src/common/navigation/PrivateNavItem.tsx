import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { NavItem, INavItemProps } from './NavItem'

export const PrivateNavItem: React.FC<IPrivateNavItemProps> = props => {
    const { isAdminRoute, ...rest } = props
    const currentUser = useContext(AuthContext)
    const isAdmin = currentUser?.isAdmin && isAdminRoute
    const isLoggedInUser = !!currentUser && !isAdminRoute

    return (
        (isAdmin || isLoggedInUser) ?
            <NavItem { ...rest }/> :
            null
    )
}

interface IPrivateNavItemProps extends INavItemProps {
    isAdminRoute?: boolean
}