import { Route, Redirect } from "react-router-dom"

type ProtectedRouteProps = {
    component: React.ComponentType<any>,
    isLoggedIn: boolean,
    path: string,
    onSignInClick: () => void,
    onSignOutClick: () => void,
    savedNewsCards: Array<any>,
    userName: string,
}

const ProtectedRoute = ({ component: Component, ...props }: ProtectedRouteProps) => {
    return(
        <Route>
            {
                () => props.isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
            }
        </Route>
    )
}

export default ProtectedRoute;