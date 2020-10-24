import React, { useState } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import axios from 'axios';
import API from '../../../services';
import { set } from 'd3';


export default function FormAddUser() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [typeRole, setTypeRole] = useState('')
    const [errorUsername, setErrorUsername] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('')
    const [errorTypeRole, setErrorTypeRole] = useState('')
    const [alertField, setAlertField] = useState('')
    const [alertSuccess, setAlertSuccess] = useState('')
    const [visible, setVisible] = useState(true);

    const onDismiss = () => setVisible(false);

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
            setErrorTypeRole('Pilih Type Role')
        }

        if (password !== confirmPassword) {
            setErrorConfirmPassword('Password anda tidak sesuai')
        }

        var objData = {
            email: email,
            password: password,
            nickname: username,
            role: typeRole
        }

        var data = JSON.stringify(objData);

        API.postRegister(data).then(res => {
            if (res.status !== 201) { setAlertField("Add User Gagal") }
            if (res.status === 201) {
                setAlertSuccess('Data Berhasil Ditambah')
                setUsername('')
                setEmail('')
                setPassword('')
                setTypeRole('')
                setConfirmPassword('')
            }
        }).catch(err => {
            console.log("error bro")
        })
    }
    return (
        <div>
            <Form>
                {
                    alertField == '' ? ''
                        : <Alert color="info" isOpen={visible} toggle={onDismiss}>
                            {alertField}
                        </Alert>
                }
                {
                    alertSuccess == '' ? '' :
                        <Alert color="info" isOpen={visible} toggle={onDismiss}>
                            {alertSuccess}
                        </Alert>
                }
                <FormGroup row>
                    <Label for="username" sm={2}>Username</Label>
                    <Col sm={10}>
                        <Input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <div className="ml-1">
                            <p style={{ color: "red" }}>{errorUsername}</p>
                        </div>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="email" sm={2}>Email</Label>
                    <Col sm={10}>
                        <Input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <div className="ml-1">
                            <p style={{ color: "red" }}>{errorEmail}</p>
                        </div>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleSelect" sm={2}>Pilih Role</Label>
                    <Col sm={10}>
                        <Input type="select" onChange={(e) => setTypeRole(e.target.value)} name="select" value={typeRole} id="exampleSelect">
                            <option value={''}>Pilih Role</option>
                            <option value={"Admin"}>Admin</option>
                            <option value={"Users"}>User</option>
                        </Input>
                        <div className="ml-1">
                            <p style={{ color: "red" }}>{errorTypeRole}</p>
                        </div>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="password" sm={2}>Password</Label>
                    <Col sm={10}>
                        <Input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <div className="ml-1">
                            <p style={{ color: "red" }}>{errorPassword}</p>
                        </div>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="confirmPassword" sm={2}>Confirm Password</Label>
                    <Col sm={10}>
                        <Input type="password" name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        <div className="ml-1">
                            <p style={{ color: "red" }}>{errorConfirmPassword}</p>
                        </div>
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ offset: 2 }}>
                        <Button color="primary" onClick={handleFormSubmit}>
                            Submit
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </div >
    )
}
