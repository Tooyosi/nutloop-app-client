import React, { useState } from 'react';
import Home from '../pages/Home';

const landingRoutes = {
    path: "/",
    name: "Login",
    header: "Login",
    badgeColor: "primary",
    children: [
        {
            path: "/",
            exact: true,
            name: "Login",
            component: Home
        },
    ]
};


export const landing = [landingRoutes];


export const dashboard = [
]

export default [
]