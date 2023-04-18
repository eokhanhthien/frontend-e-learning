import { createRouter, createWebHistory } from "vue-router"
import UserLayout from '../layouts/UserLayout.vue'
import AdminLayout from "../layouts/AdminLayout.vue"
import ManagerclassLayout from "../layouts/ManagerclassLayout.vue"
import Home from "../components/frontend/Home.vue"
import Learning from "../components/frontend/Learning.vue"
import Discussion from "../components/frontend/Discussion.vue"
import Lesson from "../components/frontend/Lesson.vue"
import DetailLesson from "../components/frontend/DetailLesson.vue"
import infoUser from "../components/frontend/infoUser.vue"
import infoUserEdit from "../components/frontend/infoUserEdit.vue"
import infoUserEditPass from "../components/frontend/infoChangePass.vue"
import Error from "../components/frontend/Error.vue"
import CourseUser from "../components/frontend/Courseuser.vue"
import Managerclass from "../components/frontend/Managerclass.vue"
import Createclass from "../components/frontend/Createclass.vue"


import CourseIndex from "../components/backend/course/index.vue"
import CourseAdd from "../components/backend/course/add.vue"
import CourseEdit from "../components/backend/course/edit.vue"

import LanguageIndex from "../components/backend/language/index.vue"
import LanguageAdd from "../components/backend/language/add.vue"
import LanguageEdit from "../components/backend/language/edit.vue"

import LabIndex from "../components/backend/lab/index.vue"
import LabAdd from "../components/backend/lab/add.vue"
import LabEdit from "../components/backend/lab/edit.vue"

import Lecturers from "../components/backend/lecturers/index.vue"
import addLecturers from "../components/backend/lecturers/add.vue"


import Login from "../components//backend/authen/login.vue"
import Signup from "../components/backend/authen/signup.vue"


// Kiem tra login phan ADMIN----------------------------------------------------------------------------
const requireAuth = (to, from, next) => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      // next({
      //   path: '/login',
      // });
      window.location = "/login"
    } else {
      next();
    }
  };
  // Danh cho trang login
  const requireAuthLogin = (to, from, next) => {
    const token = sessionStorage.getItem('token');
    if (token) {
      // next({
      //   path: '/login',
      // });
      window.location = "/language"
    } else {
      next();
    }
  };
// --------------------------------------------------------------------------------------------------------


// Kiem tra login phan STUDENT----------------------------------------------------------------------------
const isStudent = (to, from, next) => {
  const token = JSON.parse(sessionStorage.getItem('user_nomal'));
  if (!token || token['role'] == "2") {
    // next({
    //   path: '/login',
    // });
    window.location = "/learning"
  } else {
    next();
  }
};

const isUser = (to, from, next) => {
  const token = JSON.parse(sessionStorage.getItem('user_nomal'));
  if (!token) {
    // next({
    //   path: '/login',
    // });
    window.location = "/learning"
  } else {
    next();
  }
};

// --------------------------------------------------------------------------------------------------------

const routes = [
    // Frontend
    { path: '/', component: <UserLayout><Home /></UserLayout>,  name: "Home"  ,props: true,},
    { path: '/learning', component:<UserLayout> <Learning /></UserLayout>,  name: "Learning"  ,props: true,},
    { path: '/lesson/:id', component:<UserLayout> <Lesson /></UserLayout>,  name: "Lesson"  ,props: true,},
    { path: '/detail-lesson/:id', component:<UserLayout> <DetailLesson /></UserLayout>,  name: "DetailLesson"  ,props: true},
    { path: '/discussion', component:<UserLayout><Discussion /></UserLayout> ,  name: "Discussion"  ,props: true,},
    { path: '/info-user', component:<UserLayout><infoUser /></UserLayout> ,  name: "infoUser"  ,props: true,beforeEnter: isUser},
    { path: '/info-user-edit', component:<UserLayout><infoUserEdit /></UserLayout> ,  name: "infoUserEdit"  ,props: true,beforeEnter: isUser},
    { path: '/info-user-edit-pass', component:<UserLayout><infoUserEditPass /></UserLayout> ,  name: "infoUserEditPass"  ,props: true,beforeEnter: isUser},
    { path: '/course-user', component:<UserLayout><CourseUser /></UserLayout> ,  name: "CourseUser"  ,props: true,beforeEnter: isUser},
    { path: '/manager-class', component:<UserLayout><ManagerclassLayout><Managerclass /></ManagerclassLayout></UserLayout> ,  name: "Managerclass"  ,props: true,},
    { path: '/create-class', component:<UserLayout><ManagerclassLayout><Createclass /></ManagerclassLayout></UserLayout> ,  name: "Createclass"  ,props: true,},
    { path: '/:pathMatch(.*)*', component: <Error />,  name:  Error ,props: true,},







    // Backend
    { path: '/course', component: <AdminLayout><CourseIndex /></AdminLayout> ,  name:  "CourseIndex" ,props: true,beforeEnter: requireAuth},
    { path: '/course/add', component: <AdminLayout><CourseAdd /></AdminLayout> ,  name: "CourseAdd"  ,props: true,beforeEnter: requireAuth},
    { path: '/course/edit/:id', component: <AdminLayout><CourseEdit /></AdminLayout> ,  name:  "CourseEdit" ,props: true,beforeEnter: requireAuth},

    { path: '/language', component: <AdminLayout><LanguageIndex /></AdminLayout> ,  name: "LanguageIndex"  ,props: true,beforeEnter: requireAuth},
    { path: '/language/add', component: <AdminLayout><LanguageAdd /></AdminLayout> ,  name:  "LanguageAdd" ,props: true,beforeEnter: requireAuth},
    { path: '/language/edit/:id', component: <AdminLayout><LanguageEdit /></AdminLayout> ,  name:  "LanguageEdit" ,props: true,beforeEnter: requireAuth},

    { path: '/lab', component: <AdminLayout><LabIndex /></AdminLayout> ,  name: "LabIndex"  ,props: true,beforeEnter: requireAuth},
    { path: '/lab/add', component: <AdminLayout><LabAdd /></AdminLayout> ,  name:  "LabAdd" ,props: true,beforeEnter: requireAuth},
    { path: '/lab/edit/:id', component: <AdminLayout><LabEdit /></AdminLayout> ,  name:  "LabEdit" ,props: true,beforeEnter: requireAuth},

    { path: '/lecturers', component:<AdminLayout><Lecturers /></AdminLayout> ,  name: "Lecturers"  ,props: true,},
    { path: '/add-lecturers', component:<AdminLayout><addLecturers /></AdminLayout> ,  name: "addLecturers"  ,props: true,},


    { path: '/login', component: <Login /> ,  name:  "Login" ,props: true,beforeEnter: requireAuthLogin},
    { path: '/register', component: <Signup /> ,  name:  "Signup" ,props: true,beforeEnter: requireAuthLogin},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'vue-school-active-link'
})

export default router

