<template>
    <div class="Content br-custom">
        <div class="container-xl pt-4 pb-4">
            <div class="row ">
                <div class="col-xl-3 ">
                    <div class=" br-custom-item fixed-height">
                        <div><router-link class="link-custom" to="/info-user"> Thông tin & Liên hệ</router-link></div>
                        <div><router-link class="link-custom" to="/info-user-edit"> Thay đổi thông tin người
                                dùng</router-link></div>
                        <div>Thay đổi mật khẩu</div>
                    </div>
                </div>


                <div class="col-xl-9 ">
                    <form ref="form" @submit.prevent="submitForm" enctype="multipart/form-data">
                    <div class=" br-custom-item fixed-height">
                        <div class="title-info">
                            Thay đổi thông tin cá nhân
                        </div>
                        <div class="row g-0 mt-3">
                            <div class="col-3">
                                    <p class="">Ảnh đại diện</p>
                                    <div v-if="infoUserLogin.image" class="img-size-info">
                                        <img :src="require('../../assets/images/' + infoUserLogin.image)" alt="">

                                    </div>
                                    <div v-else  class="img-size-info">
                                        <img :src="require('../../assets/images/user-default.png')" alt="">

                                    </div>
                                    
                                </div>
                            <div class="col-6">
                                <div class="row">
                                    <div class="col-5">
                                        <p>Họ và tên</p>
                                    </div>
                                    <div class="col-7"> <input class="form-control" type="text" v-model="infoUserLogin.name" > </div>
                                </div>
                                <div class="row">
                                    <div class="col-5">
                                        <p>Email</p>
                                    </div>
                                    <div class="col-7"> <input class="form-control" type="text" v-model="infoUserLogin.email" disabled> </div>
                                </div>
                                <div class="row">
                                    <div class="col-5">
                                        <p>Ngày sinh</p>
                                    </div>
                                    <div class="col-7"> <input class="form-control" type="date" v-model="infoUserLogin.birthday"> </div>
                                </div>
                                <div class="row">
                                    <div class="col-5">
                                        <p>Giới tính</p>
                                    </div>
                                    <div class="col-7"> 
                                        <select class="form-select" aria-label="Default select example" v-model="infoUserLogin.sex">
                                            <option selected>Chọn giới tính</option>
                                            <option value="Nam">Nam</option>
                                            <option value="Nữ">Nữ</option>
                                        </select> 
                                    </div>
                                </div>

                                <div class="row mt-2">
                                    <div class="col-5">
                                        <p>Địa chỉ</p>
                                    </div>
                                    <div class="col-7">

                                        <!-- Chọn tỉnh thành -->
                                        <div>
                                            <div>
                                                <select class="form-select form-select-sm mb-3" v-model="selectedCity"
                                                    aria-label=".form-select-sm">
                                                    <option value="" selected>Chọn tỉnh thành</option>
                                                    <option v-for="city in cities" :key="city.Id" :value="city.Name">{{
                                                        city.Name }}
                                                    </option>
                                                </select>
                                                <select class="form-select form-select-sm mb-3" v-model="selectedDistrict"
                                                    aria-label=".form-select-sm">
                                                    <option value="" selected>Chọn quận huyện</option>
                                                    <option v-for="district in districts" :key="district.Id"
                                                        :value="district.Name">{{
                                                            district.Name }}</option>
                                                </select>
                                                <select class="form-select form-select-sm" v-model="selectedWard"
                                                    aria-label=".form-select-sm">
                                                    <option value="" selected>Chọn phường xã</option>
                                                    <option v-for="ward in wards" :key="ward.Id" :value="ward.Name">{{
                                                        ward.Name }}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="row mt-1">
                                    <div class="col-5">
                                        <p>Số điện thoại</p>
                                    </div>
                                    <div class="col-7"> <input class="form-control" type="text" v-model="infoUserLogin.phonenumber"></div>
                                </div>
                         
                            <button class="btn btn-primary" type="submit" >Cập nhật</button>

                            </div>




                        </div>
                    </div>
                </form>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted, inject } from 'vue';
import axios from 'axios';
import userApi from '@/api-frontend/userApi';


const infoUserLogin = ref({});

onMounted(()=>{
    infoUserLogin.value = JSON.parse(localStorage.getItem('user_nomal'))



    const date = new Date(infoUserLogin.value.birthday);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const formattedDate = `${year}-${month}-${day}`;
    infoUserLogin.value.birthday = formattedDate;
})

const toast = inject('toast');

async function handlesubmit() {
    if(selectedCity.value.length == 0 && selectedDistrict.value.length == 0 && selectedWard.value.length == 0 ){
            // Chuyển định dạng ngày
            const date = new Date(infoUserLogin.value.birthday);
            const year = date.getFullYear();
            const month = ('0' + (date.getMonth() + 1)).slice(-2);
            const day = ('0' + date.getDate()).slice(-2);
            const formattedDate = year + '-' + month + '-' + day + 'T00:00:00Z';
            infoUserLogin.value.birthday = formattedDate;

            console.log(infoUserLogin.value)
            const res = await userApi.changeinfo({ post: infoUserLogin.value }).then(() => {
                toast.success('Sửa thông tin thành công');
      })
    }else{
        try {
            infoUserLogin.value.city = selectedCity.value;
            infoUserLogin.value.district = selectedDistrict.value;
            infoUserLogin.value.ward = selectedWard.value;

            // Chuyển định dạng ngày
            const date = new Date(infoUserLogin.value.birthday);
            const year = date.getFullYear();
            const month = ('0' + (date.getMonth() + 1)).slice(-2);
            const day = ('0' + date.getDate()).slice(-2);
            const formattedDate = year + '-' + month + '-' + day + 'T00:00:00Z';
            infoUserLogin.value.birthday = formattedDate;

            console.log(infoUserLogin.value)
            const res = await userApi.changeinfo({ post: infoUserLogin.value }).then(() => {
                toast.success('Sửa thông tin thành công');
      })

        } catch (error) {
            console.log(infoUserLogin.value)          
        }


    }
    // console.log(infoUserLogin.value)
    // console.log(selectedCity.value)
    // console.log(selectedDistrict.value)
    // console.log(selectedWard.value)
}

// Chọn tỉnh thành--------------------------------------------
const selectedCity = ref('');
const selectedDistrict = ref('');
const selectedWard = ref('');

const cities = ref([]);
const districts = ref([]);
const wards = ref([]);

const fetchData = async () => {
    const response = await axios.get('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json');
    cities.value = response.data;
};

const filterDistricts = () => {
    if (selectedCity.value !== '') {
        const city = cities.value.find(city => city.Name === selectedCity.value);
        districts.value = city.Districts;
    } else {
        districts.value = [];
        wards.value = [];
    }
};

const filterWards = () => {
    if (selectedDistrict.value !== '') {
        const city = cities.value.find(city => city.Name === selectedCity.value);
        const district = city.Districts.find(district => district.Name === selectedDistrict.value);
        wards.value = district.Wards;
    } else {
        wards.value = [];
    }
};

watch(selectedCity, filterDistricts);
watch(selectedDistrict, filterWards);

fetchData();
// Chọn tỉnh thành--------------------------------------------


// Select file
const file = ref('');
function selectFile(e) {

const files = e.target.files[0]
file.value = files;
console.log(file.value);
}


// Handle up dữ liệu
async function submitForm() {
    // const formData = new FormData();
    // formData.append("image", file.value);
    // formData.append("old_image", infoUserLogin.value.image);
    // formData.append("_id", infoUserLogin.value._id);
    // formData.append("name", infoUserLogin.value.name);
    // formData.append("email", infoUserLogin.value.email);
    // // formData.append("password", infoUserLogin.value.password);
    // formData.append("city", infoUserLogin.value.city);
    // formData.append("district",  infoUserLogin.value.district);
    // formData.append("ward",  infoUserLogin.value.ward);
    // formData.append("phonenumber",  infoUserLogin.value.phonenumber);
    // formData.append("birthday",  infoUserLogin.value.birthday);
    // formData.append("sex",  infoUserLogin.value.sex);
    // formData.append("role",  infoUserLogin.value.role);
    // console.log(formData);

    if(selectedCity.value.length == 0 && selectedDistrict.value.length == 0 && selectedWard.value.length == 0 ){
            // Chuyển định dạng ngày
            const date = new Date(infoUserLogin.value.birthday);
            const year = date.getFullYear();
            const month = ('0' + (date.getMonth() + 1)).slice(-2);
            const day = ('0' + date.getDate()).slice(-2);
            const formattedDate = year + '-' + month + '-' + day + 'T00:00:00Z';
            infoUserLogin.value.birthday = formattedDate;

            console.log(infoUserLogin.value)

            const formData = new FormData();
            formData.append("image", file.value);
            formData.append("old_image", infoUserLogin.value.image);
            formData.append("_id", infoUserLogin.value._id);
            formData.append("name", infoUserLogin.value.name);
            formData.append("email", infoUserLogin.value.email);
            // formData.append("password", infoUserLogin.value.password);
            formData.append("city", infoUserLogin.value.city);
            formData.append("district",  infoUserLogin.value.district);
            formData.append("ward",  infoUserLogin.value.ward);
            formData.append("phonenumber",  infoUserLogin.value.phonenumber);
            formData.append("birthday",  infoUserLogin.value.birthday);
            formData.append("sex",  infoUserLogin.value.sex);
            formData.append("role",  infoUserLogin.value.role);
            console.log(formData);
            console.log(infoUserLogin.value)

            await axios.post('http://localhost:3000/api/user-frontend/changeinfo',  formData ).then(() => {
                toast.success('Sửa thông tin thành công');
      })
    }else{
        try {
            infoUserLogin.value.city = selectedCity.value;
            infoUserLogin.value.district = selectedDistrict.value;
            infoUserLogin.value.ward = selectedWard.value;

            // Chuyển định dạng ngày
            const date = new Date(infoUserLogin.value.birthday);
            const year = date.getFullYear();
            const month = ('0' + (date.getMonth() + 1)).slice(-2);
            const day = ('0' + date.getDate()).slice(-2);
            const formattedDate = year + '-' + month + '-' + day + 'T00:00:00Z';
            infoUserLogin.value.birthday = formattedDate;

            console.log(infoUserLogin.value)
            const formData = new FormData();
            formData.append("image", file.value);
            formData.append("old_image", infoUserLogin.value.image);
            formData.append("_id", infoUserLogin.value._id);
            formData.append("name", infoUserLogin.value.name);
            formData.append("email", infoUserLogin.value.email);
            // formData.append("password", infoUserLogin.value.password);
            formData.append("city", infoUserLogin.value.city);
            formData.append("district",  infoUserLogin.value.district);
            formData.append("ward",  infoUserLogin.value.ward);
            formData.append("phonenumber",  infoUserLogin.value.phonenumber);
            formData.append("birthday",  infoUserLogin.value.birthday);
            formData.append("sex",  infoUserLogin.value.sex);
            formData.append("role",  infoUserLogin.value.role);
            console.log(formData);

            console.log(infoUserLogin.value)
            await axios.post('http://localhost:3000/api/user-frontend/changeinfo',  formData ).then(() => {
                toast.success('Sửa thông tin thành công');
      })

        } catch (error) {
            console.log(infoUserLogin.value)          
        }


    }



    // await axios.post('http://localhost:3000/api/user-frontend/changeinfo',  formData ).then(() => {
    //             toast.success('Sửa thông tin thành công');
    //   })


}
</script>

<style ></style>