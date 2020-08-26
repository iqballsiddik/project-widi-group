import React, { useState } from 'react';
import { Table, Button } from 'reactstrap';
import ModalEditForm from '../../Modal/ModalEditForm';
import API from '../../../services';
import ModalDeleteOrders from '../../Modal/ModalDelete';

// Table Order user
// 
// user bisa melihat apa saja yang user order
export default function TableOrderUsers() {
    const [modal, setModal] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const toggle = () => setModal(!modal);
    const toggleDelete = () => setModalDelete(!modalDelete);
    const [data, setData] = useState([]);
    const [dataNull, setDataNull] = useState('');
    const [dataUpdateOrder, setDataUpdateOrder] = useState('');
    const [dataDelete, setDataDelete] = useState('');

    API.getOrders().then(res => {
        if (res.status == 400) {
            setDataNull('Data tidak ada')
        }
        if (res.status == 200) {
            setData(res.data);
        }
    })

    const handleDelete = () => {

    }

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Jenis Barang</th>
                        <th>Nama Barang</th>
                        <th>Jumlah Barang</th>
                        <th>Harga Barang</th>
                        <th>Status</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((val, i) => {
                            return (
                                <tr key={val.id}>
                                    <td>{i + 1}</td>
                                    <td>{val.type}</td>
                                    <td>{val.name}</td>
                                    <td>{val.total}</td>
                                    <td>{val.price}</td>
                                    <td>Sudah Dibayar</td>
                                    <td><Button color="primary" onClick={() => {
                                        toggle()
                                        setDataUpdateOrder(val)
                                    }}>Edit</Button>{' '}</td>
                                    <td><Button color="danger" onClick={() => {
                                        toggleDelete()
                                        setDataDelete(val)
                                    }}>Delete</Button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <ModalEditForm modal={modal} toggle={toggle} data={dataUpdateOrder} />
            <ModalDeleteOrders modal={modalDelete} toggle={toggleDelete} data={dataDelete} />
        </div >
    )
}
