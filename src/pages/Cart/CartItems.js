import React from 'react'
import { Row, Col, ButtonGroup, Button } from 'reactstrap'
import { Link } from "react-router-dom"
import EmptyCartImg from "../../assets/images/svg/icons/ic_empty_cart.svg"
import DeleteIcon from "../../assets/images/svg/icons/ic_delete.svg"
import { formatter } from '../../redux/utility'
export default function CartItems(props) {
    return (
        <>
            {props.items.length < 1 ?
                <Row>

                    <Col sm="12">
                        <div className="vh-100">
                            <div className="vh-50 mt-5 text-center">
                                <img src={EmptyCartImg} className="mt-2" />
                                <br />
                                <Link to="/products" className="btn btn-success mt-5 text-white px-4">Start Shopping</Link>
                            </div>
                        </div>
                    </Col>
                </Row>

                :

                <Row>
                    {props.items.map((item, i) => (
                        <Col md="6" sm="12">
                            <div className="card mt-2">

                                <Row>
                                    <Col sm="6" xs="12">
                                        <img className="w-100" src={item.image} />

                                    </Col>
                                    <Col sm="6" xs="12">
                                        <div className="mt-3 p-3">
                                            <p className="font-weight-bold text-capitalize"> {item.name}</p>
                                            <p className="small">N{item.price}/kg</p>
                                            <div className="buttons my-3 mr-2">
                                                <ButtonGroup>
                                                    <Button id="decrease" type="button" className="btn-success">-</Button>
                                                    <input type="number" min="0" value={item.quantity} />
                                                    <Button id="increase" type="button" className="btn-success">+</Button>

                                                </ButtonGroup>
                                                <div className="float-right">

                                                    <img src={DeleteIcon} className="cursor-pointer"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <div className="cart-product">
                                    </div>
                                </Row>
                            </div>
                        </Col>

                    ))}
                    <Col sm="12" className="my-3">
                        <p className="float-md-left small">{props.items.length} Items: Total (excluding delivery charges) <span className="text-success"> &#8358; {formatter.format(props.items.reduce((a, b) => {
                            return a + parseInt(b["price"] || 0)
                        }, 0))}</span></p>
                        <Link to="/checkout" className="float-md-right btn btn-success text-white">Check out</Link>
                    </Col>
                </Row>
            }
        </>
    )
}
