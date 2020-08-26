import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

export default function ModalEditForm(props) {

    const { modal, toggle } = props;
    const [jenisBarang, setJenisBarang] = useState('')
    const [namaBarang, setNamaBarang] = useState('')
    const [jumlahBarang, setJumlahBarang] = useState('')
    const [hargaBarang, setHargaBarang] = useState('')
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle} >Modal title</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Input type="text" name="jenisBarang" id="jenisBarang" onChange={(e) => setJenisBarang(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="namaBarang" id="namaBarang" onChange={(e) => setNamaBarang(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="jumlahBarang" id="jumlahBarang" onChange={(e) => setJumlahBarang(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="number" name="hargaBarang" id="hargaBarang" onChange={(e) => setHargaBarang(e.target.value)} />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Update</Button>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
