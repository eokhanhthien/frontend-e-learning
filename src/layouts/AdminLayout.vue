<template>
    <div>
        <LeftPanel />
        <div id="right-panel" class="right-panel">
        <!-- Header-->
        <header id="header" class="header">
            <div class="top-left">
                <div class="navbar-header">
                    <!-- <a class="navbar-brand" href="./"><img src="" alt="Logo"></a>
                    <a class="navbar-brand hidden" href="./"><img src="images/logo2.png" alt="Logo"></a> -->
                    <!-- <a id="menuToggle" class="menutoggle"><i class="fa fa-bars"></i></a> -->
                </div>
            </div>
            <div class="top-right">
                <div class="header-menu">
                    <p class="user_name">{{ user_name }}</p>
                    <div class="header-left">
                        
                        <button class="btn-logout" @click="handleLogout">Đăng xuất</button>
                    </div>

                </div>
            </div>
        </header>

        <slot></slot>
        
    </div>
  </div>
</template>

<script setup>
import LeftPanel from "../components/backend/LeftPanel.vue"
import { ref , onMounted} from "vue";
const user_name = ref("");
function handleLogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user')
    location.reload();
}
onMounted(() => {
  let objectString = localStorage.getItem("user");
  let user_info = JSON.parse(objectString);
  user_name.value = user_info.name;
}
)


</script>

<style>
button.btn-logout {
    border: 1px solid #ccc;
    padding: 10px;
    height: 54px;
    border-radius: 4px;
    cursor: pointer;
}
p.user_name {
    line-height: 50px;
    margin-right: 10px;
    font-weight: 600;
}
.table-stats table th img, .table-stats table td img {
    max-width: 100px !important;
}
</style>