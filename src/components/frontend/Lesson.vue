<template>
        <div class="Content">
    <div class="banner-lesson">
        <img class="img-banner-lesson" src="../../assets/images/banner-lesson.jpg" alt="">

        <div class="text-banner-container">
            <h2>{{ course_data.name }}</h2>
            <div class="row">
                <div class="col col-xl=4 border-r full-height">
                    {{ course_data.description }}
                </div>
                <div class="col col-xl=4 border-r full-height">
                    <div class="row mb-3"> <div class="size-img col-5 "><img class="logo_course " :src="require('../../assets/images/clock.png')" > Thời gian</div>  <div class="text-custom col-7">{{ lesson_data.length }} hours</div></div>
                    <div class="row mb-3"> <div class="size-img col-5 "><img class="logo_course " :src="require('../../assets/images/stack.png')" > Số lượng bài</div>  <div class="text-custom col-7">{{ lesson_data.length }} bài</div></div>
                    <div class="row mb-3"> <div class="size-img col-5 "><img class="logo_course " :src="require('../../assets/images/everyone.png')" > Đối tượng</div>  <div class="text-custom col-7">Mọi người</div></div>
                </div>
                <div class="col col-xl=4">
                    <div class="row mb-3"> <div class="size-img col-5 "><img class="logo_course " :src="require('../../assets/images/icon_level.png')" > Cấp độ</div>  <div class="text-custom col-7">{{ course_data.level }}</div></div>
                    <div class="row mb-3"> <div class="size-img col-5 "><img class="logo_course " :src="require('../../assets/images/language.png')" > Lĩnh vực</div>  <div class="text-custom col-7">{{ course_data.name_language }}</div></div>
                    <div class="row mb-3"> <div class="size-img col-5 "><img class="logo_course " :src="require('../../assets/images/schedule.png')" > Ngày tạo</div>  <div class="text-custom col-7">{{ convertDate(course_data.createdAt)  }}</div></div>
                </div>
            </div>
        </div>
    </div>

    <div v-if="lesson_data.length>0" class="container-xl">
        <div class="col col-12 p-0">
            <h3 class="title-block">Tất cả bài học</h3>
        </div>

        <div class="courses">
            <div class="row">
                <div v-for="(lesson, index) in lesson_data" :key="index" class="col col-3">
                    <div class="course-item">
                        <div class="img-size">
                            <img class="logo_course " :src="require('../../assets/images/'+course_data.image)" >
                            <div class="container_action">
                                <div class="row">
                                    <div class="col-4"><i class="fa-solid fa-chalkboard-user"></i></div>
                                    <div class="col-4"><i class="fa-sharp fa-solid fa-heart"></i></div>
                                    <div class="col-4">3</div>
                                </div>
                            </div>
                        </div>
                        <div class="course-info">
                            <div class="course-item-name">Bài {{index+1}}: {{ lesson.name }}</div>
                            <p class="course-item-description"><strong>Khóa: </strong>{{ lesson.name_course }} </p>
                            <p class="course-item-description"><strong>Ngày tạo: </strong>{{ convertDate(lesson.createdAt) }} </p>
                            <p class="course-item-description"><strong>Trạng thái: </strong>chưa học </p>
                           
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>

    </div>
</template>

<script setup>
import {ref,onMounted  } from "vue";
import {  useRoute } from 'vue-router'
import lessonApi from '@/api-frontend/lessonApi';
import courseApi from '@/api-frontend/courseApi';

const id = ref(useRoute().params.id);
const course_data = ref({});
const lesson_data = ref([]);
console.log(id.value);

onMounted(()=>{
    (async function (){
        const courseData = await courseApi.getbyid({id : id.value});
        const lessonData = await lessonApi.getAllbyid({id : id.value});
        course_data.value = courseData.data.data;
        lesson_data.value = lessonData.data.data
        console.log(course_data.value)
        console.log(lesson_data.value)
    }   
    )()
})

function convertDate(value) {
    const date = new Date(value);
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const result = date.toLocaleDateString('vi-VN', options).replace(/\//g, '-');
    return result
}

</script>

<style scoped>
.banner-lesson{
    height: 400px;
    position: relative;
}
img.img-banner-lesson {
    width: 100%;
    object-fit: cover;
    height: 100%;
    filter: brightness(0.90);
}

.text-banner-container{
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 30px;
    height: 300px;
    border: 1px solid #2d4569;
    border-radius: 6px;
    background-color: #2d4569;
    max-width: 1320px;
    width: 100%;
}
.container-xl{
    padding: 100px 0 0 0;
}
.text-banner-container{
    color: white;
}
.text-custom{
    text-align: end;
    line-height: 40px;
}
.border-r{
    border-right: 1px solid #ccc;
    height: 100%;
}
.full-height{
    height: 200px;
}
.course-info {
height: 100%;
}
.img-size{
    position: relative;
}
.img-size:hover .container_action{
    top: 50%;
    opacity: 1;
}
.container_action{
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%,-50%);
    opacity: 0;
    transition: 0.3s;
}
</style>