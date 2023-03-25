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
    changepassword: async ( post ) => {
        // console.log(post);
        return axios.post('http://localhost:3000/api/user-frontend/changepassword',  post )
    },

    getUser: async (post) => {
        return axios.post('http://localhost:3000/api/user-frontend/get-user', {
            post
        })
    },


}

export default userApi