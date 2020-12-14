import React from 'react'
import { Input, Form, Button } from 'reactstrap'
import {Link} from "react-router-dom"
import GoogleIcon from "../../../assets/images/svg/icons/google_icon.svg"
import FacebookIcon from "../../../assets/images/svg/icons/facebook_icon.svg"
export default function SigninForm() {
    return (
        <Form>
            <div className="small text-success floating-label">
                <Input type="email" placeholder="Email" />

                <label >
                    Email
            </label>
            </div>
            <div className="small text-success floating-label">
                <Input type="password" placeholder="*******" />

                <label >
                    Password
            </label>
            </div>
            <div className="small text-success">
                <p className="float-left">
                <Link to="/signup">Sign Up</Link>
                </p>
<p className="float-right">
                <Link to="/forgot">Forgot Password?</Link>
                </p>
            </div>
            <div>
                <Button type="submit" color="success" className="btn-block text-white mt-3">Sign in</Button>
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
                <Button type="submit" color="primary" className="btn-block text-white mt-2">Sign in with Facebook
                
                <img className="float-right" src={FacebookIcon} />
                </Button>
            </div>
            <div>
                <Button type="submit" color="success" outline className="btn-block  mt-2">Sign in with Google
                    <img className="float-right" src={GoogleIcon} />
                </Button>
            </div>  
        </Form>
    )
}
