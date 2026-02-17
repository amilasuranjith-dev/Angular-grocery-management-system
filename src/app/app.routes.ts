import { Routes } from '@angular/router';
import { Login } from './page/login/login';
import { Register } from './page/register/register';
import { Dashboard } from './page/dashboard/dashboard';
import { Customer } from './page/customer/customer';
import { Item } from './page/item/item';
import { AddCustomer } from './page/customer/add-customer/add-customer';
import { ViewAllCustomers } from './page/customer/view-all-customers/view-all-customers';
import { AddItem } from './page/item/add-item/add-item';
import { ViewAllItems } from './page/item/view-all-items/view-all-items';
import { Order } from './page/order/order';
import { AddOrder } from './page/order/add-order/add-order';
import { ViewAllOrder } from './page/order/view-all-order/view-all-order';
import { Home } from './page/dashboard/home/home';

export const routes: Routes = [
    {path:"",
        component: Login
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: "register",
        component: Register
    },
    {
        path: "dashboard",
        component: Dashboard,
        children: [
            { path: "", redirectTo: "home", pathMatch: "full" },
            {
                path: "home",
                component: Home 
            }, 
            {
                path: "customer",
                component: Customer,
                children: [
                    {
                        path: "add-customer",
                        component: AddCustomer
                    },
                    {
                        path: "view-all",
                        component: ViewAllCustomers
                    }
                ]
            },
            {
                path: "item",
                component: Item,
                children:[
                    {
                        path: "add-item",
                        component: AddItem
                    },
                    {
                        path: "view-all",
                        component: ViewAllItems
                    }
                ]
            },
            {
                path: "order",
                component: Order,
                children: [
                    {
                        path:"add-order",
                        component: AddOrder
                    },
                    {
                        path: "view-all-order",
                        component: ViewAllOrder
                    }
                ]
            }
        ]
    },
];
