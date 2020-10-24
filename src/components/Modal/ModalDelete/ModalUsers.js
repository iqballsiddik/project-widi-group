import React from 'react'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import API from '../../../services';

export default function ModalUsersDelete({ modal, toggle, data, handleAlertDelete, }) {
    let token = window.localStorage.getItem('token');
    // handle button delete YA
    const handleDelete = () => {
        let strId = data.id;
        const id = parseInt(strId);
        const tokenData = "Bearer " + token
        const config = {
            headers: { "Authorization": tokenData }
        };

        API.deleteUsers(id, config).then(res => {
            if (res.status === 204) {
                handleAlertDelete()
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
