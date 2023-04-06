<template>
      <div class="Content br-custom">
        <div class="container-xl pt-4 pb-4">
                <div class="row ">
                    <div class="col-xl-3 ">
                        <div class=" br-custom-item fixed-height">
                        <div class="tag-custom"><router-link class="link-custom" to="/info-user"> Thông tin & Liên hệ</router-link></div>
                        <div class="tag-custom"><router-link class="link-custom" to="/info-user-edit"> Thay đổi thông tin người dùng</router-link></div>
                        <div class="tag-custom"><router-link class="link-custom" to="/info-user-edit-pass"> Thay đổi mật khẩu</router-link></div>

                        </div>
                    </div>
                    <div class="col-xl-9 ">
                        <div class=" br-custom-item fixed-height">
                            <div class="title-info">
                                Thông tin
                            </div>
                            <div class="row g-0 mt-3">
                                <div class="col-3">
                                    <p class="">Ảnh đại diện</p>
                                    <div v-if="infoUserLogin.image" class="img-size-info">
                                        <img :src="infoUserLogin.image" alt="">
                                    </div>
                                    <div v-else  class="img-size-info">
                                        <img :src="require('../../assets/images/user-default.png')" alt="">
                                    </div>
                                    
                                </div>
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-5"><p>Họ và tên</p> </div>
                                        <div class="col-7"><p>{{ infoUserLogin.name }}</p> </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-5"><p>Ngày sinh</p> </div>
                                        <div class="col-7"><p>{{ infoUserLogin.birthday }}</p> </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-5"><p>Giới tính</p> </div>
                                        <div class="col-7"><p>{{ infoUserLogin.sex }}</p> </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-5"><p>Email</p> </div>
                                        <div class="col-7"><p>{{ infoUserLogin.email }}</p> </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-5"><p>Tỉnh thành</p> </div>
                                        <div class="col-7"><p>{{ infoUserLogin.city }}</p> </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-5"><p>Huyện/ Quận</p> </div>
                                        <div class="col-7"><p>{{ infoUserLogin.district }}</p> </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-5"><p>Xã/ Phường</p> </div>
                                        <div class="col-7"><p>{{ infoUserLogin.ward }}</p> </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-5"><p>Số điện thoại</p> </div>
                                        <div class="col-7"><p>{{ infoUserLogin.phonenumber }}</p> </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-5"><p>Ngày tham gia</p> </div>
                                        <div class="col-7"><p>{{ infoUserLogin.createdAt }}</p> </div>
                                    </div>
                                    <!-- <div class="row">
                                        <div class="col-3"><p>Full name</p> </div>
                                        <div class="col-3"><p>{{ infoUserLogin.name }}</p> </div>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
      </div>
</template>

<script setup>
import { onMounted , ref} from "vue";
const infoUserLogin = ref({});

onMounted(()=>{
    infoUserLogin.value = JSON.parse(sessionStorage.getItem('user_nomal'))
    console.log(infoUserLogin.value)
})

</script>

<style >
.br-custom{
    background-color: #fdfdfd;
}

.br-custom-item{
    background-color: #ffffff;
    padding: 30px;
}

.fixed-height{
    height: 600px;
    box-shadow: rgb(189 189 189 / 2%) 0px 1px 3px 0px, rgb(181 185 189 / 15%) 0px 0px 0px 1px;
}
.title-info {
    font-size: 22px;
    font-weight: 600;
    color: blue;
}
.img-size-info {
    width: 100px;
    height: 100px;
    border: 6px solid #000000;
    border-radius: 50%;
    overflow: hidden;
}
.img-size-info img{
    width: 100%;
}

a.link-custom {
    color: #4c4c4c;
    font-weight: 600;
    line-height: 30px;
    text-decoration: none !important;
}
.tag-custom {
    margin: 0 0 16px 0px;
    border-bottom: 1px solid #ccc;
}
</style>