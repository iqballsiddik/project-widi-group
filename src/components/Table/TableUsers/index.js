import React, { useEffect, useState } from 'react';
import { Table, Button, Row, Spinner, Pagination, PaginationItem, PaginationLink, Alert } from 'reactstrap';
import axios from 'axios';
import ModalUserEdit from '../../Modal/ModalEditForm/ModalUser';
import ModalUsersDelete from '../../Modal/ModalDelete/ModalUsers';
import API from '../../../services';


export default function TableUsers() {
    const [data, setData] = useState([]);
    const [modal, setModal] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [dataRow, setDataRow] = useState([]);
    const [relod, setRelod] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [dataResult, setDataResult] = useState([]);
    const [dataUpdate, setDataUpdate] = useState([]);
    const [dataDelete, setDataDelete] = useState([]);
    const [alertDelete, setAlertDelete] = useState('');
    const [visible, setVisible] = useState(true);

    let token = window.localStorage.getItem('token')

    const getDataUser = async (isSubscribed) => {
        // from API Global services
        API.getUsersData().then(res => {
            setDataResult(res.data)
            setRelod(false)
        })
    }

    // count pagination
    const pageItems = 5;
    const pagesCount = Math.ceil(dataResult.length / pageItems);

    // pagination 
    const handlePageClick = (e, index) => {
        e.preventDefault();
        setCurrentPage(index);
    };

    // untuk slice pagination
    const sendDataResult = () => {
        return dataResult.slice(currentPage * pageItems, currentPage * pageItems + pageItems)
    }

    // alert delete
    const onDismiss = () => setVisible(false);

    // toggle modal edit
    const toggle = () => {
        setModal(!modal)
    };

    // toggle modal delete
    const toggleDelete = () => {
        setModalDelete(!modalDelete)
    };

    // handle update
    const handleUpdate = (value) => {
        setDataUpdate(value)
    }
    // handle delete
    const handleDelete = (value) => {
        setDataDelete(value)
    }

    // handle alert Update
    const handleAlertUpdate = () => {

    }

    // handle alert delete
    const handleAlertDelete = () => {
        setAlertDelete("Delete Berhasil")
        setModalDelete(!modalDelete)
        let isSubscribed = true;
        getDataUser(isSubscribed)
        return () => isSubscribed = false
    }

    useEffect(() => {
        let isSubscribed = true;
        getDataUser(isSubscribed)
        return () => isSubscribed = false
    }, [])

    return (
        <div>
            {
                alertDelete == '' ? '' :
                    <Alert color="danger" isOpen={visible} toggle={onDismiss}>
                        {alertDelete}
                    </Alert>
            }
            <Table dark responsive>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Username</th>
                        <th>Type Role</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {
                    relod ?
                        <tbody>
                            <tr>
                                <td colSpan="8">
                                    <Row className="justify-content-md-center">
                                        <Spinner type="grow" color="primary" />
                                    </Row>
                                </td>
                            </tr>
                        </tbody>
                        :
                        <TableRow data={sendDataResult()} toggle={toggle} toggleDelete={toggleDelete} handleUpdate={handleUpdate} handleDelete={handleDelete} />
                }
            </Table>
            <Pagination>
                <PaginationItem disabled={currentPage <= 0}>
                    <PaginationLink
                        onClick={e => handlePageClick(e, currentPage - 1)}
                        previous
                        href="#"
                    />
                </PaginationItem>
                <PaginationItem disabled>
                    <PaginationLink>
                        {`Page ${currentPage + 1} of ${pagesCount === 0 ? '1' : pagesCount}`}
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem disabled={currentPage >= pagesCount - 1}>
                    <PaginationLink
                        onClick={e => handlePageClick(e, currentPage + 1)}
                        next
                        href="#"
                    />
                </PaginationItem>
            </Pagination>
            <ModalUserEdit modal={modal} toggle={toggle} data={dataUpdate} handleAlertUpdate={handleAlertUpdate} />
            <ModalUsersDelete modal={modalDelete} toggle={toggleDelete} data={dataDelete} handleAlertDelete={handleAlertDelete} />
        </div >
    )
}

const TableRow = ({ data, handleUpdate, toggle, handleDelete, toggleDelete }) => {
    return (
        <tbody>
            {
                data.map((value, i) => {
                    return (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{value.nickname}</td>
                            <td>{value.role}</td>
                            <td>{value.email}</td>
                            <td><Button color="info" onClick={() => {
                                toggle()
                                handleUpdate(value)
                            }}>Edit</Button></td>
                            <td><Button color="danger" onClick={() => {
                                toggleDelete()
                                handleDelete(value)
                            }} >Delete</Button></td>
                        </tr>
                    );
                })
            }
        </tbody>
    )
}