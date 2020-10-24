import React, { useState } from 'react';
import { Col, Button, Form, FormGroup, Input } from 'reactstrap';
import axios from 'axios';
import { useHistory } from 'react-router';
import API from '../../services';
import './style.css'

export default function Register() {
    const history = useHistory();
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [typeRole, setTypeRole] = useState('Users');
    const [isLoading, setLoading] = useState(false)
    const [errorUsername, setErrorUsername] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('')
    const [errorRole, setErrorRole] = useState('')


    const changeUsername = (e) => setUsername(e.target.value)
    const changeEmail = (e) => setEmail(e.target.value)
    const changePassword = (e) => setPassword(e.target.value)
    const changeConfirmPass = (e) => setConfirmPassword(e.target.value)

    const handleFormSubmit = async () => {

        if (username === '') {
            setErrorUsername('Username harus diisi')
        }
        if (email === '') {
            setErrorEmail('Email harus diisi')
        }
        if (password === '') {
            setErrorPassword('Password harus diisi')
        }
        if (confirmPassword === '') {
            setErrorConfirmPassword('Confirm Password harus diisi')
        }

        if (typeRole === '') {
            setErrorRole('Anda Belum memilih Role')
        }

        if (password != confirmPassword) {
            setErrorConfirmPassword('Password anda tidak sesuai')
        }

        var objData = {
            email: email,
            password: password,
            nickname: username,
            role: typeRole
        }

        var data = JSON.stringify(objData);

        API.postRegister(data)
            .then(res => {
                if (res.status !== 201) { history.push(`/register`) }

                if (res.status == 201) {
                    history.push(`/login`)
                }
            }).catch(err => {
                console.log("error inputan")
            })
    }
    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh", background: "#323757" }}>
                <div className="wrap-regis">
                    <div className="d-flex justify-content-center mb-3 regis" >
                        <h2>Sign Up</h2>
                    </div>
                    <Form>
                        <FormGroup >
                            <Input className="input" type="text" name="username" id="username" placeholder="Username.." onChange={changeUsername} style={{ margin: "0" }} />
                            <div className="">
                                <p style={{ color: "red" }}>{errorUsername}</p>
                            </div>
                        </FormGroup>
                        <FormGroup >
                            <Input className="input" type="email" name="email" id="exampleEmail" placeholder="Email.." onChange={changeEmail} style={{ margin: "0" }} />
                            <div className="">
                                <p style={{ color: "red" }}>{errorEmail}</p>
                            </div>
                        </FormGroup>
                        {/* <FormGroup >
                            <Input type="select" name="typeRole" id="exampleSelect" onChange={(e) => setTypeRole(e.target.value)}>
                                <option value={''}>Pilih Role</option>
                                <option value={"Admin"}>Admin</option>
                                <option value={"Users"}>Users</option>
                            </Input>
                            <div className="ml-5">
                                <p style={{ color: "red" }}>{errorRole}</p>
                            </div>
                        </FormGroup> */}
                        <FormGroup >
                            <Input className="input" type="password" name="password" id="examplePassword" placeholder="Password" onChange={changePassword} style={{ margin: "0" }} />
                            <div className="">
                                <p style={{ color: "red" }}>{errorPassword}</p>
                            </div>
                        </FormGroup>
                        <FormGroup >
                            <Input className="input" type="password" name="password" id="examplePassword" placeholder="Confirm Password" onChange={changeConfirmPass} style={{ margin: "0" }} />
                            <div className="">
                                <p style={{ color: "red" }}>{errorConfirmPassword}</p>
                            </div>
                        </FormGroup>
                        <Button className="btn-regis" onClick={handleFormSubmit}>
                            {isLoading ? <div>Loading....</div> : <span>Sign Up</span>}
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}
