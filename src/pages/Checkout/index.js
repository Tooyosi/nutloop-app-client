import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import CartList from './CartList'
import { Row, Col, Collapse, FormGroup, Input, Label } from 'reactstrap'
import AddressForm from './AddressForm'
import SupportedCards from "../../assets/images/svg/icons/ic_cards.svg"
export default function Checkout() {
    const state = useSelector(state => state)
    const [isOpen, setIsOpen] = useState(false);
    const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const toggleDelivery = () => setIsDeliveryOpen(!isDeliveryOpen);

    return (
        <>
            <Row className="bg-white py-3">
                <Col sm="12">
                    <h5 className="float-left">My Cart</h5>
                    <Link to="/cart" className="float-right text-success small">View All</Link>
                </Col>
                <Col sm="12">
                    <CartList items={state.cart.cartItems} />
                </Col>

            </Row>

            <Row className="bg-white my-3 py-3">
                <Col sm="12">
                    <h5 className="float-left">Delivery Address</h5>
                    <button onClick={toggleDelivery} className="float-right btn btn-success rounded-5 text-white small">Change Address</button>
                </Col>

            </Row>
            <Row className="bg-white my-3 py-3">
                <Col sm="12">
                    <h5 className="float-left cursor-pointer" onClick={toggle}>Delivery Options</h5>
                    {/* <a onClick={toggle} href="#"  className="float-right success text-success small">Change Address</a> */}
                </Col>

                <Col sm="12" id="collapseChoice">
                    {/* <CartList items={state.cart.cartItems} /> */}
                    <Collapse isOpen={isOpen}>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio2" />{' '}
                                <b> N500 </b> Stanard Delivery
                                                <br />
                                <small>30 Minutes maximum Delivery Time</small>
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio2" />{' '}
                                <b>N1,200 </b> Express Delivery
                                                <br />
                                <small>Choose preferred date and time of Delivery</small>
                            </Label>
                        </FormGroup>

                    </Collapse>
                </Col>

            </Row>
            <Row className="bg-white my-3 py-3">

                <Col sm={12}>
                    <h5>Payment</h5>

                    <button className=" btn btn-success rounded-5 text-white small">Add Credit Card</button>
                </Col>
                <Col sm={12} className="text-center">
                    <img src={SupportedCards} />
                </Col>
            </Row>

            <Row className="my-3 py-3">

                <Col sm={12}>
                    <p className="float-left">Sub-total</p>
                    <p className="float-right">N6,700</p>
                </Col>
                <Col sm={12}>
                    <p className="font-weight-bold float-left">Total to Pay</p>
                    <p className="font-weight-bold float-right">N7,900</p>
                </Col>
                <Col sm={12} className="text-center">
                <button className=" btn btn-success rounded-5 text-white small px-5">Place Order</button>
                    
                </Col>
            </Row>
            <AddressForm
                modal={isDeliveryOpen}
                toggle={toggleDelivery} />
        </>
    )
}
