import axios from 'axios';
import { path } from 'd3';

const rootPath = 'https://widi-group-backend.herokuapp.com';

const Get = (path) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${rootPath}/${path}`)
            .then(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            })
    })
    return promise;
}
const GetOrders = (path) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${rootPath}/${path}`)
            .then(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            })
    })
    return promise;
}
const GetPuskesmas = (path, id) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${rootPath}/${path}/${id}`)
            .then(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            })
    })
    return promise;
}

const Post = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.post(`${rootPath}/${path}`, data)
            .then(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            })
    })
    return promise;
}

const PostOrder = (path, data, config) => {
    const promise = new Promise((resolve, reject) => {
        axios.post(`${rootPath}/${path}`, data, config)
            .then(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            })
    })
    return promise;
}

// DELETE
const DeleteOrders = (path, id, config) => {
    const promise = new Promise((resolve, reject) => {
        axios.delete(`${rootPath}/${path}/${id}`, config)
            .then(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            })
    })
    return promise;
}

const DeleteUsers = (path, id, config) => {
    const promise = new Promise((resolve, reject) => {
        axios.delete(`${rootPath}/${path}/${id}`, config)
            .then(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            })
    })
    return promise;
}

// PUT
const UpdateOrders = (path, dataStr, idOrder, config) => {
    const promise = new Promise((resolve, reject) => {
        axios.put(`${rootPath}/${path}/${idOrder}`, dataStr, config)
            .then(res => {
                resolve(res)
            }, (err) => {
                reject(err)
            })
    })
    return promise
}

const UpdateUsers = (path, id, data, config) => {
    const promise = new Promise((resolve, reject) => {
        axios.put(`${rootPath}/${path}/${id}`, data, config)
            .then(res => {
                resolve(res)
            }, (err) => {
                reject(err)
            })
    })
    return promise
}


// POST
const postRegister = (data) => Post('users', data)
const postOrder = (data, config) => PostOrder('orders', data, config)
// GET
const getUsersData = () => Get('users');
const getOrders = () => GetOrders('orders')
const getPuskesmas = (id) => GetPuskesmas('puskesmas/user', id)
// DELETE
const deleteOrders = (id, config) => DeleteOrders('orders', id, config)
const deleteUsers = (id, config) => DeleteUsers('users', id, config)
// PUT
const putOrders = (dataStr, idOrder, config) => UpdateOrders('orders', dataStr, idOrder, config)
const updateUsers = (id, data, config) => UpdateUsers('users', id, data, config)


const API = {
    getUsersData,
    postRegister,
    postOrder,
    getOrders,
    deleteOrders,
    putOrders,
    updateUsers,
    deleteUsers,
    getPuskesmas,
}

export default API;