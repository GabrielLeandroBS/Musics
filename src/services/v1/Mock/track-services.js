import { ApiMock } from '../../api-service'

async function getAllTracks() {
    const { data } = await ApiMock.get('/tracks')
    return data
}

export { getAllTracks };