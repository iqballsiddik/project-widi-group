import React, { useState } from 'react';
import { Col, Button, Form, FormGroup, Alert, Input, Row } from 'reactstrap';
import './style.css';
import {
    Link
} from "react-router-dom";
import axios from 'axios';
import { useHistory } from 'react-router';
import API from '../../services';
import Assets from '../../assets/img/users.png'

export default function Login() {
    const history = useHistory();
    const [username, setUsername] = useState(false)
    const [password, setPassword] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [errorLogin, setErrorLogin] = useState('')
    const [visible, setVisible] = useState(true);

    const onDismiss = () => setVisible(false);

    const changeUsername = (e) => setUsername(e.target.value)
    const changePassword = (e) => setPassword(e.target.value)

    const handleFormSubmit = async () => {
        var obj = { email: username, password: password }
        var data = JSON.stringify(obj);
        var objUsers = { email: username }
        var dataEmail = JSON.stringify(objUsers)

        const emailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@“]+(\.[^<>()\[\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

        if (!username || !password) { return setError('Kolom Isian Tidak Lengkap') }

        if (!emailRegex.test(username)) {
            return setErrorLogin('Input bukan Email')
        }

        axios.post(`https://widi-group-backend.herokuapp.com/login`, data)
            .then(function (response) {
                if (response.status !== 200) { history.push('/') }
                return response
            }).then(function (res) {
                if (res.status === 200) {
                    window.localStorage.setItem('token', res.data)
                    axios.post(`https://widi-group-backend.herokuapp.com/users/email`, dataEmail)
                        .then(result => {
                            return result;
                        })
                        .then(function (res) {
                            window.localStorage.setItem('role', res.data.role)
                            window.localStorage.setItem('id', res.data.id)
                            if (res.data.role === 'Admin') {
                                history.push(`/admin`)
                            } else {
                                history.push(`/users`)
                            }
                        })
                }
            }).catch(function (error) {
                return setErrorLogin("Email atau Password salah")
            })
    }

    return (
        <>
            <Row>
                <Col className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                    <center>
                        <img src={Assets} className="img-login" />
                    </center>
                </Col>
                <Col className="d-flex justify-content-center align-items-center" style={{ height: "100vh", background: '#323757' }}>
                    <div className="wrap">
                        <div className="d-flex justify-content-center mb-3 sign">
                            Login
                        </div>
                        <div>
                            <Form>
                                {
                                    errorLogin == '' ? <div></div> :
                                        <Alert color="dark" isOpen={visible} toggle={onDismiss}>
                                            {errorLogin}
                                        </Alert>
                                }
                                <FormGroup>
                                    <Input className="input" type="email" name="email" id="exampleEmail" placeholder="Email.." onChange={changeUsername} style={{ margin: "0" }} />
                                    <div className="">
                                        <p style={{ color: "red" }}>{error}</p>
                                    </div>
                                </FormGroup>
                                <FormGroup >
                                    <Input className="input" type="password" name="password" id="examplePassword" placeholder="Password" onChange={changePassword} style={{ margin: "0" }} />
                                    <div className="">
                                        <p style={{ color: "red" }}>{error}</p>
                                    </div>
                                </FormGroup>
                                <Button className="btn-login" onClick={handleFormSubmit}>
                                    {isLoading ? <div>Loading....</div> : <span>Login</span>}
                                </Button>
                                <div className="d-flex justify-content-center mt-3">
                                    <Link to="/register" className="btn-register">Sign Up</Link>
                                </div>
                            </Form>
                        </div>
                    </div>
                </Col >
            </Row >
        </>
    )
}
