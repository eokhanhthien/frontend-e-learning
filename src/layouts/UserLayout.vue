<template>
    <div>
        <Header />
        <slot></slot>
    </div>

</template>

<script>
import Header from '../components/frontend/include/Header.vue';
export default {
    components: {Header}
}
</script>

<style>

</style> 