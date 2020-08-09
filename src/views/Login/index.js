import React, { useState } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './style.css';
import {
    Link
} from "react-router-dom";


export default function Login() {
    const [username, setUsername] = useState(false)
    const [password, setPassword] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState('')


    const changeUsername = (e) => setUsername(e.target.value)
    const changePassword = (e) => setPassword(e.target.value)

    const handleFormSubmit = async () => {
        console.log(username)
        let formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        if (!username || !password) { setError('Kolom Isian Tidak Lengkap') }

        console.log(formData);

    }


    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
                <div className="wrap-login">
                    <div className="d-flex justify-content-center mb-3">
                        <h1>Sigin</h1>
                    </div>
                    <Form>
                        <FormGroup row>
                            <Col sm={10}>
                                <Input className="input" type="email" name="email" id="exampleEmail" placeholder="Email.." onChange={changeUsername} />
                                <div className="ml-5">
                                    <p style={{ color: "red" }}>{error}</p>
                                </div>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={10}>
                                <Input className="input" type="password" name="password" id="examplePassword" placeholder="Password" onChange={changePassword} />
                                <div className="ml-5">
                                    <p style={{ color: "red" }}>{error}</p>
                                </div>
                            </Col>
                        </FormGroup>
                        <Button className="btn-login" onClick={handleFormSubmit}>
                            {isLoading ? <div>Loading....</div> : <span>Login</span>}
                        </Button>
                        <div className="d-flex justify-content-center mt-3">
                            <Link to="/register" className="btn-register">Register</Link>
                        </div>
                        {/* <span className="forgot-pass"> forgot password !</span> */}
                    </Form>
                </div>
            </div>
        </>
    )
}
