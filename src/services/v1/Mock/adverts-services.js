import { ApiMock } from '../../api-service'

async function getAllAdverts() {
    const { data } = await ApiMock.get('/adverts')
    return data
}

export { getAllAdverts };