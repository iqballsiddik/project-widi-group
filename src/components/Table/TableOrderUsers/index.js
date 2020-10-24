import React, { useState, useEffect } from 'react';
import { Table, Button, Spinner, Row, Alert, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import ModalEditForm from '../../Modal/ModalEditForm';
import API from '../../../services';
import ModalDeleteOrders from '../../Modal/ModalDelete';

// Table Order user
// 
// user bisa melihat apa saja yang user order
export default function TableOrderUsers() {
    const [modal, setModal] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    const [data, setData] = useState([]);
    const [dataNull, setDataNull] = useState('');
    const [dataUpdateOrder, setDataUpdateOrder] = useState('');
    const [dataDelete, setDataDelete] = useState({});
    const [relod, setRelod] = useState(true);
    const [alertDelete, setAlertDelete] = useState('');
    const [alertUpdate, setAlertUpdate] = useState('');
    const [visible, setVisible] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [dataResult, setDataResult] = useState([]);

    // toggle modal Edit
    const toggle = () => setModal(!modal);

    // toggle modal delete
    const toggleDelete = () => setModalDelete(!modalDelete);

    // alert delete
    const onDismiss = () => setVisible(false);

    // count pagination
    const pageItems = 5;
    const pagesCount = Math.ceil(dataResult.length / pageItems);

    // pagination 
    const handlePageClick = (e, index) => {
        e.preventDefault();
        setCurrentPage(index);
    };

    // get data orders
    const fecthDataOrders = (isSubscribed) => {
        API.getOrders().then(res => {
            if (res.status == 400) {
                setDataNull('Data tidak ada')
            }
            if (res.status == 200) {
                setDataResult(res.data)
                setRelod(false)
            }
        })
    }

    useEffect(() => {
        let isSubscribed = true;
        fecthDataOrders(isSubscribed)
        return () => isSubscribed = false
    }, [])

    // handle alert delete
    const handleAlert = () => {
        setModalDelete(!modalDelete)
        setAlertDelete('Delete Berhasil')

        let isSubscribed = true;
        fecthDataOrders(isSubscribed)
        return () => isSubscribed = false
    }

    // handle alert Update
    const handleAlertUpdate = () => {
        setAlertUpdate("Berhasil Update")
        setModal(!modal)

        let isSubscribed = true;
        fecthDataOrders(isSubscribed)
        return () => isSubscribed = false
    }

    // untuk slice pagination
    const sendDataResult = () => {
        return dataResult.slice(currentPage * pageItems, currentPage * pageItems + pageItems)
    }

    // handleDelete
    const handleDataDel = (val) => {
        setDataDelete(val)

    }

    // handleDatUpdate dan setDataUpdate
    const handleDatUpdate = (val) => {
        setDataUpdateOrder(val)
    }

    return (
        <div>
            {
                alertDelete == '' ? '' :
                    <Alert color="danger" isOpen={visible} toggle={onDismiss}>
                        {alertDelete}
                    </Alert>
            }
            {
                alertUpdate == '' ? '' :
                    <Alert color="info" isOpen={visible} toggle={onDismiss}>
                        {alertUpdate}
                    </Alert>
            }
            <Table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Kategory Barang</th>
                        <th>Jenis Barang</th>
                        <th>Nama Barang</th>
                        {/* <th>Jumlah Barang</th>
                        <th>Harga Barang</th> */}
                        <th>Status</th>
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
                        </tbody> :
                        <TableRow data={sendDataResult()} toggle={toggle} setDataUpdateOrder={setDataUpdateOrder} toggleDelete={toggleDelete} handleDatUpdate={(val) => handleDatUpdate(val)} handleDataDel={(val) => handleDataDel(val)} />
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
            <ModalEditForm modal={modal} toggle={toggle} data={dataUpdateOrder} handleAlertUpdate={handleAlertUpdate} />
            <ModalDeleteOrders modal={modalDelete} toggle={toggleDelete} data={dataDelete} handleAlert={handleAlert} />
        </div >
    )
}

const TableRow = ({ data, toggle, toggleDelete, setDataUpdateOrder, handleDataDel, handleDatUpdate }) => {
    useEffect(() => {
    }, [...data])
    return (
        <tbody>
            {
                data.map((val, i) => {
                    return (
                        <tr key={val.id}>
                            <td>{i + 1}</td>
                            <td>{val.category}</td>
                            <td>{val.type}</td>
                            <td>{val.name}</td>
                            {/* <td>{val.total}</td>
                            <td>{val.price}</td> */}
                            <td>Sudah Dibayar</td>
                            <td><Button color="primary" onClick={() => {
                                toggle()
                                handleDatUpdate(val)
                            }}>Edit</Button>{' '}</td>
                            <td><Button color="danger" onClick={() => {
                                toggleDelete()
                                handleDataDel(val)
                            }}>Delete</Button></td>
                        </tr>
                    )
                })
            }
        </tbody>
    )
}