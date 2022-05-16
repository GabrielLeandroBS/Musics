import { ApiSupliu } from '../../api-service'

async function getAllSupliuAlbum(key) {
    const response = await ApiSupliu.get(`/album${`?keyword=${key}`}`)
    return response.data
}

async function createAlbum(name, year) {
    const response = await ApiSupliu.post('/album', {
        name,
        year
    })
    return response.data
}



async function deleteAlbum(id) {
    const response = await ApiSupliu.delete(`/album/${id}`)
    return response.data
}

export { createAlbum, deleteAlbum, getAllSupliuAlbum };