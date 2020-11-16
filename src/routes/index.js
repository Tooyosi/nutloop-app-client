import React, { useState } from 'react';
import Home from '../pages/Home';
import Icofont from 'react-icofont';
import Products from '../pages/Products';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
const landingRoutes = {
    path: "/",
    name: "Dashboard",
    header: "Dashboard",
    badgeColor: "primary",
    containsHome: true,
    image: (<Icofont icon="spinner" size="3" spin="true"/>),
    Icon: '',
    children: [
        {
            path: "/",
            exact: true,
            name: "Login",
            Icon: '',
            image: (<Icofont icon="spinner" size="3" spin="true"/>),
            component: Home
        },
    ]
};


const dashboardRoutes = {
    path: "/",
    name: "Home",
    withHeader: true,
    exact: false,
    badgeColor: "primary",
    children: null,
    image: (<Icofont icon="home" size="1" className="mr-1" />),
    component: Home
  };

  const productsRoutes = {
    path: "/products",
    name: "Products",
    withHeader: true,
    badgeColor: "primary",
    children: null,
    image: (<Icofont icon="listine-dots" size="1" className="mr-1" />),
    component: Products
  };
  
  const cartRoutes = {
    path: "/cart",
    name: "Cart",
    withHeader: true,
    badgeColor: "primary",
    children: null,
    image: (<Icofont icon="cart-alt" size="1" className="mr-1" />),
    component: Cart
  };

  const checkoutRoutes = {
    path: "/checkout",
    name: "Checkout",
    withHeader: true,
    badgeColor: "primary",
    children: null,
    image: (<Icofont icon="cart-alt" size="1" className="mr-1" />),
    component: Checkout
  };
  
export const landing = [landingRoutes];


export const dashboard = [
    productsRoutes,
    cartRoutes,
    checkoutRoutes,
    dashboardRoutes,
]

export default [
    dashboardRoutes,
    productsRoutes,
    cartRoutes
]