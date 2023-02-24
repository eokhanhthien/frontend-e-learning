import axios from 'axios';

const joinCourseApi = {
    add_join_course: async ({id_user,id_course}) => {
        // console.log(post);
        return axios.post('http://localhost:3000/api/user-frontend/add-join-course', {id_user,id_course})
    },
    get_join_course: async ( {id_user,id_course} ) => {
        return axios.post('http://localhost:3000/api/user-frontend/get-join-course',  {id_user,id_course} )
    },


}

export default joinCourseApi