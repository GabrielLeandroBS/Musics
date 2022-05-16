import { ApiMockAlbum } from '../../api-service'

async function getAllAlbums() {
    const { data } = await ApiMockAlbum.get('/albums')
    return data
}

export { getAllAlbums };