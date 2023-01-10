<template>
      <aside id="left-panel" class="left-panel">
        <div class="mt-2 mb-2 text-center"><strong>Quản lý</strong></div>
        <div class="tab-menu"><router-link to ="/language" id="tab-menu"> <i class="menu-icon fa fa-laptop"></i>Ngôn ngữ lập trình </router-link></div>          
        <div class="tab-menu"><router-link to ="/course" id="tab-menu"><i class="menu-icon fa fa-laptop"></i>Khóa học </router-link></div>
           
    </aside>
</template>

<script>
import { ref } from "vue"
export default {
    setup(){
        const activeTab = ref(1)

        return{
            activeTab
        }
    }
}
</script>

<style>
.vue-school-active-link{
    color: rgb(32, 158, 1) !important;
    background-color: rgb(241, 241, 241) !important;
}
.tab-menu {
    height: 60px;
    line-height: 60px;
}
a#tab-menu {
    display: block;
    text-align: start;
    font-size: 17px;
    padding-left: 30px;
}
</style>