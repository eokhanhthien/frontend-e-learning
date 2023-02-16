<template>
    <div class="Content">
    <div class="banner">
        <img class="img-banner" src="../../assets/images/new-banner-list-courses.png" alt="">

        <div class="text-banner-container">
            <p class="text-banner">Học lập trình trực tuyến. Hãy bắt đầu với khóa học đầu tiên của bạn!</p>
            <input type="text" class="search-box" placeholder="Nhập khóa học cần tìm ...">
        </div>
    </div>

    <div class="container-xl">
        <div class="col col-12">
            <h3 class="title-block">Kiến thức cơ sở</h3>
        </div>

        <div class="courses">
            <div class="row">

                <div class="col col-3" v-for="(course,index) in courses" v-bind:key="index">
                    <div class="course-item">
                        <div class="img-size">
                            <img class="thumnail_course" :src="require('../../assets/images/'+course.image )" aspect-ratio="2.75" >
                            <div class="img-size-view">Tham gia</div>
                        </div>
                        <div class="course-info">
                            <div class="course-item-name">{{ course.name }}</div>
                            <p class="course-item-description">{{ course.description }}</p>
                        <div class="course-info-nav">
                            <p> <strong>Tên khóa học: </strong>  {{ course.name }}</p>
                            <!-- <p> <strong>Mô tả: </strong>  {{ course.description }}</p> -->
                            <!-- <img class="logo_course" :src="require('../../assets/images/logo_'+course.name_language+'.jpg' )" >  -->
                            <p> <img src="../../assets/images/language.png" alt=""> <strong>Lĩnh vực: </strong><strong>{{ course.name_language }} </strong> </p>
                            <p> <img src="../../assets/images/icon_level.png" alt=""> <strong>Cấp độ: </strong>  {{ course.level }}</p>
                            <p> <img src="../../assets/images/icon_people.png" alt=""> <strong>Đối tượng: </strong> mọi người </p>
                            <p> <img src="../../assets/images/icon_online.png" alt=""> <strong>Hình thức: </strong> online  </p>
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>


        <div class="col col-12">
            <h3 class="title-block">Lập trình cơ sở</h3>
        </div>
        <div class="courses">
            <div class="row">
                <div class="col col-3">
                    <div class="course-item">
                        <div class="img-size">
                            <img src="../../assets/images/h1.jpg" alt="">
                        </div>
                        <div class="course-info">
                            <div class="course-item-name">Lập trình hướng đối tượng trong C++</div>
                            <p class="course-item-description">Lập trình hướng đối tượng (Object-Oriented-Programming) là phương pháp lập trình dự</p>
                        </div>
                    </div>
                </div>

                <div class="col col-3">
                    <div class="course-item">
                        <div class="img-size">
                            <img src="../../assets/images/h1.jpg" alt="">
                        </div>
                        <div class="course-info">
                            <div class="course-item-name">Lập trình hướng đối tượng trong C++</div>
                            <p class="course-item-description">Lập trình hướng đối tượng (Object-Oriented-Programming) là phương pháp lập trình dự</p>
                        </div>
                    </div>
                </div>                
                
                <div class="col col-3">
                    <div class="course-item">
                        <div class="img-size">
                            <img src="../../assets/images/h1.jpg" alt="">
                        </div>
                        <div class="course-info">
                            <div class="course-item-name">Lập trình hướng đối tượng trong C++</div>
                            <p class="course-item-description">Lập trình hướng đối tượng (Object-Oriented-Programming) là phương pháp lập trình dự</p>
                        </div>
                    </div>
                </div>                
                
                <div class="col col-3">
                    <div class="course-item">
                        <div class="img-size">
                            <img src="../../assets/images/h1.jpg" alt="">
                        </div>
                        <div class="course-info">
                            <div class="course-item-name">Lập trình hướng đối tượng trong C++</div>
                            <p class="course-item-description">Lập trình hướng đối tượng (Object-Oriented-Programming) là phương pháp lập trình dự</p>
                        </div>
                    </div>
                </div>                
                
                <div class="col col-3">
                    <div class="course-item">
                        <div class="img-size">
                            <img src="../../assets/images/h1.jpg" alt="">
                        </div>
                        <div class="course-info">
                            <div class="course-item-name">Lập trình hướng đối tượng trong C++</div>
                            <p class="course-item-description">Lập trình hướng đối tượng (Object-Oriented-Programming) là phương pháp lập trình dự</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    </div>
  
</template>

<script setup>
import { ref, onMounted } from 'vue'
import frontendApi from '@/api-frontend/courseApi';


const courses = ref([]);
onMounted(() => {
    (async function () {
        const res = await frontendApi.getAll();
        console.log(res.data.data)
        courses.value = res.data.data;
        console.log(courses.value)

    })()
})

</script>

<style>
.Content{
    margin-top: 70px;
}
.banner{
    position: relative;
}
.text-banner-container{
    position: absolute;
    top: 10%;
    left: 16%;
}
p.text-banner {
    font-size: 24px;
    color: white;
    font-weight: 700;
}
input.search-box {
    padding: 10px 20px;
    width: 50%;
    border-radius: 6px;
    outline: none;
}
.title-block {
    margin: 30px 0;
    font-size: 28px;
    color: #3b3c54;
    font-weight: 700;
}
.img-size{
    overflow: hidden;
    position: relative;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px; 
}
.img-size-view{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 23px;
    color:rgb(255, 255, 255);
    font-weight: 700;
    bottom: 50%;
    opacity: 0;
    transition: 0.3s;
}
.img-size img{
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-top-left-radius:4px;
    border-top-right-radius:4px;
    transition: 0.3s;
}
img.img-banner {
    width: 100%;
}

.course-item-name{
    color: #172b4d;
    font-size: 20px;
    font-weight: 600;
    margin: 10px 0;
}
.course-item-description{
    color: #42526e;
    font-size: 15px;
}
.course-item{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    /* padding: 0px 0 20px 0; */
    border-radius: 8px;
    margin-bottom: 40px;

    }
.course-info {
    padding: 10px 10px;
    position: relative;
    overflow: hidden;
    /* cursor: pointer; */
    height: 240px;
}
.course-info-nav{
    position: absolute;
    background-color: #ffffff;
    top: 0;
    left: -100%;
    bottom: 0;
    width: 100%;
    transition: 0.3s;
    padding: 10px 10px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    overflow: hidden;
}
.course-item:hover .course-info-nav{
    left: 0%;
}

.course-item:hover .thumnail_course{
    transform: scale(1.1);
    filter: blur(3px) brightness(60%);
}

.course-item:hover .img-size-view{
    bottom: 30%;
    opacity: 1;
    cursor: pointer;
}
.img-size-view:hover{
    color: rgb(146, 206, 255);
}
.logo_course{
    width: 40px;
}
</style>