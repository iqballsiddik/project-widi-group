import React, { useState } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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



    const handleFormSubmit = async () => {
        let formData = new FormData();
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
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
    }

    return (
        <div>
            <Form>
                <FormGroup row>
                    <Label for="username" sm={2}>Username</Label>
                    <Col sm={10}>
                        <Input type="text" name="username" id="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                        <div className="ml-1">
                            <p style={{ color: "red" }}>{errorUsername}</p>
                        </div>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="email" sm={2}>Email</Label>
                    <Col sm={10}>
                        <Input type="email" name="email" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <div className="ml-1">
                            <p style={{ color: "red" }}>{errorEmail}</p>
                        </div>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleSelect" sm={2}>Select Role</Label>
                    <Col sm={10}>
                        <Input type="select" onChange={(e) => setTypeRole(e.target.value)} name="select" id="exampleSelect">
                            <option>Select Type Role</option>
                            <option>Admin</option>
                            <option>User</option>
                        </Input>
                        <div className="ml-1">
                            <p style={{ color: "red" }}>{errorTypeRole}</p>
                        </div>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="password" sm={2}>Password</Label>
                    <Col sm={10}>
                        <Input type="password" name="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <div className="ml-1">
                            <p style={{ color: "red" }}>{errorPassword}</p>
                        </div>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="confirmPassword" sm={2}>Confirm Password</Label>
                    <Col sm={10}>
                        <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
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
