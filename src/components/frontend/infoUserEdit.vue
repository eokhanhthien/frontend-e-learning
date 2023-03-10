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
                    <div class=" br-custom-item fixed-height">
                        <div class="title-info">
                            Thay đổi thông tin cá nhân
                        </div>
                        <div class="row g-0 mt-3">
                            <div class="col-3">
                                <p class="">Ảnh đại diện</p>
                                <div class="img-size-info">
                                    <img src="../../assets/images/user-default.png" alt="">
                                </div>

                            </div>
                            <div class="col-6">
                                <div class="row">
                                    <div class="col-3">
                                        <p>Họ và tên</p>
                                    </div>
                                    <div class="col-3">
                                        <p>Dong a</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-3">
                                        <p>Email</p>
                                    </div>
                                    <div class="col-3">
                                        <p>Dong a</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-3">
                                        <p>Full name</p>
                                    </div>
                                    <div class="col-3">
                                        <p>Dong a</p>
                                    </div>
                                </div>
                            </div>


                            <!-- Chọn tỉnh thành -->
                            <div>
                                <div>
                                    <select class="form-select form-select-sm mb-3" v-model="selectedCity"
                                        aria-label=".form-select-sm">
                                        <option value="" selected>Chọn tỉnh thành</option>
                                        <option v-for="city in cities" :key="city.Id" :value="city.Id">{{ city.Name }}
                                        </option>
                                    </select>
                                    <select class="form-select form-select-sm mb-3" v-model="selectedDistrict"
                                        aria-label=".form-select-sm">
                                        <option value="" selected>Chọn quận huyện</option>
                                        <option v-for="district in districts" :key="district.Id" :value="district.Id">{{
                                            district.Name }}</option>
                                    </select>
                                    <select class="form-select form-select-sm" v-model="selectedWard"
                                        aria-label=".form-select-sm">
                                        <option value="" selected>Chọn phường xã</option>
                                        <option v-for="ward in wards" :key="ward.Id" :value="ward.Id">{{ ward.Name }}
                                        </option>
                                    </select>
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
import { ref, watch } from 'vue';
import axios from 'axios';

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
        const city = cities.value.find(city => city.Id === selectedCity.value);
        districts.value = city.Districts;
    } else {
        districts.value = [];
        wards.value = [];
    }
};

const filterWards = () => {
    if (selectedDistrict.value !== '') {
        const city = cities.value.find(city => city.Id === selectedCity.value);
        const district = city.Districts.find(district => district.Id === selectedDistrict.value);
        wards.value = district.Wards;
    } else {
        wards.value = [];
    }
};

watch(selectedCity, filterDistricts);
watch(selectedDistrict, filterWards);

fetchData();
// Chọn tỉnh thành--------------------------------------------



</script>

<style ></style>