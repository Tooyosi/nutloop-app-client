import React from 'react'
import { Row, Col } from 'reactstrap'
import {withRouter} from "react-router-dom"
import ProductCategoryImg from '../../../assets/images/svg/icons/ic_product_category.svg'
function Categories(props) {

    let handleClick = ()=>{
        props.history.push('/products/jjj')
    }
    return (
        <Row>
            <Col md="6" className="mt-2" onClick={handleClick}>
                <div className="bg-yellow rounded p-3">
                    <Row>
                        <Col sm="6" xs="6">
                        <h4 className="text-white font-weight-bold">Fresh Fruits</h4>
                        <p className="small text-white">Fresh fruits are one of the most important parts of a healthy diet.</p>
                        </Col>
                        <Col sm="6" xs="6" className="text-right">
                            <img src={ProductCategoryImg} width="100" />
                        </Col>
                    </Row>
                </div>
                <div className="col-6"></div>
            </Col>
            <Col md="6" className="mt-2" onClick={handleClick}>
                <div className="bg-success rounded p-3">
                    <Row>
                        <Col sm="6" xs="6">
                        <h4 className="text-white font-weight-bold">Vegetables</h4>
                        <p className="small text-white">Vegetables are one of the most important parts of a healthy diet.</p>
                        </Col>
                        <Col sm="6" xs="6" className="text-right">
                            <img src={ProductCategoryImg} width="100" />
                        </Col>
                    </Row>
                </div>
                <div className="col-6"></div>
            </Col>
            <Col md="6" className="mt-2" onClick={handleClick}>
                <div className="bg-yellow rounded p-3">
                    <Row>
                        <Col sm="6" xs="6">
                        <h4 className="text-white font-weight-bold">Meat and Poultry</h4>
                        <p className="small text-white">Vegetables are one of the most important parts of a healthy diet..</p>
                        </Col>
                        <Col sm="6" xs="6" className="text-right">
                            <img src={ProductCategoryImg} width="100" />
                        </Col>
                    </Row>
                </div>
                <div className="col-6"></div>
            </Col>
            <Col md="6" className="mt-2" onClick={handleClick}>
                <div className="bg-success rounded p-3">
                    <Row>
                        <Col sm="6" xs="6">
                        <h4 className="text-white font-weight-bold">Cooking Produce</h4>
                        <p className="small text-white">Day to day cooking produce to maintian healthy diet.</p>
                        </Col>
                        <Col sm="6" xs="6" className="text-right">
                            <img src={ProductCategoryImg} width="100" />
                        </Col>
                    </Row>
                </div>
                <div className="col-6"></div>
            </Col>
        </Row>
    )
}
export default withRouter(Categories)