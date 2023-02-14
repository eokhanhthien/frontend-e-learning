import axiosClient from "./axiosClient"
const labApi = {
    getAll: async () => {
        return axiosClient.get('http://localhost:3000/api/lab')
    },
    getRow: async ({ id }) => {
        return axiosClient.get('http://localhost:3000/api/lab/' + id)
    },
    getRowDetail: async ({ id }) => {
        return axiosClient.get('http://localhost:3000/api/labdetail/' + id)
    },
    create: async (post) => {
        console.log(post);
    },
    edit: async ({ id, name }) => {
        return axiosClient.put('http://localhost:3000/api/lab/' + id, { name })
    },
    delete: async ({ id }) => {
        return axiosClient.delete('http://localhost:3000/api/lab/' + id)
    },

}

export default labApi