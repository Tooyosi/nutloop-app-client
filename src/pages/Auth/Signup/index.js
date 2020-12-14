import React from 'react'
import { Row, Col } from 'reactstrap'
import SignUpForm from './SignUpForm'
import Logo from '../../../components/common/Logo'

export default function SignUp() {
    return (
        <Row className="vh-100">
            <Col md="6" className="m-auto">
                <div className="card py-5 px-3">
                    <Row>
                        <Col sm="12" className="mb-4">
                            <Logo style={{maxWidth: "160px"}}/>
                        </Col>
                        <Col sm="12">
                            <SignUpForm />
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    )
}
