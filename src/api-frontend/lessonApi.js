import axios from 'axios';
const frontendApi = {
    getAllbyid: async ({ id }) => {
        return axios.get('http://localhost:3000/api/lesson-frontend/' + id)
    },
}

export default frontendApi