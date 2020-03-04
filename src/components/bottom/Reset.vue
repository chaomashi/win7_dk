<template>
    <div class="reset-windows" @click="resetWindows" title="桌面"></div>
</template>

<script lang="ts">
    import {Component, Provide, Vue} from 'vue-property-decorator';

    @Component
    export default class Reset extends Vue {
        @Provide() msg: string = '';
        @Provide() title: string = '显示桌面';

        resetWindows() {

        }
    }
</script>

<style scoped>
    .reset-windows {
        position: relative;
        float: right;
        bottom: 5.4vh;
        width: 1vh;
        height: 100%;
        border-left: 2px solid rgba(255, 255, 255, 0.2);
        background-color: rgba(238, 238, 238, 0.2);
    }
</style>