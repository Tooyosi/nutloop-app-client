import React from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import Categories from './Categories'
import Product from './Product'
import Productview from './ProductView'
function Products(props) {
    return (<Switch location={props.location}>
        <Route
            path="/products"
            render={({ match: { url } }) => (
                <React.Fragment>
                    <Route path={`${url}/:id/view/:productId`} render={(props) =>
                        <Productview {...props} {...props} />} exact />
                    <Route path={`${url}/:id`} render={(props) =>
                        <Product {...props} {...props} />} exact />

                    <Route path={`${url}/`} render={(props) =>
                        <Categories {...props} {...props} />} exact />

                </React.Fragment>
            )}
        />
    </Switch>

    )
}

export default withRouter(Products)
