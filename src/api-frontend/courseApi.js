import axios from 'axios';
const frontendApi = {
    getAll: async () => {
        return axios.get('http://localhost:3000/api/course-frontend/')
    },
    getbyid: async ({id}) => {
        return axios.get('http://localhost:3000/api/course-frontend/'+id)
    },

    getmycourse: async ({id})=>{
        
        return axios.get('http://localhost:3000/api/mycourse-frontend/'+id)
    }
}

export default frontendApi