import axiosClient from "./axiosClient"
const courseApi = {
    getAll: async () => {
        return axiosClient.get('http://localhost:3000/api/course/')
    },
    getRow: async ({ id }) => {
        return axiosClient.get('http://localhost:3000/api/course/' + id)
    },
    
    edit: async ({ id, name }) => {
        return axiosClient.put('http://localhost:3000/api/course/' + id, { name })
    },
    delete: async ({ id }) => {
        return axiosClient.delete('http://localhost:3000/api/course/' + id)
    },
}

export default courseApi