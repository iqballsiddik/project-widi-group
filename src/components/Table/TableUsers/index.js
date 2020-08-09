import React from 'react';
import { Table, Button } from 'reactstrap';
import data from '../../../data/listUser.json';

export default function TableUsers() {
    return (
        <div>
            <Table dark responsive>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Username</th>
                        <th>Type Role</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Hapus</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.data.map((value, i) => {
                            return (
                                <tr key={i}>
                                    <td>{value.id}</td>
                                    <td>{value.username}</td>
                                    <td>{value.type}</td>
                                    <td>{value.email}</td>
                                    <td><Button color="info">Edit</Button></td>
                                    <td><Button color="danger">Hapus</Button></td>
                                </tr>
                            );

                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}
