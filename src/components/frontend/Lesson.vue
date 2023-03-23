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
                        <div class="row mb-3">
                            <div class="size-img col-5 "><img class="logo_course "
                                    :src="require('../../assets/images/clock.png')"> Thời gian</div>
                            <div class="text-custom col-7">{{ lesson_data.length }} hours</div>
                        </div>
                        <div class="row mb-3">
                            <div class="size-img col-5 "><img class="logo_course "
                                    :src="require('../../assets/images/stack.png')"> Số lượng bài</div>
                            <div class="text-custom col-7">{{ lesson_data.length }} bài</div>
                        </div>
                        <div class="row mb-3">
                            <div class="size-img col-5 "><img class="logo_course "
                                    :src="require('../../assets/images/everyone.png')"> Đối tượng</div>
                            <div class="text-custom col-7">Mọi người</div>
                        </div>
                    </div>
                    <div class="col col-xl=4">
                        <div class="row mb-3">
                            <div class="size-img col-5 "><img class="logo_course "
                                    :src="require('../../assets/images/icon_level.png')"> Cấp độ</div>
                            <div class="text-custom col-7">{{ course_data.level }}</div>
                        </div>
                        <div class="row mb-3">
                            <div class="size-img col-5 "><img class="logo_course "
                                    :src="require('../../assets/images/language.png')"> Lĩnh vực</div>
                            <div class="text-custom col-7">{{ course_data.name_language }}</div>
                        </div>
                        <div class="row mb-3">
                            <div class="size-img col-5 "><img class="logo_course "
                                    :src="require('../../assets/images/schedule.png')"> Ngày tạo</div>
                            <div class="text-custom col-7">{{ convertDate(course_data.createdAt) }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-xl">
            <div v-if="is_Login == true">
                <div v-if="isjoinCourse == true">
                    <div class="col col-12 p-0">
                        <h3 class="title-block">Tất cả bài học ({{ lesson_data.length }})</h3>
                    </div>

                    <div class="courses">
                        <div class="row">
                            <div v-for="(lesson, index) in lesson_data" :key="index" class="col col-3">
                                <div class="course-item">
                                    <div class="img-size">
                            <img class="thumnail_course" :src="require('../../assets/images/'+course_data.image )" aspect-ratio="2.75" >
                            <div class="img-size-view">
                                <!-- <router-link :to="'lesson/'+course._id" class="a_link">Tham gia</router-link> -->
                                <div class="btn btn-primary" type="button"><router-link :to="'/detail-lesson/'+lesson._id" class="a_link">Học bài</router-link></div>
                            
                            </div>
                        </div>
                                    <div class="course-info">
                                        <div class="course-item-name">Bài {{ index + 1 }}: {{ lesson.name }}</div>
                                        <p class="course-item-description"><strong>Khóa: </strong>{{ lesson.name_course }}
                                        </p>
                                        <p class="course-item-description"><strong>Ngày tạo: </strong>{{
                                            convertDate(lesson.createdAt) }} </p>
                                        <p class="course-item-description"><strong>Trạng thái: </strong>chưa học </p>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div v-if="isjoinCourse == false">

                    <div class="row mt-5">
                        <div class="col-xl-6">
                            <img src="../../assets/images/join.jpg" alt="">
                        </div>
                        <div class="col-xl-6">
                            <div @click="handleJoin" class="wrap">
                                <button class="button">Tham gia</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div v-else class="login_to_learn_size">
                <img class="login_to_learn" :src="require('../../assets/images/login_to_learn.jpg')">
                <p class="text-center">Vui lòng đăng nhập để tiếp tục khóa học</p>
            </div>
        </div>


        <!-- <div v-else class="container-xl">


        </div> -->

    </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { useRoute } from 'vue-router'
import lessonApi from '@/api-frontend/lessonApi';
import courseApi from '@/api-frontend/courseApi';
import joinCourseApi from '@/api-frontend/joinCourseApi';

import { useStore } from "../../Pinia/store.js"

// Store và state trong store
const store = useStore();
const is_Login = computed(() => store.is_Login);

// Kiểm tra trạng thái đăng nhập
const isLogin = ref(false)

// Dữ liwwụ khóa học và bài học
const course_data = ref({});
const lesson_data = ref([]);

// Kiểm tra trạng thái tham gia khóa học->có - chưa --> đặt là true hoặc trên v-if lấy ! trước để k bị load hình trước
const isjoinCourse = ref()

const id = ref(useRoute().params.id);
// Chứa thông tin user đăng nhập
const infoUserLogin = ref({});


onMounted(() => {
    (async function () {
        try {
            const courseData = await courseApi.getbyid({ id: id.value });
            const lessonData = await lessonApi.getAllbyid({ id: id.value });


            course_data.value = courseData.data.data;
            lesson_data.value = lessonData.data.data
            // console.log(course_data.value)
            // console.log(lesson_data.value)
            const info = JSON.parse(localStorage.getItem('user_nomal'))

            // console.log(id.value);
            // console.log(info._id);
            if (info) {
                const joinCourse = await joinCourseApi.get_join_course({ id_user: info._id, id_course: id.value });
                // console.log(joinCourse.data.data)
                if (joinCourse.data.data) {
                    isjoinCourse.value = true;
                }
                else {
                    isjoinCourse.value = false;
                }
            }

        } catch (error) {
            console.log(error)
        }

    }
    )()

})


watch(is_Login, async (newValue, oldValue) => {
    const info = JSON.parse(localStorage.getItem('user_nomal'))
    if (newValue !== oldValue) {
        const joinCourse = await joinCourseApi.get_join_course({ id_user: info._id, id_course: id.value });
        // console.log(joinCourse.data.data)
        if (joinCourse.data.data) {
            isjoinCourse.value = true;
        }
        else {
            isjoinCourse.value = false;
        }
    }
});

function convertDate(value) {
    const date = new Date(value);
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const result = date.toLocaleDateString('vi-VN', options).replace(/\//g, '-');
    return result
}

async function handleJoin() {
    const info = JSON.parse(localStorage.getItem('user_nomal'))
    const joinCourse = await joinCourseApi.add_join_course({ id_user: info._id, id_course: id.value });

    // gọi lại cho reload data
    if (joinCourse) {
        const joinCourse = await joinCourseApi.get_join_course({ id_user: info._id, id_course: id.value });
        if (joinCourse.data.data) {
            isjoinCourse.value = true;
        }
        else {
            isjoinCourse.value = false;
        }
    }
}
</script>

<style scoped>
.banner-lesson {
    height: 400px;
    position: relative;
}

img.img-banner-lesson {
    width: 100%;
    object-fit: cover;
    height: 100%;
    filter: brightness(0.90);
}

.text-banner-container {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 30px;
    height: 300px;
    border: 1px solid #2d4569;
    border-radius: 6px;
    background-color: #2d4569;
    max-width: 1320px;
    width: 100%;
}

.container-xl {
    padding: 100px 0 0 0;
}

.text-banner-container {
    color: white;
}

.text-custom {
    text-align: end;
    line-height: 40px;
}

.border-r {
    border-right: 1px solid #ccc;
    height: 100%;
}

.full-height {
    height: 200px;
}

.course-info {
    height: 100%;
}



.container_action {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: 0.3s;
    font-size: 26px;
    color: rgb(37, 37, 37);
}

.login_to_learn_size {
    width: 60%;
    margin: auto;
}
</style>


<!-- Nút tham gia -->
<style scoped>
.wrap {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.button {
    min-width: 300px;
    min-height: 60px;
    font-family: 'Nunito', sans-serif;
    font-size: 22px;
    text-transform: uppercase;
    letter-spacing: 1.3px;
    font-weight: 700;
    color: #313133;
    background: #4FD1C5;
    background: linear-gradient(90deg, rgba(129, 230, 217, 1) 0%, rgba(79, 209, 197, 1) 100%);
    border: none;
    border-radius: 1000px;
    box-shadow: 12px 12px 24px rgba(79, 209, 197, .64);
    transition: all 0.3s ease-in-out 0s;
    cursor: pointer;
    outline: none;
    position: relative;
    padding: 10px;
}

button::before {
    content: '';
    border-radius: 1000px;
    min-width: calc(300px + 12px);
    min-height: calc(60px + 12px);
    border: 6px solid #00FFCB;
    box-shadow: 0 0 60px rgba(0, 255, 203, .64);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all .3s ease-in-out 0s;
}

.button:hover,
.button:focus {
    color: #313133;
    transform: translateY(-6px);
}

button:hover::before,
button:focus::before {
    opacity: 1;
}

button::after {
    content: '';
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 6px solid #00FFCB;
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ring 1.5s infinite;
}

button:hover::after,
button:focus::after {
    animation: none;
    display: none;
}

@keyframes ring {
    0% {
        width: 30px;
        height: 30px;
        opacity: 1;
    }

    100% {
        width: 300px;
        height: 300px;
        opacity: 0;
    }

}

</style>

<style scoped>
.course-item:hover .img-size-view {
    transform: translate(210px,-203%);
    /* opacity: 1; */
    cursor: pointer;
}

.img-size-view {
    position: absolute;
    top: 115%;
    /* left: 78%; */
    transform: translate(210px,0%);
    font-size: 23px;
    font-weight: 700;
    /* bottom: 94px; */
    /* opacity: 0; */
    transition: 0.3s;
}
</style>