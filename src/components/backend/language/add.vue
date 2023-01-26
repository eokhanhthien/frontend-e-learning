<template>
    <div class="content">
        <div class="animated fadeIn">
            <button class="btn-add btn btn-primary "> <router-link to="/language">Trở lại</router-link> </button>

            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <strong class="card-title">Thêm ngôn ngữ</strong>
                        </div> 
                        <div class="card-body">

                            <div id="pay-invoice">
                                <div class="card-body">
                                    <hr>
                                    <div class="form-group">
                                        <label for="cc-payment" class="control-label mb-1">Tên ngôn ngữ</label>
                                        <input v-model="inputLanguage" type="text" class="form-control" >
                                    </div>

                                    <div>
                                        <button @click="handleAddLanguage" id="payment-button"
                                            class="btn btn-lg btn-info btn-block">
                                            <span id="payment-button-amount">Thêm</span>
                                        </button>
                                    </div>

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
import languageApi from '@/api/languageApi';
import { ref ,inject} from 'vue';
import { useRouter } from 'vue-router'

console.log(inject('axios'));
// const axios = inject('axios')

const inputLanguage = ref('')

const router = useRouter()
const toast = inject('toast');

async function handleAddLanguage() {
    const res = await languageApi.create({name: inputLanguage.value})
    if(res){
        // window.history.back();
        router.push({ path: '/language' }).then(() => { 
        toast.success('Thêm ngôn ngữ thành công'); })
    }   
    

}


</script>

<style>

</style>