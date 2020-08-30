import axios from 'axios';

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

const PutDeleteOrders = (path, id, config) => {
    const promise = new Promise((resolve, reject) => {
        axios.put(`${rootPath}/${path}/${id}`, config)
            .then(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            })
    })
    return promise;
}


// POST
const postRegister = (data) => Post('users', data)
const postOrder = (data, config) => PostOrder('orders', data, config)
// GET
const getUsersData = () => Get('users');
const getOrders = () => GetOrders('orders')
// PUT
const putDelete = (id, config) => PutDeleteOrders('orders', id, config)

const API = {
    getUsersData,
    postRegister,
    postOrder,
    getOrders,
    putDelete,
}

export default API;