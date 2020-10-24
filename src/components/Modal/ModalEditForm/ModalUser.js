import React, { useState, useEffect } from 'react';
import { Col, FormGroup, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';
import API from '../../../services';

export default function ModalUserEdit(props) {
    const { modal, toggle, data, handleAlertUpdate } = props;

    const [username, setUsername] = useState(data.username)
    const [email, setEmail] = useState(data.email)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [typeRole, setTypeRole] = useState(data.role)

    let token = window.localStorage.getItem('token')
    let id = window.localStorage.getItem('id')

    useEffect(() => {
        setEmail(data.email)
        setUsername(data.nickname)
        setTypeRole(data.role)
        setPassword(data.password)
    }, [data])

    const onSubmit = () => {
        // PR password belum dinamic
        var objData = {
            email: email,
            nickname: username,
            password: "asdqwe123",
            role: typeRole
        }
        var data = JSON.stringify(objData);
        const tokenData = "Bearer " + token
        var config = {
            headers: { "Authorization": tokenData }
        }

        console.log({
            email,
            password,
            typeRole,
            username,
        })

        // PR belum beres API dan dicoba di postman tidak jalan
        API.updateUsers(id, data, config).then(res => {
            console.log(res)
        })
    }

    return (
        <>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Update Users</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup row>
                            <Col >
                                <Input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col >
                                <Input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col >
                                <Input type="select" name="select" id="exampleSelect" value={typeRole} onChange={(e) => setTypeRole(e.target.value)}>
                                    <option value={''}>Pilih Role</option>
                                    <option value={"Admin"}>Admin</option>
                                    <option value={"Users"}>User</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col >
                                <Input type="password" name="username" value={password} id="username" onChange={(e) => setPassword(e.target.value)} />
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onSubmit}>Update</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}
