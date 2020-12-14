import React from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import OrderList from './List/Index'
import OrderView from './View'

export default function Orders(props) {
    return (
        <Switch location={props.location}>
        <Route
            path="/orders"
            render={({ match: { url } }) => (
                <React.Fragment>
                    <Route path={`${url}/:id`} render={(props) =>
                        <OrderView {...props} {...props} />} exact />
                    {/* <Route path={`${url}/:id`} render={(props) =>
                        <Product {...props} {...props} />} exact /> */}

                    <Route path={`${url}/`} render={(props) =>
                        <OrderList {...props} {...props} />} exact /> 

                </React.Fragment>
            )}
        />
    </Switch>

    )
}
