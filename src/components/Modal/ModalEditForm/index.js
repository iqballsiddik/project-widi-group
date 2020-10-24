import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Col, FormText } from 'reactstrap';
import API from '../../../services';

export default function ModalEditForm(props) {

    const { modal, toggle, data, handleAlertUpdate } = props;
    const [jenisBarang, setJenisBarang] = useState('')
    const [namaBarang, setNamaBarang] = useState('')
    const [jumlahBarang, setJumlahBarang] = useState('')
    const [hargaBarang, setHargaBarang] = useState('')
    const [category, setCategory] = useState('')
    const [uploadBarang, setUploadBarang] = useState('')
    // const [idOrder, setIdOrder] = useState('')
    const [errorJenisBarang, setErrorJenisBarang] = useState('')
    const [errorNamaBarang, setErrorNamaBarang] = useState('')
    const [errorJumlahBarang, setErrorJumlahBarang] = useState('')
    const [errorHargaBarang, setErrorHargaBarang] = useState('')
    const [errorCategory, setErrorCategory] = useState('')
    const [errorUploadBarang, setErrorUploadBarang] = useState('')

    useEffect(() => {
        // setIdOrder(data.id)
        setJenisBarang(data.type)
        setNamaBarang(data.name)
        setJumlahBarang(data.total)
        setHargaBarang(data.price)
        setCategory(data.category)
    }, [data])

    const token = window.localStorage.getItem('token')
    const userId = window.localStorage.getItem('id')

    const user_id = parseInt(userId);
    const idOrder = parseInt(data.id);

    const toggleUpdate = () => {
        if (jenisBarang === '') {
            setErrorJenisBarang('Jenis Barang harus diisi')
        }
        if (namaBarang === '') {
            setErrorNamaBarang('Nama Barang harus diisi')
        }
        if (jumlahBarang === '') {
            setErrorJumlahBarang('Jumlah Barang harus diisi')
        }
        if (hargaBarang === '') {
            setErrorHargaBarang('Jumlah Barang harus diisi')
        }
        if (category === '') {
            setErrorCategory('Category Foto Barang harus diisi')
        }
        if (uploadBarang === '') {
            setUploadBarang('Upload Foto Barang harus diisi')
        }

        var objData = {
            user_id,
            type: jenisBarang,
            name: namaBarang,
            category: category,
            total: jumlahBarang,
            price: hargaBarang,
            status: "prosses"
        }

        var dataStr = JSON.stringify(objData);
        const tokenData = "Bearer " + token
        var config = {
            headers: { "Authorization": tokenData }
        }

        API.putOrders(dataStr, idOrder, config).then(res => {
            if (res.status == 200) {
                handleAlertUpdate()
            }
        }).then(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle} >Modal title</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="jumlahBarang">Kategory Barang</Label>
                            <Input type="text" value={category} name="category" id="jumlahBarang" onChange={(e) => setCategory(e.target.value)} />
                            <div className="ml-1">
                                <p style={{ color: "red" }}>{errorCategory}</p>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <Label for="jenisBarang">Jenis Barang</Label>
                            <Input type="text" value={jenisBarang} name="jenisBarang" id="jenisBarang" onChange={(e) => setJenisBarang(e.target.value)} />
                            <div className="ml-1">
                                <p style={{ color: "red" }}>{errorJenisBarang}</p>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <Label for="namaBarang">Nama Barang</Label>
                            <Input type="text" value={namaBarang} value={namaBarang} name="namaBarang" id="namaBarang" onChange={(e) => setNamaBarang(e.target.value)} />
                            <div className="ml-1">
                                <p style={{ color: "red" }}>{errorNamaBarang}</p>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <Label for="jumlahBarang">Jumlah Barang</Label>
                            <Input type="number" value={jumlahBarang} name="jumlahBarang" id="jumlahBarang" onChange={(e) => setJumlahBarang(e.target.value)} />
                            <div className="ml-1">
                                <p style={{ color: "red" }}>{errorJumlahBarang}</p>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <Label for="hargaBarang">Harga Barang</Label>
                            <Input type="number" value={hargaBarang} name="hargaBarang" id="hargaBarang" onChange={(e) => setHargaBarang(e.target.value)} />
                            <div className="ml-1">
                                <p style={{ color: "red" }}>{errorHargaBarang}</p>
                            </div>
                        </FormGroup>
                        {/* <FormGroup row>
                            <Label for="uploadBrang" sm={2}>Upload Foto Barang</Label>
                            <Col sm={10}>
                                <Input type="file" name="file" id="uploadBrang" onChange={(e) => setUploadBarang(e.target.value)} />
                                <div className="ml-1">
                                    <p style={{ color: "red" }}>{errorUploadBarang}</p>
                                </div>
                                <FormText color="muted">
                                    Upload Harus png, jpg, jpeg
                                </FormText>
                            </Col>
                        </FormGroup> */}
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggleUpdate}>Update</Button>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
