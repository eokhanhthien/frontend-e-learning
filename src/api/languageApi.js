import axiosClient from "./axiosClient"

const languageApi = {
    getAll: async () => {
        return axiosClient.get('http://localhost:3000/api/language')
    },
    getRow: async ({ id }) => {
        return axiosClient.get('http://localhost:3000/api/language/' + id)
    },
    create: async ({ name }) => {
        return axiosClient.post('http://localhost:3000/api/language', {
            name
        })
    },
    edit: async ({ id, name }) => {
        return axiosClient.put('http://localhost:3000/api/language/' + id, { name })
    },
    delete: async ({ id }) => {
        return axiosClient.delete('http://localhost:3000/api/language/' + id)
    },

}

export default languageApi