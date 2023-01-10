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
                    <!-- <div class="header-left">

                    </div> -->

                </div>
            </div>
        </header>

        <slot></slot>
        
    </div>
  </div>
</template>

<script>
import LeftPanel from "../components/backend/LeftPanel.vue"
export default {
    components : {LeftPanel}
}
</script>

<style>

</style>