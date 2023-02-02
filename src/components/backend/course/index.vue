<template>
  <div>
        <div class="content">
            <div class="animated fadeIn">
                <button class="btn-add btn btn-primary"> <router-link to ="/course/add">Thêm khóa học</router-link> </button>
                <div class="orders">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="box-title">Khóa học  </h4>
                                </div>
                                <div class="card-body--">
                                    <div class="table-stats order-table ov-h">
                                        <table class="table ">
                                            <thead>
                                                <tr>
                                                    <th class="serial">#</th>
                                                    <th class="avatar">Hình ảnh</th>
                                                    <th>Tên khóa học</th>
                                                    <th>Ngôn ngữ</th>
                                                    <th>Trình độ</th>
                                                    <th>Mô tả</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(course,index) in courses" v-bind:key="course._id">
                                                    <td class="serial">{{index+1}}</td>
                                                    <td class="avatar">
                                                        <div class="round-img">
                                                            <img :src="require('../../../assets/images/'+course.image )" aspect-ratio="2.75" >

                                                        </div>
                                                    </td>
                                                    <td> {{ course.name }} </td>
                                                    <td>  <span class="name">{{ course.name_language }}</span> </td>
                                                    <td> <span class="product">{{ course.level }}</span> </td>
                                                    <td><span class="count">{{ course.description }}</span></td>
                                                    <td>
                                                        <span class="badge badge-warning"><router-link :to="'course/edit/' + course._id">Edit</router-link> </span>
                                                        <span @click ="handleDeleteCourse(course._id)" class="badge badge-complete ml-3">Delete</span>
                                                    </td>
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
import { ref, onMounted,inject } from 'vue'
import courseApi from '@/api/courseApi';
const toast = inject('toast');

const courses = ref([]);
onMounted(() => {
    (async function () {
        const res = await courseApi.getAll();
        // console.log(res.data.data)
        courses.value = res.data.data;
        console.log(courses.value)

    })()
})

async function handleDeleteCourse(id){
    const res = await courseApi.delete({id: id})
    if(res){
        // location.reload()
        const res = await courseApi.getAll();
        courses.value = res.data.data;
        toast.error('Xóa ngôn ngữ thành công');
    }   

}
</script>

<style>
@import url(../../../assets/css/style.css);
@import url(https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css);
@import url(https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css);
@import url(https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css);
@import url(https://cdn.jsdelivr.net/npm/pixeden-stroke-7-icon@1.2.3/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css);
@import url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.2.0/css/flag-icon.min.css);
@import url(https://cdn.jsdelivr.net/npm/chartist@0.11.0/dist/chartist.min.css);
@import url(https://cdn.jsdelivr.net/npm/jqvmap@1.5.1/dist/jqvmap.min.css);
@import url(https://cdn.jsdelivr.net/npm/weathericons@2.1.0/css/weather-icons.css);
@import url(https://cdn.jsdelivr.net/npm/fullcalendar@3.9.0/dist/fullcalendar.min.css);

button.btn-add {
    padding: 10px;
    margin: 10px 0;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 5px;
}
.btn-add a{
    color: white;
    text-decoration: none;
}
.table-stats table td {
    font-weight: 500;
    text-transform: inherit;
    vertical-align: middle;
}
</style>