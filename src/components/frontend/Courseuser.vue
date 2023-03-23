<template>
    <div class="Content">
        <div class="banner-course-user">
            <img class="img-banner-lesson-detail" src="../../assets/images/course_user.jpg" alt="">
        </div>
        <div class="container-xl">
            <div class="col col-12">
                <h3 class="title-block">Khóa học đã tham gia ({{ courses.length }}) </h3>
            </div>

        <div class="courses">
            <div class="row">

                <div class="col col-3" v-for="(course,index) in courses" v-bind:key="index">
                    <div class="course-item">
                        <div class="img-size">
                            <img v-if="course.image" class="thumnail_course" :src="require('../../assets/images/'+course.image )"  >
                
                            <div class="img-size-view">
                                <!-- <router-link :to="'lesson/'+course._id" class="a_link">Tham gia</router-link> -->
                                <button class="btn btn-primary" type="button"><router-link :to="'lesson/'+course._id" class="a_link">Truy cập</router-link></button>
                            
                            </div>
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
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import frontendApi from '@/api-frontend/courseApi';
const infoUserLogin = ref({});
const courses = ref([]);
const Imagebanner = ref();
onMounted ( () =>{
    ( async function() {
        try {
            infoUserLogin.value = JSON.parse(localStorage.getItem('user_nomal'))
            // console.log(infoUserLogin.value)
           const res = await frontendApi.getmycourse({id : infoUserLogin.value._id})
           console.log(res.data.data)
           courses.value = res.data.data;

        } catch (error) {
            console.log(error)
        }       
    })() 

    Imagebanner.value = document.querySelector(".img-banner-lesson-detail")
    window.addEventListener('scroll', handleScroll);
})




let prevScrollY = 0;
const handleScroll = () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > prevScrollY && currentScrollY > 70) {
    Imagebanner.value.classList.add('active-Imagebanner')
    // console.log('down');
    // console.log(prevScrollY);
  } else if (currentScrollY < 70) {
    Imagebanner.value.classList.remove('active-Imagebanner')
    // console.log('up');
  }
  prevScrollY = currentScrollY;
};

</script>

<style>
.banner-course-user {
    height: 400px;
    overflow: hidden;
}

.banner-course-user img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.img-banner-lesson-detail{
    transform:  scale(1);
    transition: 0.3s;
}
.active-Imagebanner{
    transform:  scale(1.05);
}

</style>

<style scoped>
.Content{
    overflow: hidden;
}
</style>