<template>
    <div class="content">
        <div class="animated fadeIn">
            <button class="btn-add btn btn-primary "> <router-link to="/course">Trở lại</router-link> </button>

            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <strong class="card-title">Thêm khóa học</strong>
                        </div>
                        <div class="card-body">
                            <!-- Credit Card -->
                            <div id="pay-invoice">
                                <div class="card-body">
                                    <hr>
                                    <div class="form-group">
                                        <div class=""><label for="select" class=" form-control-label">Ngôn ngữ</label>
                                        </div>
                                        <div class="">
                                            <select name="select" id="select" class="form-control"
                                                @change="onChange($event)">
                                                <option value="">Chọn ngôn ngữ</option>
                                                <option v-for="(language, index) in languages" v-bind:key="index"
                                                    :value="language._id">{{ language.name }}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="cc-payment" class="control-label mb-1">Tên khóa học</label>
                                        <input v-model="name_course" id="cc-payment" name="cc-payment" type="text"
                                            class="form-control" aria-required="true" aria-invalid="false">
                                    </div>
                                    <div class="form-group">
                                        <div class=""><label for="select" class=" form-control-label">Cấp độ khóa học</label>
                                        </div>
                                        <div class="">
                                            <select name="select" id="select" class="form-control"
                                                @change="onChange1($event)">
                                                <option value="">Chọn cấp độ</option>
                                                <option value="basic">Căn bản</option>
                                                <option value="advanced">Nâng cao</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label for="cc-exp" class="control-label mb-1">Expiration</label>
                                                <input id="cc-exp" name="cc-exp" type="tel" class="form-control cc-exp"
                                                    value="" data-val="true"
                                                    data-val-required="Please enter the card expiration"
                                                    data-val-cc-exp="Please enter a valid month and year"
                                                    placeholder="MM / YY">
                                                <span class="help-block" data-valmsg-for="cc-exp"
                                                    data-valmsg-replace="true"></span>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <label for="x_card_code" class="control-label mb-1">Security code</label>
                                            <div class="input-group">
                                                <input id="x_card_code" name="x_card_code" type="tel"
                                                    class="form-control cc-cvc" value="" data-val="true"
                                                    data-val-required="Please enter the security code"
                                                    data-val-cc-cvc="Please enter a valid security code"
                                                    autocomplete="off">
                                                <div class="input-group-addon">
                                                    <span class="fa fa-question-circle fa-lg" data-toggle="popover"
                                                        data-container="body" data-html="true"
                                                        data-title="Security Code"
                                                        data-content="<div class='text-center one-card'>The 3 digit code on back of the card..<div class='visa-mc-cvc-preview'></div></div>"
                                                        data-trigger="hover"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button  id="payment-button" type="submit" class="btn btn-lg btn-info btn-block">
                                            <span id="payment-button-amount">Thêm</span>
                                        </button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div> <!-- .card -->

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import languageApi from '@/api/languageApi';



const languages = ref([]);
const id_parent = ref();
const name_course = ref('');
const level_course = ref('');
onMounted(() => {
    (async function () {
        const res = await languageApi.getAll();
        // console.log(res.data.data)
        languages.value = res.data.data;
        console.log(languages.value)

    })()
})

function onChange(event) {
    id_parent.value = event.target.value;
    console.log(id_parent.value)
}
function onChange1(event) {
    level_course.value = event.target.value;
    console.log(level_course.value)
}

</script> 

<style>

</style>