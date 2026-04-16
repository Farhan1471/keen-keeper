import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from "./layout/RootLayout"
import Homepage from './pages/homepage/Homepage'
import Stats from './pages/stats/Stats'
import Timeline from './pages/timeline/Timeline'
import NotFoundPage from './pages/notFoundPage/NotFoundPage'

const router = createBrowserRouter(
  [
    {
       path: "/",
       element: <RootLayout/>,
       children:[
        {
          path: "/",
          element: <Homepage />,
          loader: ()=> fetch("/data.json")
        },
        {
          path: "/stats",
          element: <Stats />
        },
        {
          path: "/timeline",
          element: <Timeline />
        }
       ],
       errorElement: <NotFoundPage />
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
