import React, { useState } from 'react';
import Home from '../pages/Home';
import Icofont from 'react-icofont';
import Products from '../pages/Products';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Signin from '../pages/Auth/Signin';
import SignUp from '../pages/Auth/Signup';
import Account from '../pages/Account';
import Orders from '../pages/Account/Orders';
import Profile from '../pages/Account/Profile';
const landingRoutes = {
  path: "/",
  name: "Sign In",
  header: "Sign In",
  badgeColor: "primary",
  containsHome: true,
  image: (<Icofont icon="spinner" size="3" spin="true" />),
  Icon: '',
  children: [
    {
      path: "/login",
      exact: true,
      name: "Sign In",
      Icon: '',
      component: Signin
    },
    {
      path: "/signup",
      exact: true,
      name: "Sign Up",
      Icon: '',
      component: SignUp
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
  // children: null,
  children: [

    {
      path: "/products",
      name: "All Products",
      image: (<Icofont icon="user-alt-7" size="1" className="mr-1" />),
      component: Products
    },{
      path: "/products/food",
      name: "Food Stuffs",
      image: (<Icofont icon="user-alt-7" size="1" className="mr-1" />),
      component: Products
    },
    {
      path: "/products/soup",
      name: "Soup and Stew Ingredients	",
      image: (<Icofont icon="user-alt-7" size="1" className="mr-1" />),
      component: Products
    },
    {
      path: "/products/fruits",
      name: "Fruits",
      image: (<Icofont icon="user-alt-7" size="1" className="mr-1" />),
      component: Products
    },
    {
      path: "/products/packaged-food",
      name: "Packaged Food",
      image: (<Icofont icon="user-alt-7" size="1" className="mr-1" />),
      component: Products
    },
  ],
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

const accountRoutes = {
  path: "/account",
  name: "Account",
  badgeColor: "secondary",
  badgeText: "",
  image: (<Icofont icon="user-alt-7" size="1" className="mr-1" />),
  children: [

    {
      path: "/orders",
      name: "Orders",
      image: (<Icofont icon="user-alt-7" size="1" className="mr-1" />),

      component: Orders
    },
    {
      path: "/profile",
      name: "Profile",
      image: (<Icofont icon="user-alt-7" size="1" className="mr-1" />),
      component: Profile
    }
  ]
};

const faqRoutes = {
  path: "/faq",
  name: "FAQs",
  withHeader: true,
  badgeColor: "primary",
  children: null,
  image: (<Icofont icon="cart-alt" size="1" className="mr-1" />),
  component: (<></>)
};

const contactRoutes = {
  path: "/faq",
  name: "Contact Us",
  withHeader: true,
  badgeColor: "primary",
  children: null,
  image: (<Icofont icon="cart-alt" size="1" className="mr-1" />),
  component: (<></>)
};

export const landing = [landingRoutes];


export const dashboard = [
  productsRoutes,
  cartRoutes,
  checkoutRoutes,
  accountRoutes,
  dashboardRoutes,
]

export default [
  dashboardRoutes,
  productsRoutes,
  cartRoutes,
  accountRoutes,
  faqRoutes,
  contactRoutes
]