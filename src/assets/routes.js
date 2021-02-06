import React from "react";
import {Redirect} from "react-router-dom";
import DefaultLayout from "../components/layout/DefaultLayout";
import withAuthentication from "../contexts/withAuthentication";
import User from "../pages/user";
import Users from "../pages/users";
import Authentication from "../pages/authentication";

export default [{
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/user"/>
}, {
    path: "/user",
    layout: DefaultLayout,
    component: withAuthentication(User)
}, {
    path: "/users",
    layout: DefaultLayout,
    component: withAuthentication(Users)
}, {
    path: "/login",
    layout: DefaultLayout,
    noFooter: true,
    noNavbar: true,
    component: Authentication
}];