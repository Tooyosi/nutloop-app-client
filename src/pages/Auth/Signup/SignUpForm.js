import React from 'react'
import { Input, Form, Button, Row, Col } from 'reactstrap'
import { Link } from "react-router-dom"
import GoogleIcon from "../../../assets/images/svg/icons/google_icon.svg"
import FacebookIcon from "../../../assets/images/svg/icons/facebook_icon.svg"
export default function SignUpForm() {
    return (
        <Form>
            <Row>
                <Col md="6">
                    <div className="small text-success floating-label">
                        <Input type="text" placeholder="Firstname" />

                        <label >
                            Firstname
            </label>
                    </div>
                </Col>
                <Col md="6">
                    <div className="small text-success floating-label">
                        <Input type="text" placeholder="Lastname" />

                        <label >
                            Lastname
            </label>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <div className="small text-success floating-label">
                        <Input type="number" placeholder="Phone Number" />

                        <label >
                            Phone Number
            </label>
                    </div>
                </Col>
                <Col md="6">
                    <div className="small text-success floating-label">
                        <Input type="email" placeholder="Email" />

                        <label >
                            Email
            </label>
                    </div>
                </Col>
            </Row>
            <Row>
            <Col md="6">

            <div className="small text-success floating-label">
                <Input type="password" placeholder="*******" />

                <label >
                    Password
            </label>
            </div>
            </Col>
            <Col md="6">

            <div className="small text-success floating-label">
                <Input type="text" placeholder="Referral Code " />

                <label >
                Referral Code 
            </label>
            </div>
            </Col>

            </Row>
            <div className="small text-success text-center">
                <Link to="/login">Have an account? Sign In</Link>
            </div>
            <div>
                <Button type="submit" color="success" className="btn-block text-white mt-3">Sign Up</Button>
            </div>
            <div className="row mt-2">
                <div className="col-5">
                    <hr />
                </div>
                <div className="col-2 text-center">
                    <p className="text-success">OR</p>
                </div>
                <div className="col-5">
                    <hr />
                </div>
            </div>
            <div>
                <Button type="submit" color="primary" className="btn-block text-white mt-2">Connect with Facebook

                <img className="float-right" src={FacebookIcon} />
                </Button>
            </div>
            <div>
                <Button type="submit" color="success" outline className="btn-block  mt-2">Sign up with Google
                    <img className="float-right" src={GoogleIcon} />
                </Button>
                <p className="text-center text-dark small mt-3">By clicking “Sign up”, you agree to our <Link to="/privacy">privacy policy</Link>.</p>
            </div>
        </Form>
    )
}
