import { createRouter, createWebHistory } from "vue-router"
import UserLayout from '../layouts/UserLayout.vue'
import AdminLayout from "../layouts/AdminLayout.vue"
import Home from "../components/frontend/Home.vue"
import Learning from "../components/frontend/Learning.vue"
import Discussion from "../components/frontend/Discussion.vue"
import Error from "../components/frontend/Error.vue"


import CourseIndex from "../components/backend/course/index.vue"
import CourseAdd from "../components/backend/course/add.vue"
import LanguageIndex from "../components/backend/language/index.vue"
import LanguageAdd from "../components/backend/language/add.vue"
const routes = [
    // Frontend
    { path: '/', component: <UserLayout><Home /></UserLayout> },
    { path: '/learning', component:<UserLayout> <Learning /></UserLayout> },
    { path: '/discussion', component:<UserLayout><Discussion /></UserLayout>  },
    { path: '/:pathMatch(.*)*', component: <Error /> },


    // Backend
    { path: '/course', component: <AdminLayout><CourseIndex /></AdminLayout>  },
    { path: '/course/add', component: <AdminLayout><CourseAdd /></AdminLayout>  },
    { path: '/language', component: <AdminLayout><LanguageIndex /></AdminLayout>  },
    { path: '/language/add', component: <AdminLayout><LanguageAdd /></AdminLayout>  },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'vue-school-active-link'
})

export default router
