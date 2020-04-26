import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { RouterProvider } from 'react-router5'
import createRouter from './create-router'
import 'normalize.css'
import './index.scss'

const router = createRouter(true)
const app = <RouterProvider router={ router }><App /></RouterProvider>

router.start(()=>{
    ReactDOM.render(
        app
    , document.querySelector('#root'))
})