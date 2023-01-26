import axios from 'axios';

const languageApi = {
    getAll: async () => {
        return axios.get('http://localhost:3000/api/language')
    },
    getRow: async ({ id }) => {
        return axios.get('http://localhost:3000/api/language/' + id)
    },
    create: async ({ name }) => {
        return axios.post('http://localhost:3000/api/language', {
            name
        })
    },
    edit: async ({ id, name }) => {
        return axios.put('http://localhost:3000/api/language/' + id, { name })
    },
    delete: async ({ id }) => {
        return axios.delete('http://localhost:3000/api/language/' + id)
    },

}

export default languageApi