import React, { useState } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, FormFeedback, Alert } from 'reactstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import API from '../../../services';
import axios from 'axios';

export default function FormOrder() {
    const [jenisBarang, setJenisBarang] = useState('')
    const [namaBarang, setNamaBarang] = useState('')
    const [jumlahBarang, setJumlahBarang] = useState('')
    const [hargaBarang, setHargaBarang] = useState('')
    const [category, setCategory] = useState('')
    const [uploadBarang, setUploadBarang] = useState('')
    const [errorJenisBarang, setErrorJenisBarang] = useState('')
    const [errorNamaBarang, setErrorNamaBarang] = useState('')
    const [errorJumlahBarang, setErrorJumlahBarang] = useState('')
    const [errorHargaBarang, setErrorHargaBarang] = useState('')
    const [errorCategory, setErrorCategory] = useState('')
    const [errorUploadBarang, setErrorUploadBarang] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [visible, setVisible] = useState(true);


    const token = window.localStorage.getItem('token')
    const id = window.localStorage.getItem('id')
    const user_id = parseInt(id)

    const handleFormSubmit = async () => {
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

        var data = JSON.stringify(objData);
        const tokenData = "Bearer " + token
        var config = {
            headers: { "Authorization": tokenData }
        }
        API.postOrder(data, config).then(res => {
            if (res.status !== 201) {
                console.log('sampe')
                return setError('Data gagal disimpan')
            }

            if (res.status == 201) {
                console.log(res)
                setSuccess('Data Berhasil Disimpan')
                setJenisBarang('')
                setNamaBarang('')
                setCategory('')
                setJumlahBarang('')
                setHargaBarang('')
            }
        }).catch(err => {
            console.log(err)
        })

        // axios.post(' https://widi-group-backend.herokuapp.com/orders', data, config).then(res => {
        //     console.log("==>", res)
        // }).catch(err => {
        //     console.log(err)
        // })

    }

    const onDismiss = () => setVisible(false);

    return (
        <div>
            <Form>
                {
                    success == '' ? '' :
                        <Alert color="success" isOpen={visible} toggle={onDismiss}>
                            {success}
                        </Alert>
                }
                {
                    error == '' ? '' :
                        <Alert color="danger" isOpen={visible} toggle={onDismiss}>
                            {error}
                        </Alert>
                }
                <FormGroup row>
                    <Label for="kategoryBarang" sm={2}>Kategory Barang</Label>
                    <Col sm={10}>
                        <Input type="text" name="category" id="category" onChange={(e) => setCategory(e.target.value)} />
                        <div className="ml-1">
                            <p style={{ color: "red" }}>{errorCategory}</p>
                        </div>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="jenisBarang" sm={2}>Jenis Barang</Label>
                    <Col sm={10}>
                        <Input type="text" name="jenisBarang" id="jenisBarang" onChange={(e) => setJenisBarang(e.target.value)} />
                        <div className="ml-1">
                            <p style={{ color: "red" }}>{errorJenisBarang}</p>
                        </div>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="namaBarang" sm={2}>Nama Barang</Label>
                    <Col sm={10}>
                        <Input type="text" name="namaBarang" id="namaBarang" onChange={(e) => setNamaBarang(e.target.value)} />
                        <div className="ml-1">
                            <p style={{ color: "red" }}>{errorNamaBarang}</p>
                        </div>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="jumlahBarang" sm={2}>Jumlah Barang</Label>
                    <Col sm={10}>
                        <Input type="number" pattern="[0-9]*" name="jumlahBarang" id="jumlahBarang" onChange={(e) => setJumlahBarang(e.target.value)} />
                        <div className="ml-1">
                            <p style={{ color: "red" }}>{errorJumlahBarang}</p>
                        </div>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="hargaBarang" sm={2}>Harga Barang</Label>
                    <Col sm={10}>
                        <Input type="number" name="hargaBarang" id="hargaBarang" onChange={(e) => setHargaBarang(e.target.value)} />
                        <div className="ml-1">
                            <p style={{ color: "red" }}>{errorHargaBarang}</p>
                        </div>
                    </Col>
                </FormGroup>
                <FormGroup row>
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
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ offset: 2 }}>
                        <Button color="primary" onClick={handleFormSubmit}>Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    )
}
