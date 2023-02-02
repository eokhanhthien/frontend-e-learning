import axios from 'axios';

const courseApi = {
    getAll: async () => {
        return axios.get('http://localhost:3000/api/course')
    },
    getRow: async ({ id }) => {
        return axios.get('http://localhost:3000/api/course/' + id)
    },
    create: async (post) => {
        // const arr = JSON.stringify(Object.fromEntries(post));
        console.log(post);
        // return axios.post('http://localhost:3000/api/course', {
        //     post
        // })

        // console.log(JSON.stringify(Object.fromEntries(post)));
    },
    edit: async ({ id, name }) => {
        return axios.put('http://localhost:3000/api/course/' + id, { name })
    },
    delete: async ({ id }) => {
        return axios.delete('http://localhost:3000/api/course/' + id)
    },
    upload: async ({formData}) => {
        return axios.post('http://localhost:3000/api/course/upload',{formData} )
    },

}

export default courseApi