import React from 'react'
import { Link } from "react-router-dom"
import { Row, Col, Button } from 'reactstrap'
import ProductList from '../../components/common/ProductList'
export default function TopSelling(props) {
    return (
        <>
            <Row>
                <div className="col-6">
                    <h6>Top Selling Items</h6>
                </div>
                <div className="col-6 text-right">
                    <Link className="text-success small">View All Products</Link>
                </div>
            </Row>
            <ProductList toggleAddToCart={props.toggleAddToCart} />
        </>
    )
}
