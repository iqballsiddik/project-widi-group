import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

export default function ModalEditForm(props) {

    const { modal, toggle, data } = props;
    const [jenisBarang, setJenisBarang] = useState('')
    const [namaBarang, setNamaBarang] = useState('')
    const [jumlahBarang, setJumlahBarang] = useState('')
    const [hargaBarang, setHargaBarang] = useState('')
    const [id, setId] = useState('')
    useEffect(() => {
        setId(data.id)
        setJenisBarang(data.type)
        setNamaBarang(data.name)
        setJumlahBarang(data.total)
        setHargaBarang(data.price)
    }, [data])

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle} >Modal title</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="jenisBarang">Jenis Barang</Label>
                            <Input type="text" value={jenisBarang} name="jenisBarang" id="jenisBarang" onChange={(e) => setJenisBarang(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="namaBarang">Nama Barang</Label>
                            <Input type="text" value={namaBarang} value={namaBarang} name="namaBarang" id="namaBarang" onChange={(e) => setNamaBarang(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="jumlahBarang">Jumlah Barang</Label>
                            <Input type="number" value={jumlahBarang} name="jumlahBarang" id="jumlahBarang" onChange={(e) => setJumlahBarang(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="hargaBarang">Harga Barang</Label>
                            <Input type="number" value={hargaBarang} name="hargaBarang" id="hargaBarang" onChange={(e) => setHargaBarang(e.target.value)} />
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
