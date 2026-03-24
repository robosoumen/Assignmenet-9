import { createBrowserRouter } from "react-router";
import ToyDetailspage from "../pages/ToyDetailspage";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/Homepage";
import ProfilePage from "../pages/ProfilePage";
import ResisterPage from "../pages/ResisterPage";
import AuthLayout from "../layout/AuthLayout";
import LoginPage from "../pages/LoginPage";
import ToyDetails from "../pages/ToyDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/Loading";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: '',
                element: <Homepage></Homepage>,
                loader: () => fetch('/public/toy.json'),
                hydrateFallbackElement: <Loading></Loading>,
            },
            {
                path: '/profile',
                element: <PrivateRoute><ProfilePage></ProfilePage></PrivateRoute>
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
        path: '/toy-details/:id',
        element:<PrivateRoute>
            <ToyDetails></ToyDetails>
        </PrivateRoute>,
        loader: () => fetch('/toy.json'),
        hydrateFallbackElement: <Loading></Loading>,

    },
    {
        path: "/*",
        element: <h1>ERROR 404 Layout</h1>
    },
]);

export default router;