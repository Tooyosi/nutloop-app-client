import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import { Link } from "react-router-dom"
import WhiteLogo from '../common/WhiteLogo'
import Icofont from 'react-icofont';

export default function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col md="3">
                        {/* <h5>LET US HELP YOU</h5> */}
                        <WhiteLogo style={{ maxWidth: "160px" }} />
                        {/* <p><Link to="/products">Products</Link></p>
                        <p><Link to="/">Home</Link></p> */}
                    </Col>
                    <Col md="3">
                        <h5>About Nutloop</h5>
                        <p><Link to="/products">About Us</Link></p>
                        <p><Link to="/">Nutloop Careers</Link></p>
                        <p><Link to="/">Terms and Conditions</Link></p>
                        <p><Link to="/">Nutloop Policy</Link></p>
                    </Col>
                    <Col md="3">
                        <h5>Nutloop Agent</h5>
                        <p><Link to="/products">Sales Ordering Partner</Link></p>
                        <p><Link to="/">Field Partner</Link></p>
                    </Col>
                    <Col md="3">
                        <h5>LET US HELP YOU</h5>
                        <p><Link to="/products">Help center</Link></p>
                        <p><Link to="/">How to shop on Nutloop</Link></p>
                        <p><Link to="/">Delivery Options and Timeline</Link></p>
                        <p><Link to="/">Return Policy</Link></p>
                        <p><Link to="/">Party Purchase</Link></p>
                    </Col>
                </Row>
            </Container>
            <div className="social-icons">
                <Container >
                    <Row>
                        <Col md="3" sm="6" className="text-center m-auto">
                            <h6>Follow Us</h6>
                            <a className="decoration-none mr-2"><Icofont icon="facebook" size="2" /></a>
                            <a className="decoration-none mr-2"><Icofont icon="twitter" size="2" /></a>
                            <a className="decoration-none mr-2"><Icofont icon="instagram" size="2" /></a>

                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    )
}
