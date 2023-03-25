<template>
    <div>
        <div class="content">
            <div class="animated fadeIn">
                <button class="btn-add btn btn-primary"> <router-link to="/add-lecturers">Thêm giảng viên</router-link>
                </button>
                <!-- <ul>
                    <li v-for="language in languages" v-bind:key="language._id">{{ language.name }}</li>
                </ul> -->
                <div class="orders">
                    <!-- <p v-if="route.query.status == 1" class="Notify">Thêm ngôn ngữ thành công</p>
                    <p v-if="route.query.status == 2" class="Notify">Xóa ngôn ngữ thành công</p>
                    <p v-if="route.query.status == 3" class="Notify">Sửa ngôn ngữ thành công</p> -->
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="box-title">Tất cả giảng viên</h4>
                                </div>
                                <div class="card-body--">
                                    <div class="table-stats order-table ov-h">
                                        <table class="table " id='here'>
                                            <thead>
                                                <tr>
                                                    <th class="serial">#</th>
                                                    <!-- <th>ID</th> -->
                                                    <th>Ảnh</th>
                                                    <th>Tên</th>
                                                    <th>Email</th>
                                                    <th>Số điện thoại</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody >

                                                <tr v-for="(lecturer,index) in lecturers" v-bind:key="lecturer._id">
                                                    <td class="serial">{{index + 1}}</td>
                                                    <td class="serial">{{index + 1}}</td>
                                                    <!-- <td> {{ lecturer._id }} </td> -->
                                                    <td> <span class="serial">{{ lecturer.name }}</span> </td>
                                                    <td> <span class="serial">{{ lecturer.email }}</span> </td>
                                                    <td> <span class="serial">{{ lecturer.name }}</span> </td>
                                                    <td> <span class="serial">{{ lecturer.name }}</span> </td>
                               
                                                    <!-- <td>
                                                        <span class="badge badge-warning"><router-link :to="'language/edit/' + language._id">Edit</router-link> </span>
                                                        <span @click ="handleDeleteLanguage(language._id)" class="badge badge-complete ml-3">Delete</span>
                                                    </td> -->
                                                </tr>
                                               
                                                
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue'
import userApi from '@/api-frontend/userApi';

// import { useRoute } from 'vue-router';

const lecturers = ref([]); 

const post =ref({
    "role" : 2,
})
onMounted(() => {
    (async function () {
        const res = await userApi.getUser({post: post.value});
        lecturers.value = res.data.user;
        // console.log(res.data.user)

    })()
})


// const route = useRoute();
const toast = inject('toast');
// async function handleDeleteLanguage(id){
//     const res = await languageApi.delete({id: id})
//     if(res){
//         // location.reload()
//         const res = await languageApi.getAll();
//         languages.value = res.data.data;
//         toast.error('Xóa ngôn ngữ thành công');
//     }   

// }


// console.log(route.query.status);

function convertDate(value) {
    const date = new Date(value);
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const result = date.toLocaleDateString('vi-VN', options).replace(/\//g, '-');
    return result
}

</script>
<!-- <script>
import languageApi from '@/api/languageApi';
export default {
    data() {
        return {
            languages: []
        }
    },
    methods: {
        async fetchData() {
            const res = await languageApi.getAll();
            this.languages = res.data.data
        },
        handleClick() {
            console.log(this.languages[0]._id)
        }
    },
    created() {
        this.fetchData()
    }
}
</script> -->

<style scoped>
.badge{
    cursor: pointer;
}
.badge a{
    text-decoration: none;
    color: white;
}
</style>
<style>
p.Notify {
    color: #28a745;
    font-size: 18px;
}
</style>