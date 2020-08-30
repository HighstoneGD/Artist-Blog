export interface INavItemProps {
    to: string,
}

export interface IPrivateNavItemProps extends INavItemProps {
    isAdminRoute?: boolean
}