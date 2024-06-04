import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import App from "../App";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";
import ProtectedRoute from "./ProtectedRoute"; 
import PublicRoute from "./PublicRoute"; 
import ResetPasswordPage from "../pages/ResetPasswordPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/" ,
                element: <PublicRoute element={<LoginPage />} />
            },
            {
                path: "/login" ,
                element: <PublicRoute element={<LoginPage />} />
            },
            {
                path: "/register",
                element: <PublicRoute element={<RegisterPage />} />
            },
            {
                path: "/forgot-password",
                element: <PublicRoute element={<ForgotPasswordPage />} />
            },
            {
                path: "/reset-password",
                element: <PublicRoute element={<ResetPasswordPage />} />
            },
            {
                path: "/dashboard",
                element: <ProtectedRoute element={<DashboardPage />} />
            }
        ]
    }
]);

export default appRouter;
