import React, { useState } from 'react';
import Home from '../pages/Home';
import Icofont from 'react-icofont';
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
  
export const landing = [landingRoutes];


export const dashboard = [
    dashboardRoutes
]

export default [
    dashboardRoutes
]