import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Error from "./Error";
import Home from "../Pages/Home";
import Abouts from "../Pages/Abouts";
import Career from "../Pages/Career";
import NewsContainer from "../Components/NewsContainer";
import { Component } from "react";
import NewsDetails from "../Components/NewsDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                path: '',
                Component: Home,
                children: [
                    {
                        path: 'categories/:id',
                        loader: () => fetch('/news.json'),
                        Component: NewsContainer,
                    },
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
        path: '/newsdetails/:id',
        loader:()=>fetch('/news.json'),
        Component: NewsDetails,
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