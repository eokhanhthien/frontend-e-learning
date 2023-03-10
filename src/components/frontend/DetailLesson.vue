<template>
    <div class="Content">
        <div class="banner-detail">
            <!-- <img class="img-banner-lesson-detail" src="../../assets/images/detail-lesson.jpg" alt=""> -->
            <div class="banner-text">
                <h2 class="banner-text-title">Học, học nữa, học mãi</h2>
                <p>Khóa học lập trình không chỉ đơn thuần là học ngôn ngữ lập trình, mà còn cung cấp cho bạn một cái nhìn tổng quan về quá trình phát triển phần mềm, từ khâu thiết kế đến triển khai và bảo trì sản phẩm</p>
                <p>Khóa học lập trình không chỉ giúp bạn có thể trở thành một lập trình viên chuyên nghiệp, mà còn giúp bạn phát triển tư duy logic, sự kiên nhẫn và khả năng tự học tập. Đây là những kỹ năng cần thiết không chỉ trong lĩnh vực công nghệ mà còn trong cuộc sống hàng ngày.</p>
            </div>
        </div>
        <div class="container-xl">
            <div v-if="detaiLesson.createdAt" class="time-create"><i class="fa-regular fa-clock mt-4"></i> Ngày tạo: {{convertDate(detaiLesson.createdAt)}}</div>
            <div v-if="videoId" class="video-lesson mt-4">
                <div class="title-h">Video bài học</div>
                <iframe :src="'https://www.youtube.com/embed/' + videoId"></iframe>
            </div>

            <div class="title-h">Lý thuyết</div>
            <div v-html="detaiLesson.content"></div>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted, } from "vue";
import lessonApi from '@/api-frontend/lessonApi';
import { useRoute } from 'vue-router'

const id = ref(useRoute().params.id);
const detaiLesson = ref({})
const videoId = ref(null);
onMounted(() => {
    (async function () {
        const lessonDetailData = await lessonApi.getDetaillesson({ id: id.value });
        detaiLesson.value = lessonDetailData.data.data
console.log(detaiLesson.value)
        getIDvideo()

    }
    )()

})

function getIDvideo() {
    const div = document.createElement('div');
    div.innerHTML = detaiLesson.value.content;
    const oembed = div.querySelector('oembed');
    if (oembed) {
        const url = oembed.getAttribute('url');
        const videoIdMatch = url.match(/v=([^&]+)/);
        if (videoIdMatch) {
            videoId.value = videoIdMatch[1];
            console.log(videoId.value)
        }
    }
}

function convertDate(value) {
    const date = new Date(value);
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const result = date.toLocaleDateString('vi-VN', options).replace(/\//g, '-');
    return result
}

// function getIDvideos() {
//     const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([\w-]+)/gm;
//     const videoIds = [];
//     let match;

//     while ((match = regex.exec(detaiLesson.value.content)) !== null) {
//         videoIds.push(match[1]);
//     }

//     console.log(videoIds);
// }
</script>




<style>
/* .banner-detail {
    height: 500px;
    width: 100%;
} */

.banner-detail{
    height: 500px;
    width: 100%;
    background-image: url('../../assets/images/detail-lesson.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position-y: bottom;
}

h2.banner-text-title {
    color: blue;
    font-weight: 600;
    font-family: monospace;
}
.banner-text p{
    font-family: monospace;
    color: white !important;
}
.banner-text {
    position: absolute;
    top: 30%;
    left: 50%;
    width: 1300px;
    padding: 30px 20px;
    transform: translate(-50%,-50%);
    /* background-color: #b3d4fc; */
    background-image: linear-gradient(to right , #060606, rgba(0, 0, 0, 0) 1100px);
}

.video-lesson iframe {
    width: 100%;
    height: 700px;
}

.title-h{
    background-color: aliceblue;
    padding: 10px;
    border-radius: 6px;
    color: #28a745;
    /* text-align: center; */
    margin: 10px 0;
    font-size: 24px;
    font-weight: 600;
}
.time-create{
    color: blue;
}
</style>