
<template>
        <div>
          <CKEditor :editor="ClassicEditor" v-model="editorData" :config="editorConfig"></CKEditor>
          <!-- <p>{{ editorData }}</p> -->
        </div>
</template>

<script setup>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {component as CKEditor} from '@ckeditor/ckeditor5-vue';
import {ref,defineProps, watch,defineEmits} from 'vue'
const props = defineProps({
    modelValue: String
})

const emit = defineEmits(['update:modelValue'])
const editorConfig = ref({
    // toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', '|', 'undo', 'redo', 'outdent', 'indent', '|', 'inserttable','uploadImage', '|',],
       
})
const editorData = ref(props.modelValue || '')
watch(editorData, ()=>{
    console.log(editorData.value);
    emit('update:modelValue', editorData.value)
})

</script>

<style>
.ck-editor__editable{
    min-height: 160px;
    margin-bottom: 20px;
}
</style>