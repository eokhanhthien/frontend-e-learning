<template>
    <div class="content">
        <!-- <img src="../../../../../../Nodejs/uploads/1674793527975.jpg" alt=""> -->
        <div class="animated fadeIn">
            <button class="btn-add btn btn-primary "> <router-link to="/lab">Trở lại</router-link> </button>

            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <strong class="card-title">Sửa bài học</strong>
                        </div>
                        <div class="card-body">
                            <!-- Credit Card -->
                            <div id="pay-invoice">
                                <div class="card-body">
                                    <hr>
                                    <div class="form-group">


                                        <form ref="form" @submit.prevent="submitForm" enctype="multipart/form-data">
                                            <div class="form-group">
                                                <div class=""><label for="select" class=" form-control-label">Khóa
                                                        học</label>
                                                </div>
                                                <div class="">
                                                    <select name="select" id="select" class="form-control"
                                                        v-model="selected" @change="onChange($event)">
                                                        <option value="">Chọn khóa học</option>
                                                        <option v-for="(language) in languages"
                                                            v-bind:key="language.name"
                                                            v-bind:value="{ id: language._id, name: language.name }">{{
                                                                language.name
                                                            }}</option>
                                                    </select>
                                                </div>
                                            </div>


                                            <div class="form-group">
                                                <label for="cc-payment" class="control-label mb-1">Tên bài học</label>
                                                <input v-model="postLab.name" id="cc-payment" name="cc-payment"
                                                    type="text" class="form-control" aria-required="true"
                                                    aria-invalid="false">
                                            </div>

                                            <label for="cc-payment" class="control-label mb-1">Nội dung</label>
                                            <ContentEditor v-if="postLabDetail.content"
                                                v-model="postLabDetail.content" />
                                            <!-- {{ content }}
                                           <input type="text" v-model="content"> -->

                                            <div for="cc-payment" class="control-label mb-1">Hình minh họa</div>
                                            <input type="file" name="image" ref="image" multiple @change="selectFile">

                                            <div v-if="postLabDetail">
                                                <div v-if="postLabDetail.image">
                                                    <img v-for="(image, index) in postLabDetail.image"
                                                        v-bind:key="index"
                                                        :src="image"
                                                        style="width: 120px; border: 1px solid #ccc;margin: 10px 4px 10px 0;">
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label for="cc-description" class="control-label mb-1">Mô tả</label>
                                                <textarea v-model="postLabDetail.description" id="cc-description"
                                                    name="cc-payment" type="text" class="form-control"
                                                    aria-required="true" aria-invalid="false"> </textarea>
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
import { ref, onMounted, inject } from 'vue'
// import languageApi from '@/api/languageApi';
import courseApi from '@/api/courseApi';
import labApi from '@/api/labApi';
import { useRouter, useRoute } from 'vue-router'
import axiosClient from '../../../api/axiosClient';


import ContentEditor from './ContentEditor.vue'
var FormData = require('form-data');


const languages = ref([]);

const selected = ref({
    id: "",
    name: '',
});

const file = ref('');    // Ảnh 

// const id_language = ref('');  //id khóa học
// const name_language = ref('');  //tên khóa học
// const name_course = ref('');    // tên bài học
// const description_course = ref(''); // Mô tả bài học
// const content = ref('');   //Nội dung bài học

const postLab = ref({
    id_course: '',
    name_course: '',
    name: '',
})

const postLabDetail = ref({
    id_lab: '',
    content: '',
    description: '',
    image: '',
})

// const old_image = ref('');



const id = ref(useRoute().params.id);

onMounted(() => {
    (async function () {
        const res = await courseApi.getAll();
        // console.log(res.data.data)
        languages.value = res.data.data;
        console.log(languages.value)

        const lab = await labApi.getRow({ id: id.value });
        postLab.value = lab.data.data;
        const labDetail = await labApi.getRowDetail({ id: id.value });
        postLabDetail.value = labDetail.data.data;

        console.log(postLab.value)
        console.log(postLabDetail.value.image)

        // name_language.value = lab.data.data.name_course
        // id_language.value = lab.data.data.id_course
        // name_course.value = lab.data.data.name

        // description_course.value = labDetail.data.data.description
        // content.value = labDetail.data.data.content
        // file.value = labDetail.data.data.image
        // old_image.value = labDetail.data.data.image

        // Select option có 2 thuộc tính
        selected.value.id = lab.data.data.id_course
        selected.value.name = lab.data.data.name_course

    })()
})



function onChange() {
    postLab.value.id_course = selected.value.id;
    postLab.value.name_course = selected.value.name;
    console.log(selected.value)
    // console.log(name_language.value)
}

const router = useRouter()
const toast = inject('toast');

async function submitForm() {
    const formData = new FormData();

    for (let index = 0; index < file.value.length; index++) { //NEW ONE
        const fileBlob = new Blob([file.value[index]], { type: 'image/jpeg' });
        formData.append("image", fileBlob, index + 1);
    }
    if(postLabDetail.value.length > 1){
        for (let index = 0; index < postLabDetail.value.length; index++) { //NEW ONE
        const fileBlob = new Blob([postLabDetail.value[index]], { type: 'image/jpeg' });
        formData.append("old_image", fileBlob, index + 1);
    } 
    }else{
        formData.append("old_image", postLabDetail.value.image);
    }
    formData.append("name", postLab.value.name);
    formData.append("name_course", postLab.value.name_course);
    formData.append("description", postLabDetail.value.description);
    formData.append("id_course", postLab.value.id_course);
    formData.append("content", postLabDetail.value.content);

    console.log(JSON.stringify(Object.fromEntries(formData)));

    await axiosClient.put('http://localhost:3000/api/lab/' + id.value, formData).then(() => {
        router.push({ path: '/lab' }).then(() => {
            toast.success('Sửa bài học thành công');
        })
    })
    // console.log(fileReturn);

    // await courseApi.create(JSON.stringify(formData))
}


function selectFile(e) {
    const files = e.target.files
    file.value = files;
    console.log(file.value);
}


</script> 

<style>

</style>