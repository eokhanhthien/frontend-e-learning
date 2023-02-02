import axios from 'axios';

const labApi = {
    getAll: async () => {
        return axios.get('http://localhost:3000/api/lab')
    },
    getRow: async ({ id }) => {
        return axios.get('http://localhost:3000/api/lab/' + id)
    },
    create: async (post) => {
        // const arr = JSON.stringify(Object.fromEntries(post));
        console.log(post);
        // return axios.post('http://localhost:3000/api/lab', {
        //     post
        // })

        // console.log(JSON.stringify(Object.fromEntries(post)));
    },
    edit: async ({ id, name }) => {
        return axios.put('http://localhost:3000/api/lab/' + id, { name })
    },
    delete: async ({ id }) => {
        return axios.delete('http://localhost:3000/api/lab/' + id)
    },
    upload: async ({formData}) => {
        return axios.post('http://localhost:3000/api/lab/upload',{formData} )
    },

}

export default labApi