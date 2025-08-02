import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.tsx'
import './index.css'
import Asiana from '@/scenes/asiana'
import About from '@/scenes/aboutpage/'
import Binondo from '@/scenes/binondo'
import Banawe from '@/scenes/banawe'
import OurPrograms from '@/scenes/programpage/'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter ([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: "/Asiana",
    element: <Asiana/>,
  },
  {
    path: "/Binondo",
    element: <Binondo/>,
  },
  {
    path: "/Banawe",
    element: <Banawe/>,
  },
  {
    path: "/ourprograms",
    element: <OurPrograms/>,
  },
  {
    path: "/aboutus",
    element: <About/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
