import React, { useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import API from '../../../services';

export default function ModalDeleteOrders({ modal, toggle, data, handleAlert }) {

    let token = window.localStorage.getItem('token')
    const handleDelete = () => {
        let strId = data.id;
        const id = parseInt(strId);
        const tokenData = "Bearer " + token
        const config = {
            headers: { "Authorization": tokenData }
        };
        API.deleteOrders(id, config).then(res => {
            if (res.status === 204) {
                handleAlert()
            }
        }).catch(err => {
            console.log(err)
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
