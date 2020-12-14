import React from 'react'
import { Row, Col } from 'reactstrap'
import {Link} from "react-router-dom"
export default function OrderList() {
    return (
        <Row>
            <Col md="6">
                <div className="card p-3">
                    <h5 className="mb-0">Order Date: <span className="text-success"> 1 May 2020</span></h5>
                    <hr />
                    <p className="small mb-1">Total: <span className="text-success">N7,550</span></p>
                    <p className="small mb-1">Order No: <span className="text-success">N7,550</span></p>
                    <p className="small mb-1">Delivery Method: <span className="text-success">N7,550</span></p>
                    <hr />
                    <h6>Delivery Address</h6>
                    <p className="small mb-3">294 Herbert Macaulay Way, Yaba 101212, Lagos</p>
                    <div className="text-right">
                            <Link to={`/orders/1`} className="btn btn-sm btn-success text-white rounded-pill mr-3">Track Order</Link>
                            <button className="btn btn-sm btn-outline-success rounded-pill">Cancel Order</button>
                    </div>
                </div>
            </Col>
        </Row>
    )
}
