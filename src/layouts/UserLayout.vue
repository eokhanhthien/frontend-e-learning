<template>
    <div>
        <Header />
        <slot></slot>
        <Footer/>
    </div>

</template>

<script setup>
import Header from '../components/frontend/include/Header.vue';
import Footer from '../components/frontend/include/Footer.vue';

</script>

<style>

</style> 