import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
    const token = localStorage.getItem('token');

    return (
        token ? <Outlet /> : <Navigate to='/signin' />
    )


}

export default ProtectedRoutes
