import React, { useState } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';

export default function FormOrder() {
    const [jenisBarang, setJenisBarang] = useState('')
    const [namaBarang, setNamaBarang] = useState('')
    const [jumlahBarang, setJumlahBarang] = useState('')
    const [hargaBarang, setHargaBarang] = useState('')
    const [uploadBarang, setUploadBarang] = useState('')
    const [errorJenisBarang, setErrorJenisBarang] = useState('')
    const [errorNamaBarang, setErrorNamaBarang] = useState('')
    const [errorJumlahBarang, setErrorJumlahBarang] = useState('')
    const [errorHargaBarang, setErrorHargaBarang] = useState('')
    const [errorUploadBarang, setErrorUploadBarang] = useState('')

    const handleFormSubmit = async () => {
        let formData = new FormData()
        formData.append('jenisBarang', jenisBarang);
        formData.append('namaBarang', namaBarang);
        formData.append('jumlahBarang', jumlahBarang);
        formData.append('hargaBarang', hargaBarang);
        formData.append('uploadBarang', uploadBarang);

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
        if (uploadBarang === '') {
            setUploadBarang('Upload Foto Barang harus diisi')
        }
        if (uploadBarang === '') {
            setUploadBarang('Upload Foto Barang harus diisi')
        }
        console.log(uploadBarang);
    }
    return (
        <div>
            <Form>
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
                        <Input type="text" pattern="[0-9]*" name="jumlahBarang" id="jumlahBarang" onChange={(e) => setJumlahBarang(e.target.value)} />
                        <div className="ml-1">
                            <p style={{ color: "red" }}>{errorJumlahBarang}</p>
                        </div>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="hargaBarang" sm={2}>Harga Barang</Label>
                    <Col sm={10}>
                        <Input type="text" name="hargaBarang" id="hargaBarang" onChange={(e) => setHargaBarang(e.target.value)} />
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
