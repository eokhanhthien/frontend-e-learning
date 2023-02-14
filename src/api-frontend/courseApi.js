import axios from 'axios';
const frontendApi = {
    getAll: async () => {
        return axios.get('http://localhost:3000/api/course-frontend/')
    },

}

export default frontendApi