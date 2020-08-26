import axios from 'axios';

const rootPath = 'http://ec2-13-212-53-107.ap-southeast-1.compute.amazonaws.com:8080';

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

// POST
const postRegister = (data) => Post('users', data)
// GET
const getUsersData = () => Get('users');


const API = {
    getUsersData,
    postRegister,

}

export default API;