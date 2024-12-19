import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Home } from '../pages/Home'
import { DashboardLayout } from '../layouts'
import { Home2 } from '../pages/Home2'

export function Router(){
    const router = createBrowserRouter([
        {
            element: <DashboardLayout />,
            children: [
                {
                    path: '/',
                    element: <Home/>
                },
                {
                    path: '/home2',
                    element: <Home2/>
                }
            ]
          },
    ])
    return <RouterProvider router={router}/>
}