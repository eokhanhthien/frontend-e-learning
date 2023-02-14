import axiosClient from "./axiosClient"


const labDetailApi = {
    getAll: async () => {
        return axiosClient.get('http://localhost:3000/api/lab')
    },
    getRow: async ({ id }) => {
        return axiosClient.get('http://localhost:3000/api/lab/' + id)
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

export default labDetailApi