//引入路由
import header from './components/header'
import Customers from './components/Customers'
import About from './components/About'
import  Add from './components/Add'

export const routes = [

    {
        path: '/',
        component: Customers
    },
    {
        path: '/About',
        component: About
    },
    {
        path: '/Add',
        component: Add
    }







]
