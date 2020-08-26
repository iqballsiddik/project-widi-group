import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import xios from 'axios';
import API from '../../../services';

export default function ModalDeleteOrders({ modal, toggle, data }) {

    const handleDelete = () => {
        let id = data.id;
        let token = window.localStorage.getItem('token')

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        API.putDelete(id, config).then(res => {
            console.log(res)
        })
    }
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalBody>
                    <div className="d-flex justify-content-center">
                        <div>
                            <h3>Apa anda yakin ? </h3>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={handleDelete}>Ya</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Tidak</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
