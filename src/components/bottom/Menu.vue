<template>
    <div>
        <img src="../../assets/images/menu.png" alt="开始" class="windows-menu"/>
        <div></div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class Menu extends Vue {
        menuSrc: string = '';



    }
</script>

<style scoped>
    .windows-menu {
        position: relative;
        left: 10px;
        height: 5vh;
    }
</style>
