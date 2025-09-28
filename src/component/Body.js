import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'

const Body = () => {
    const reactRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/Browse',
            element: <Browse />
        },
    ])
    return (
       <RouterProvider router={reactRouter}/>
    )
}

export default Body