<template>
    <div class="content">
        <!-- <img src="../../../../../../Nodejs/uploads/1674793527975.jpg" alt=""> -->
        <div class="animated fadeIn">
            <button class="btn-add btn btn-primary "> <router-link to="/course">Trở lại</router-link> </button>

            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <strong class="card-title">Sửa khóa học</strong>
                        </div>
                        <div class="card-body">
                            <!-- Credit Card -->
                            <div id="pay-invoice">
                                <div class="card-body">
                                    <hr>
                                    <div class="form-group">


                                    <form ref="form" @submit.prevent="submitForm" enctype="multipart/form-data">
                                        <div class="form-group">
                                            <div class=""><label for="select" class=" form-control-label">Ngôn
                                                    ngữ</label>
                                            </div>
                                            <div class="">
                                                <select name="select" id="select" class="form-control"
                                                    v-model="selected" @change="onChange($event)">
                                                    <option value="">Chọn ngôn ngữ</option>
                                                    <option  v-for="(language) in languages" v-bind:key="language.name" 
                                                    v-bind:value="{ id: language._id, name: language.name }" >{{
                                                            language.name
                                                        }}</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="cc-payment" class="control-label mb-1">Tên khóa học</label>
                                            <input v-model="name_course" id="cc-payment" name="cc-payment" type="text"
                                                class="form-control" aria-required="true" aria-invalid="false">
                                        </div>

                                        <input type="file" name="image" ref="image" @change="selectFile">

                                        <div class="form-group">
                                            <div class=""><label for="select" class=" form-control-label">Cấp độ khóa
                                                    học</label>
                                            </div>
                                            <div class="">
                                                <select name="select" id="select" class="form-control" v-model="level_course"
                                                    @change="onChange1($event)">
                                                    <option value="">Chọn cấp độ</option>
                                                    <option v-bind:value="'basic'">Căn bản</option>
                                                    <option v-bind:value="'advanced'">Nâng cao</option>
                                                </select>
                                            </div>  
                                        </div>

                                        <div class="form-group">
                                            <label for="cc-description" class="control-label mb-1">Mô tả</label>
                                            <textarea v-model="description_course" id="cc-description" name="cc-payment"
                                                type="text" class="form-control" aria-required="true"
                                                aria-invalid="false"> </textarea>
                                        </div>

                                        <button type="submit" class="btn btn-lg btn-info">Sửa</button>
                                    </form>

                                </div>
                            </div>
                        </div>

                        </div>
                    </div> <!-- .card -->

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, inject , onBeforeMount } from 'vue'
import languageApi from '@/api/languageApi';
import courseApi from '@/api/courseApi';
import { useRouter,useRoute } from 'vue-router'
import axios from 'axios';
var FormData = require('form-data');


const languages = ref([]);
const id_language = ref('');
const name_language = ref('');
const name_course = ref('');
const description_course = ref('');
const level_course = ref('');
const selected = ref({
  id: "",
  name: '',
});
const file = ref('');
const image = ref('');
const old_image = ref('');

const id = ref(useRoute().params.id);

onBeforeMount(() => {
    (async function () {

        // const course = await courseApi.getRow({ id: id.value });
        
        // console.log(course.data.data)
        // name_language.value = course.data.data.name_language
        // id_language.value = course.data.data.id_language
        // name_course.value = course.data.data.name
        // description_course.value = course.data.data.description
        // level_course.value = course.data.data.level
        // file.value = course.data.data.image

        // // Select option có 2 thuộc tính
        // selected.value.id = course.data.data.id_language 
        // selected.value.name = course.data.data.name_language
        // // console.log(course.data.data.level_course)
    })()

})

onMounted(() => {
    (async function () {
        const res = await languageApi.getAll();
        // console.log(res.data.data)
        languages.value = res.data.data;
       


        const course = await courseApi.getRow({ id: id.value });
        
        // console.log(course.data.data)
        name_language.value = course.data.data.name_language
        id_language.value = course.data.data.id_language
        name_course.value = course.data.data.name
        description_course.value = course.data.data.description
        level_course.value = course.data.data.level
        file.value = course.data.data.image
        old_image.value = course.data.data.image

        // Select option có 2 thuộc tính
        selected.value.id = course.data.data.id_language 
        selected.value.name = course.data.data.name_language
    })()

})

function onChange() {
    id_language.value = selected.value.id;
    name_language.value = selected.value.name;
    // console.log(id_language.value)
    console.log(selected.value)
}
function onChange1(event) {
    level_course.value = event.target.value;
    console.log(level_course.value)
}

const router = useRouter()
const toast = inject('toast');
// async function handleAddCourse() {
//     const res = await courseApi.create({
//         name: name_course.value,
//         id_language: id_language.value,
//         name_language: name_language.value,
//         level: level_course.value,
//         description: description_course.value,
//         image: image.value
//     })
//     if (res) {
//         // window.history.back();
//         router.push({ path: '/course' }).then(() => {
//             toast.success('Thêm khóa học thành công');
//         })
//     }
// }

async function submitForm() {
    const formData = new FormData();
    formData.append("image", file.value);
    formData.append("old_image", old_image.value);
    formData.append("name", name_course.value);
    formData.append("name_language", name_language.value);
    formData.append("description", description_course.value);
    formData.append("id_language", id_language.value);
    formData.append("level", level_course.value);
    console.log(JSON.stringify(Object.fromEntries(formData)));
    // for (var pair of formData.entries()) {
    // console.log(pair[0]+ ', ' + pair[1]); 
    // }
    // await axios.post('http://localhost:3000/api/course',formData)

    await axios.put('http://localhost:3000/api/course/'+id.value , formData).then(() => {
            router.push({ path: '/course' }).then(() => {
            toast.success('Sửa khóa học thành công');
        })
      })

      
    // console.log(fileReturn);
    
    // await courseApi.create(JSON.stringify(formData))
}


function selectFile(e) {

    const files = e.target.files[0]
    file.value = files;
    console.log(file.value);
    console.log(old_image.value);
}


</script> 

<style>

</style>