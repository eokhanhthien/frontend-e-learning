import { createRouter, createWebHistory } from "vue-router"
import UserLayout from '../layouts/UserLayout.vue'
import AdminLayout from "../layouts/AdminLayout.vue"
import Home from "../components/frontend/Home.vue"
import Learning from "../components/frontend/Learning.vue"
import Discussion from "../components/frontend/Discussion.vue"
import Error from "../components/frontend/Error.vue"


import CourseIndex from "../components/backend/course/index.vue"
import CourseAdd from "../components/backend/course/add.vue"
import CourseEdit from "../components/backend/course/edit.vue"

import LanguageIndex from "../components/backend/language/index.vue"
import LanguageAdd from "../components/backend/language/add.vue"
import LanguageEdit from "../components/backend/language/edit.vue"

import LabIndex from "../components/backend/lab/index.vue"
import LabAdd from "../components/backend/lab/add.vue"

const routes = [
    // Frontend
    { path: '/', component: <UserLayout><Home /></UserLayout>,  name: "Home"  ,props: true,},
    { path: '/learning', component:<UserLayout> <Learning /></UserLayout>,  name: "Learning"  ,props: true,},
    { path: '/discussion', component:<UserLayout><Discussion /></UserLayout> ,  name: "Discussion"  ,props: true,},
    { path: '/:pathMatch(.*)*', component: <Error />,  name:  Error ,props: true,},


    // Backend
    { path: '/course', component: <AdminLayout><CourseIndex /></AdminLayout> ,  name:  "CourseIndex" ,props: true,},
    { path: '/course/add', component: <AdminLayout><CourseAdd /></AdminLayout> ,  name: "CourseAdd"  ,props: true,},
    { path: '/course/edit/:id', component: <AdminLayout><CourseEdit /></AdminLayout> ,  name:  "CourseEdit" ,props: true,},

    { path: '/language', component: <AdminLayout><LanguageIndex /></AdminLayout> ,  name: "LanguageIndex"  ,props: true,},
    { path: '/language/add', component: <AdminLayout><LanguageAdd /></AdminLayout> ,  name:  "LanguageAdd" ,props: true,},
    { path: '/language/edit/:id', component: <AdminLayout><LanguageEdit /></AdminLayout> ,  name:  "LanguageEdit" ,props: true,},

    { path: '/lab', component: <AdminLayout><LabIndex /></AdminLayout> ,  name: "LabIndex"  ,props: true,},
    { path: '/lab/add', component: <AdminLayout><LabAdd /></AdminLayout> ,  name:  "LabAdd" ,props: true,},
    { path: '/lab/edit/:id', component: <AdminLayout><LabEdit /></AdminLayout> ,  name:  "LabEdit" ,props: true,},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'vue-school-active-link'
})

export default router
