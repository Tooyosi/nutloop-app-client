import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import TomatoesImg from "../../assets/images/icons/ic_tomatoes.png"
export default function ProductList(props) {
    return (
        <Row>
            <Col md="3" sm="6" xs="6">
                <div className="product-div">
                    <img src={TomatoesImg} />
                    <p>Tomatoes</p>
                    <p className="small">N125/kg</p>
                    <Button onClick={props.toggleAddToCart} color="success">Add to cart</Button>
                </div>
            </Col>
            <Col md="3" sm="6" xs="6">
                <div className="product-div">
                    <img src={TomatoesImg} />
                    <p>Tomatoes</p>
                    <p className="small">N125/kg</p>
                    <Button onClick={props.toggleAddToCart} color="success">Add to cart</Button>
                </div>
            </Col>
            <Col md="3" sm="6" xs="6">
                <div className="product-div">
                    <img src={TomatoesImg} />
                    <p>Tomatoes</p>
                    <p className="small">N125/kg</p>
                    <Button onClick={props.toggleAddToCart} color="success">Add to cart</Button>
                </div>
            </Col>
            <Col md="3" sm="6" xs="6">
                <div className="product-div">
                    <img src={TomatoesImg} />
                    <p>Tomatoes</p>
                    <p className="small">N125/kg</p>
                    <Button onClick={props.toggleAddToCart} color="success">Add to cart</Button>
                </div>
            </Col>
            <Col md="3" sm="6" xs="6">
                <div className="product-div">
                    <img src={TomatoesImg} />
                    <p>Tomatoes</p>
                    <p className="small">N125/kg</p>
                    <Button onClick={props.toggleAddToCart} color="success">Add to cart</Button>
                </div>
            </Col>
            <Col md="3" sm="6" xs="6">
                <div className="product-div">
                    <img src={TomatoesImg} />
                    <p>Tomatoes</p>
                    <p className="small">N125/kg</p>
                    <Button onClick={props.toggleAddToCart} color="success">Add to cart</Button>
                </div>
            </Col>
            <Col md="3" sm="6" xs="6">
                <div className="product-div">
                    <img src={TomatoesImg} />
                    <p>Tomatoes</p>
                    <p className="small">N125/kg</p>
                    <Button onClick={props.toggleAddToCart} color="success">Add to cart</Button>
                </div>
            </Col>
            <Col md="3" sm="6" xs="6">
                <div className="product-div">
                    <img src={TomatoesImg} />
                    <p>Tomatoes</p>
                    <p className="small">N125/kg</p>
                    <Button onClick={props.toggleAddToCart} color="success">Add to cart</Button>
                </div>
            </Col>
        </Row>
    )
}
