<template>
    <div class="bottom-menu">
        <Menu></Menu>
        <Reset></Reset>
        <Time></Time>
    </div>
</template>

<script>
    import {Component, Vue} from 'vue-property-decorator';
    import {Menu,Reset,Time} from './bottom/index'

    @Component({
        components: {
            Menu, Reset,Time
        }
    })
    export default class Bottom extends Vue {

    }
</script>

<style scoped>
    .bottom-menu {
        position: absolute;
        bottom: 0;
        width: 100vw;
        height: 5vh;
        background-color: rgba(54, 123, 162, 0.7);
        box-shadow: -2px -2px #00000085;
    }
</style>