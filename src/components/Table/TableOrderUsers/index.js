import React, { useState } from 'react';
import { Table, Button } from 'reactstrap';
import ModalEditForm from '../../Modal/ModalEditForm';

// Table Order user
// 
// user bisa melihat apa saja yang user order
export default function TableOrderUsers() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
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
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td><Button color="primary" onClick={toggle}>Edit</Button>{' '}</td>
                        <td><Button color="danger">primary</Button>{' '}</td>
                    </tr>
                </tbody>
            </Table>
            <ModalEditForm modal={modal} toggle={toggle} />
        </div >
    )
}
