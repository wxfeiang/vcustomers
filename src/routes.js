//引入路由

import Customers from './components/Customers'
import About from './components/About'
import  Add from './components/Add'
// 详情
import  Customerdel from './components/Customerdel'
// 编辑
import Edit from './components/Edit'

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
    },
    {
        path: '/customer/:id',
        component: Customerdel
    },
    {
        path: '/edit/:id',
        component: Edit
    }







]
