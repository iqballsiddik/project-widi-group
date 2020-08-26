import React, { useState, useEffect } from 'react';
import { Col, FormGroup, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';

export default function ModalUserEdit(props) {
    const { modal, toggle, data } = props;
    console.log(data.email)

    const [username, setUsername] = useState(data.username)
    const [email, setEmail] = useState(data.email)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [typeRole, setTypeRole] = useState(data.role)

    useEffect(() => {
        setEmail(data.email)
        setUsername(data.nickname)
        setTypeRole(data.role)
    }, [data])

    const onSubmit = () => {
        alert("h")
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
                                <Input type="text" name="email" id="email" value={email} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col >
                                <Input type="select" name="select" id="exampleSelect" value={typeRole}>
                                    <option value={''}>Pilih Role</option>
                                    <option value={"Admin"}>Admin</option>
                                    <option value={"Users"}>User</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col >
                                <Input type="text" name="username" id="username" placeholder="Password" />
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
