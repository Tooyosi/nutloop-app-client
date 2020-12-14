import React from 'react'
import { Row, Col } from 'reactstrap'
import { Link } from "react-router-dom"

export default function OrderView() {
    return (
        <Row>
            <Col md="6">
                <div className="card p-3">
                    <h5 className="mb-2">Delivery Timeline</h5>

                    <div class="grow">
                        <div class="list">
                        </div>
                        <div className="ball-parent">
                            <span class="ball-span col-lg-12">
                                <div className="d-flex">
                                    <span class="balls">
                                        <span className="active"></span>
                                    </span>
                                    <p className="text-success font-weight-bold">Ordered Monday, 22 June</p>
                                </div>
                            </span>
                            <span class="ball-span col-lg-12">
                                <div className="d-flex">

                                    <span class="balls">
                                    <span className="active"></span>

                                    </span>
                                    <p className="text-success font-weight-bold">Out for Delivery</p>
                                </div>
                            </span>
                            <span class="ball-span col-lg-12">
                                <div className="d-flex">

                                    <span class="balls">
                                        <span></span>
                                    </span>
                                    <p className="text-dark">Delivered</p>
                                </div>
                            </span>
                        </div>
                    </div>
                    <hr />
                    <h6 className="mb-2">Delivery Address </h6>
                    <p className="small">294 Herbert Macaulay Way, Yaba 101212, Lagos</p>
                    <hr />
                    <p className="small mb-1">Total: <span className="text-success">N7,550</span></p>
                    <p className="small mb-1">Order No: <span className="text-success">N7,550</span></p>
                    <p className="small mb-1">Delivery Method: <span className="text-success">N7,550</span></p>

                </div>
            </Col>
        </Row>
    )
}
