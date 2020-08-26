import React, { useEffect, useState } from 'react';
import { Table, Button } from 'reactstrap';
import axios from 'axios';
import ModalUserEdit from '../../Modal/ModalUser';
import API from '../../../services';

export default function TableUsers() {
    const [data, setData] = useState([]);
    const [modal, setModal] = useState(false);
    const [dataRow, setDataRow] = useState([]);
    let token = window.localStorage.getItem('token')

    const getDataUser = async () => {
        // from API Global services
        API.getUsersData().then(res => {
            setData(res.data)
        })
    }

    const config = {
        header: { Authorization: `Bearer ${token}` }
    }

    const handleDelete = item => async () => {
        let id = item.id;
        await axios.delete(`http://ec2-13-212-53-107.ap-southeast-1.compute.amazonaws.com:8080/users/${id}`, config)
            .then(res => {
                console.log(res)
            })
    }

    const toggle = (value) => {
        setModal(!modal)
    };

    useEffect(() => {
        getDataUser()
    }, [])
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
                        data.map((value, i) => {
                            return (
                                <tr key={i}>
                                    <td>{value.id}</td>
                                    <td>{value.nickname}</td>
                                    <td>{value.role}</td>
                                    <td>{value.email}</td>
                                    <td><Button color="info" onClick={() => {
                                        toggle()
                                        setDataRow(value)
                                    }}>Edit</Button></td>
                                    <td><Button color="danger" onClick={handleDelete(value)} >Hapus</Button></td>
                                </tr>
                            );
                        })
                    }
                    <ModalUserEdit modal={modal} toggle={toggle} data={dataRow} />
                </tbody>
            </Table>
        </div>
    )
}
