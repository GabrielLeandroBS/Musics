import { ApiSupliu } from '../../api-service'

async function createTrack(id, number, title, duration) {
    const response = await ApiSupliu.post('/track', {
        album_id: id,
        number,
        title,
        duration
    })
    return response.data
}

async function deleteTrack(id) {
    const response = await ApiSupliu.delete(`/track/${id}`)
    return response.data
}


export { createTrack, deleteTrack };