import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Dashboard } from './pages/Dashboard'
import { CartaoCredito } from './pages/CartaoCredito'
import { ContaBancaria } from './pages/ContaBancaria'

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <div> erro 404!</div>,
        children:[
            {
                path: "/",
                element: <Dashboard/>
            },
            {
                path: "/credito",
                element: <CartaoCredito/>
            },
            {
                path: "/Conta-bancaria",
                element: <ContaBancaria/>
            }
        ]
    }
])