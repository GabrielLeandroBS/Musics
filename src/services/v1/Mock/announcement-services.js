import { ApiMock } from '../../api-service'

async function getAllAnnouncement() {
    const { data } = await ApiMock.get('/announcement')
    return data
}

export { getAllAnnouncement };