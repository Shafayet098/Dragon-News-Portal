import { createBrowserRouter, Navigate } from "react-router";
import Root from "../Root/Root";
import Error from "./Error";
import Home from "../Pages/Home";
import Abouts from "../Pages/Abouts";
import Career from "../Pages/Career";
import NewsContainer from "../Components/NewsContainer";
import { Component } from "react";
import NewsDetailsContainer from "../Components/NewsDetailsContainer";
import AuthLayout from "../Pages/AuthLayout";
import Login from "../Components/Login";
import Logout from "../Components/Register";
import Register from "../Components/Register";
import PrivateRoute from "./PrivateRoute";

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
                        index: true,
                        element: <Navigate to="/categories/1" replace />,
                    },
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
        loader: () => fetch('/news.json'),
        element:<PrivateRoute>
            <NewsDetailsContainer></NewsDetailsContainer>
        </PrivateRoute>,
    },
    {
        path: '/auth',
        Component: AuthLayout,
        children: [
            {
                index: true,
                Component: Login,
            },
            {
                path: 'register',
                Component: Register,
            }
        ]
    },

    {
        path: '/*',
        Component: Error,
    }
])