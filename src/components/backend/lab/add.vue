<template>
    <div class="content">
        <!-- <img src="../../../../../../Nodejs/uploads/1674793527975.jpg" alt=""> -->
        <div class="animated fadeIn">
            <button class="btn-add btn btn-primary "> <router-link to="/lab">Trở lại</router-link> </button>

            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <strong class="card-title">Thêm bài học</strong>
                        </div>
                        <div class="card-body">
                            <!-- Credit Card -->
                            <div id="pay-invoice">
                                <div class="card-body">
                                    <hr>
                                    <div class="form-group">


                                        <form ref="form" @submit.prevent="submitForm" enctype="multipart/form-data">
                                            <div class="form-group">
                                                <div class=""><label for="select" class=" form-control-label">Khóa học</label>
                                                </div>
                                                <div class="">
                                                    <select name="select" id="select" class="form-control"
                                                        v-model="selected" @change="onChange($event)">
                                                        <option value="">Chọn khóa học</option>
                                                        <option v-for="(language) in languages"
                                                            v-bind:key="language.name"
                                                            :value="{ id: language._id, name: language.name }">{{
                                                                language.name
                                                            }}</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label for="cc-payment" class="control-label mb-1">Tên bài học</label>
                                                <input v-model="name_course" id="cc-payment" name="cc-payment"
                                                    type="text" class="form-control" aria-required="true"
                                                    aria-invalid="false">
                                            </div>

                                            <label for="cc-payment" class="control-label mb-1">Nội dung</label>
                                            <ContentEditor v-model="content"></ContentEditor>
                                           <!-- {{ content }} -->

                                           <div for="cc-payment" class="control-label mb-1">Hình minh họa</div>
                                            <input type="file" name="image" ref="image" multiple  @change="selectFile">



                                            <div class="form-group">
                                                <label for="cc-description" class="control-label mb-1">Mô tả</label>
                                                <textarea v-model="description_course" id="cc-description"
                                                    name="cc-payment" type="text" class="form-control"
                                                    aria-required="true" aria-invalid="false"> </textarea>
                                            </div>

                                            <button type="submit" class="btn btn-lg btn-info">Thêm</button>
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
import { ref, onMounted, inject } from 'vue'
// import languageApi from '@/api/languageApi';
import courseApi from '@/api/courseApi';
import { useRouter } from 'vue-router'
import axiosClient from '../../../api/axiosClient';

import ContentEditor from './ContentEditor.vue'
var FormData = require('form-data');


const languages = ref([]);
const id_language = ref('');  //id khóa học
const name_language = ref('');  //tên khóa học
const name_course = ref('');    // tên bài học
const description_course = ref(''); // Mô tả bài học

const selected = ref('');
const file = ref('');    // Ảnh 
const image = ref('');

const content = ref('');   //Nội dung bài học


onMounted(() => {
    (async function () {
        const res = await courseApi.getAll();
        // console.log(res.data.data)
        languages.value = res.data.data;
        console.log(languages.value)

    })()
})

function onChange() {
    id_language.value = selected.value.id;
    name_language.value = selected.value.name;
    console.log(id_language.value)
    console.log(name_language.value)
}

const router = useRouter()
const toast = inject('toast');

async function submitForm() {
    const formData = new FormData();
    
    for (let index = 0; index < file.value.length; index++) { //NEW ONE
    formData.append("image", file.value[index] , index);
    }
    // formData.append("image", file.value);
    formData.append("name", name_course.value);
    formData.append("name_course", name_language.value);
    formData.append("description", description_course.value);
    formData.append("id_course", id_language.value);
    formData.append("content", content.value);
   
    console.log(JSON.stringify(Object.fromEntries(formData)));

    await axiosClient.post('http://localhost:3000/api/lab', formData).then(() => {
        router.push({ path: '/lab' }).then(() => {
            toast.success('Thêm bài học thành công');
        })
    })

}


function selectFile(e) {

    const files = e.target.files
    file.value = files;
    console.log(file.value);
}


</script> 

<style>

</style>