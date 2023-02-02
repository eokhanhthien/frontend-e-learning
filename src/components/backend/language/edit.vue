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
                                        <label for="cc-payment" class="control-label mb-1">Tên ngôn ngữ </label>
                                        <input v-model="languages" type="text" class="form-control">
                                    </div>

                                    <div>
                                        <button @click="handleEditLanguage()" id="payment-button"
                                            class="btn btn-lg btn-info ">
                                            <span id="payment-button-amount">Sửa</span>
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
import { ref, onMounted,inject } from 'vue';

import { useRoute,useRouter } from 'vue-router';

const languages = ref('');
const id = ref(useRoute().params.id);

onMounted(() => {
    (async () => {
        const res = await languageApi.getRow({ id: id.value });

        languages.value = res.data.data.name;
        console.log(languages.value)
        // languages.value = JSON.parse(JSON.stringify(languages))
        // console.log(JSON.parse(JSON.stringify(languages)));

    })()
})

const router = useRouter();
const toast = inject('toast');
// const route = useRoute();
async function handleEditLanguage() {
    const res = await languageApi.edit({ id: id.value , name: languages.value })
    if(res){
        router.push({ path: '/language',
        query: {  } }).then(() => { 
        toast.info('Sửa ngôn ngữ thành công'); }) 
        
    }   
   


}




console.log(useRoute().params.id)
// useRoute().params.id params khi truyền id
// useRoute().query.test params khi truyền http://somesite.com?test=yay


</script>


<style>

</style>