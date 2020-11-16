import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import {Link} from "react-router-dom"

export default function Footer() {
    return (
        <footer>
            <Container>
            <Row>
                <Col md="3">
                    <h5>LET US HELP YOU</h5>
                    <p><Link to="/products">Products</Link></p>
                    <p><Link to="/">Home</Link></p>
                </Col>
                <Col md="3">
                    <h5>LET US HELP YOU</h5>
                    <p><Link to="/products">Products</Link></p>
                    <p><Link to="/">Home</Link></p>
                </Col>
                <Col md="3">
                    <h5>LET US HELP YOU</h5>
                    <p><Link to="/products">Products</Link></p>
                    <p><Link to="/">Home</Link></p>
                </Col>
                <Col md="3">
                    <h5>LET US HELP YOU</h5>
                    <p><Link to="/products">Products</Link></p>
                    <p><Link to="/">Home</Link></p>
                </Col>
            </Row>
            </Container>
        </footer>
    )
}
