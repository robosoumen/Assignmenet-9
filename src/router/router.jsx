import { createBrowserRouter } from "react-router";
import ToyDetailspage from "../pages/ToyDetailspage";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/Homepage";
import ProfilePage from "../pages/ProfilePage";
import ResisterPage from "../pages/ResisterPage";
import Loginpage from "../pages/Loginpage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: '',
                element: <Homepage></Homepage>
            },
            {
                path: '/profile',
                element: <ProfilePage></ProfilePage>
            },
        ]
    },
    {
        path: "/resister",
        element: <ResisterPage></ResisterPage>
    },
    {
        path: "/login",
        element: <Loginpage></Loginpage>
    },
    {
        path: "/*",
        element: <h1>ERROR 404 Layout</h1>
    },
]);

export default router;