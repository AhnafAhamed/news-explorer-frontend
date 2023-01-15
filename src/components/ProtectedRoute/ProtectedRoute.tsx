import { Route, Redirect } from "react-router-dom"

type ProtectedRouteProps = {
    component: React.ComponentType<any>,
    isLoggedIn: boolean,
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