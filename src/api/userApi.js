import axios from 'axios';

const userApi = {
    login: async ({email , password}) => {
        // console.log(post);
        return axios.post('http://localhost:3000/api/login',{email , password})
    },
    getRow: async ({ id }) => {
        return axios.get('http://localhost:3000/api/language/' + id)
    },
    create: async ({ name }) => {
        return axios.post('http://localhost:3000/api/language', {
            name
        })
    },

}

export default userApi