import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './style.css'

export default function Login() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
                <div className="wrap-login">
                    <div className="d-flex justify-content-center">
                        <h1>Sigin</h1>
                    </div>
                    <Form>
                        <FormGroup row>
                            {/* <Label className="lbl-email" for="exampleEmail" sm={2}>Email</Label> */}
                            <Col sm={10}>
                            <Input className="input" type="email" name="email" id="exampleEmail" placeholder="Email.." />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            {/* <Label className="lbl-pass" for="examplePassword" sm={2}>Password</Label> */}
                            <Col sm={10}>
                            <Input className="input" type="password" name="password" id="examplePassword" placeholder="Password.." />
                            </Col>
                        </FormGroup>
                        <Button className="btn-login" onClick={'/'}>
                            <span>Submit</span>
                        </Button>
                        {/* <span className="forgot-pass"> forgot password !</span> */}
                    </Form>
                </div>
            </div>
        </>
    )
}
