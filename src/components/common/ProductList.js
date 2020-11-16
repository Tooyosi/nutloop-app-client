import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import TomatoesImg from "../../assets/images/icons/ic_tomatoes.png"
import { withRouter } from "react-router-dom"

function ProductList(props) {

    let onProductClick = () => {
        props.history.push('/products/jjj/view/iiiw')
    }
    return (
        <Row>
            <Col md="3" sm="6" xs="6">
                <div className="product-div cursor-pointer" >
                    <div onClick={onProductClick}>
                        <img src={TomatoesImg} />
                        <p>Tomatoes</p>
                        <p className="small">N125/kg</p>
                    </div>
                    <Button onClick={() => props.toggleAddToCart({ name: 'tomatoes', image: TomatoesImg, price: 125 })} color="success">Add to cart</Button>
                </div>
            </Col>
            <Col md="3" sm="6" xs="6">
                <div className="product-div cursor-pointer" >
                    <div onClick={onProductClick}>
                        <img src={TomatoesImg} />
                        <p>Tomatoes</p>
                        <p className="small">N125/kg</p>
                    </div>
                        <Button onClick={() => props.toggleAddToCart({ name: 'tomatoes', image: TomatoesImg, price: 125 })} color="success">Add to cart</Button>
                </div>
            </Col>
            <Col md="3" sm="6" xs="6">
                <div className="product-div cursor-pointer" >
                    <div onClick={onProductClick}>
                        <img src={TomatoesImg} />
                        <p>Tomatoes</p>
                        <p className="small">N125/kg</p>
                    </div>
                        <Button onClick={() => props.toggleAddToCart({ name: 'tomatoes', image: TomatoesImg, price: 125 })} color="success">Add to cart</Button>
                </div>
            </Col>
            <Col md="3" sm="6" xs="6">
                <div className="product-div cursor-pointer" >
                    <div onClick={onProductClick}>
                        <img src={TomatoesImg} />
                        <p>Tomatoes</p>
                        <p className="small">N125/kg</p>
                    </div>
                        <Button onClick={() => props.toggleAddToCart({ name: 'tomatoes', image: TomatoesImg, price: 125 })} color="success">Add to cart</Button>
                </div>
            </Col>
            <Col md="3" sm="6" xs="6">
                <div className="product-div cursor-pointer" >
                    <div onClick={onProductClick}>
                        <img src={TomatoesImg} />
                        <p>Tomatoes</p>
                        <p className="small">N125/kg</p>
                    </div>
                        <Button onClick={() => props.toggleAddToCart({ name: 'tomatoes', image: TomatoesImg, price: 125 })} color="success">Add to cart</Button>
                </div>
            </Col>
            <Col md="3" sm="6" xs="6">
                <div className="product-div cursor-pointer" >
                    <div onClick={onProductClick}>
                        <img src={TomatoesImg} />
                        <p>Tomatoes</p>
                        <p className="small">N125/kg</p>
                    </div>
                        <Button onClick={() => props.toggleAddToCart({ name: 'tomatoes', image: TomatoesImg, price: 125 })} color="success">Add to cart</Button>
                </div>
            </Col>
            <Col md="3" sm="6" xs="6">
                <div className="product-div cursor-pointer" >
                    <div onClick={onProductClick}>
                        <img src={TomatoesImg} />
                        <p>Tomatoes</p>
                        <p className="small">N125/kg</p>
                    </div>
                        <Button onClick={() => props.toggleAddToCart({ name: 'tomatoes', image: TomatoesImg, price: 125 })} color="success">Add to cart</Button>
                </div>
            </Col>
            <Col md="3" sm="6" xs="6">
                <div className="product-div cursor-pointer" >
                    <div onClick={onProductClick}>
                        <img src={TomatoesImg} />
                        <p>Tomatoes</p>
                        <p className="small">N125/kg</p>
                    </div>
                        <Button onClick={() => props.toggleAddToCart({ name: 'tomatoes', image: TomatoesImg, price: 125 })} color="success">Add to cart</Button>
                </div>
            </Col>
        </Row>
    )
}
export default withRouter(ProductList)