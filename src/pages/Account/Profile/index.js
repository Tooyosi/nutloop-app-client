import React from 'react'
import ProfileForm from './ProfileForm'
import { Row, Col } from 'reactstrap'

export default function Profile() {
    return (
        <Row>
            <Col md="6">
                <div className="card p-5">
                    <ProfileForm />
                </div>
            </Col>
        </Row>
    )
}
