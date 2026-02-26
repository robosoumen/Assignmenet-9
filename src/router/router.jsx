import { createBrowserRouter } from "react-router";
import ToyDetailspage from "../pages/ToyDetailspage";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/Homepage";
import ProfilePage from "../pages/ProfilePage";
import ResisterPage from "../pages/ResisterPage";
import AuthLayout from "../layout/AuthLayout";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: '',
                element: <Homepage></Homepage>,
                loader: () => fetch('/public/toy.json')
            },
            {
                path: '/profile',
                element: <ProfilePage></ProfilePage>
            },
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <LoginPage></LoginPage>
            },
            {
                path: '/auth/resister',
                element: <ResisterPage></ResisterPage>
            },
        ]
    },
    {
        path: "/*",
        element: <h1>ERROR 404 Layout</h1>
    },
]);

export default router;