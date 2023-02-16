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
                                            <input v-model="post.name" id="cc-payment" name="cc-payment" type="text"
                                                class="form-control" aria-required="true" aria-invalid="false">
                                        </div>
                                         <!-- <p>{{ post.name }}</p> -->

                                        <div for="cc-payment" class="control-label mb-1">Ảnh đại diện</div>

                                        <input type="file" name="image" ref="image" @change="selectFile">
                                        <!-- <p>{{ post.image }}</p> -->
                                        <hr>
                                        <img v-if="post.image" :src="require('../../../assets/images/'+post.image)" style="width: 120px; border: 1px solid #ccc;margin: 10px 4px 10px 0;" >
                                       

                                        <div class="form-group mt-3">
                                            <div class=""><label for="select" class=" form-control-label">Cấp độ khóa
                                                    học</label>
                                            </div>
                                            <div class="">
                                                <select name="select" id="select" class="form-control" v-model="post.level"
                                                    @change="onChange1($event)">
                                                    <option value="">Chọn cấp độ</option>
                                                    <option v-bind:value="'basic'">Căn bản</option>
                                                    <option v-bind:value="'advanced'">Nâng cao</option>
                                                </select>
                                            </div>  
                                        </div>

                                        <div class="form-group">
                                            <label for="cc-description" class="control-label mb-1">Mô tả</label>
                                            <textarea v-model="post.description" id="cc-description" name="cc-payment"
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
import axiosClient from '../../../api/axiosClient';
var FormData = require('form-data');


const languages = ref([]);

const selected = ref({
  id: "",
  name: '',
});
const file = ref('');


const post = ref({
    id_language : '',
    name_language : '',
    name : '',
    description : '',
    level : '',
    image: '',
})

const id = ref(useRoute().params.id);

onBeforeMount(() => {
    (async function () {

        const course = await courseApi.getRow({ id: id.value });
        post.value = course.data.data;
        console.log(course.data.data)
        console.log(post.value)

        // Select option có 2 thuộc tính
        selected.value.id = course.data.data.id_language 
        selected.value.name = course.data.data.name_language

    })()

})

onMounted(() => {
    (async function () {
        const res = await languageApi.getAll();
        // console.log(res.data.data)
        languages.value = res.data.data;   
    })()

})

function onChange() {
    post.value.id_language = selected.value.id;
    post.value.name_language = selected.value.name;
    // console.log(id_language.value)
    // console.log(selected.value)
}
function onChange1(event) {
    post.value.level = event.target.value;
    console.log(post.value.level)
}

const router = useRouter()
const toast = inject('toast');


async function submitForm() {
    const formData = new FormData();
    formData.append("image", file.value);
    formData.append("old_image", post.value.image);
    formData.append("name", post.value.name);
    formData.append("name_language", post.value.name_language);
    formData.append("description", post.value.description);
    formData.append("id_language", post.value.id_language);
    formData.append("level", post.value.level);
    console.log(JSON.stringify(Object.fromEntries(formData)));

    await axiosClient.put('http://localhost:3000/api/course/'+id.value , formData).then(() => {
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
}


</script> 

<style>

</style>