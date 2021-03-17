import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import routes from "../src/assets/routes";
import React from "react";

export default () => (
    <Router basename={process.env.PUBLIC_URL || ""}>
        <div>
            <Switch>
                {routes.map((route, index) => {
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={(props) => {
                                return (
                                    <route.layout
                                        {...props}
                                        noNavbar={route.noNavbar ?? false}
                                        noFooter={route.noFooter ?? false}>
                                        <route.component {...props}  />
                                    </route.layout>
                                )
                            }}
                        />
                    );
                })}
            </Switch>
        </div>
    </Router>
);