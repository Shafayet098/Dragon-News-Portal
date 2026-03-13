import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Error from "./Error";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children:[
            {
                index: true,
                Component: Home
            }
        ]
    },
    {
        path:'/auth',
        element: <h1>Authentication</h1>,
    },
    {
        path: '/news',
        element:<h1>News</h1>
    },
    {
        path: '/about',
        element:<h1>About</h1>
    },
    {
        path: '/career',
        element: <h1>Career</h1>
    },
    {
        path:'/*',
        Component: Error,
    }
])