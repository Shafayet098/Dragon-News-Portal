import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Error from "./Error";
import Home from "../Pages/Home";
import Abouts from "../Pages/Abouts";
import Career from "../Pages/Career";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home,
                children:[
                    {
                        
                    }
                ]
            },
            {
                path: 'about',
                Component: Abouts,
            },
            {
                path: 'career',
                Component: Career,
            },
        ]
    },
    {
        path: '/auth',
        element: <h1>Authentication</h1>,
    },
    {
        path: '/news',
        element: <h1>News</h1>
    },

    {
        path: '/*',
        Component: Error,
    }
])