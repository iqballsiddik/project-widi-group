import React from 'react';
import { Table } from 'reactstrap';

export default function TableOrder() {
    return (
        <div className="mt-3">
            <h1>List Users</h1>
            <hr />
            <Table responsive dark>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Kategory Barang</th>
                        <th>Jenis Barang</th>
                        <th>Nama Barang</th>
                        <th>Jumlah Barang</th>
                        <th>Harga Barang</th>
                        <th>Detail Barang</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
