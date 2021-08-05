import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASE_URL
const clientId = process.env.REACT_APP_ACCESS_KEY

const fetchImages = (query, page) => {
    return new Promise((resolve) => {
        const url = baseUrl + `&page=${page}&per_page=12&query=${query}&client_id=${clientId}`
        axios.get(url)
            .then((response) => {
                resolve(response.data)
            })
    })
}

export default fetchImages