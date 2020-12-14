import React from 'react'
import { Row, Col } from 'reactstrap'
import SigninForm from './SigninForm'
import Logo from '../../../components/common/Logo'

export default function Signin() {
    return (
        <Row className="vh-100">
            <Col lg="4" md="6" className="m-auto">
                <div className="card py-5 px-3">
                    <Row>
                        <Col sm="12" className="mb-5">
                            <Logo style={{maxWidth: "160px"}}/>
                        </Col>
                        <Col sm="12">
                            <SigninForm />
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    )
}
