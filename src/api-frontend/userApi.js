import axios from 'axios';

const userApi = {
    login: async ({post }) => {
        // console.log(post);
        return axios.post('http://localhost:3000/api/user-frontend/login', post)
    },
    signup: async ( post ) => {
        // console.log(post);
        return axios.post('http://localhost:3000/api/user-frontend/signup',  post )
    },
    changeinfo: async ( post ) => {
        // console.log(post);
        return axios.post('http://localhost:3000/api/user-frontend/changeinfo',  post )
    },

}

export default userApi