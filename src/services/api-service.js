import axios from 'axios';

export const ApiMock = axios.create({
    baseURL: 'https://627d73b24268bf47ad4b468b.mockapi.io/api/v1'
})

export const ApiMockAlbum = axios.create({
    baseURL: 'https://62817d4aed9edf7bd87526fd.mockapi.io/api/v1/'
})

export const ApiSupliu = axios.create({
    baseURL: 'https://tiao.supliu.com.br/api/',
    headers: {
        Authorization: 'gabrielleanbs@outlook.com'
    }
})

export const BaseApi = {
    get(endpoint, params) {
        return ApiSupliu.get(endpoint, { params })
    }
}