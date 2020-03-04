<template>
    <div class="window-desktop">
        <Main></Main>
        <Bottom></Bottom>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Bottom from '../components/Bottom.vue'
    import Main from '../components/Main.vue'

    @Component({
        components: {
            Bottom,
            Main
        }
    })
    export default class Windows extends Vue {

    }
</script>

<style scoped>
    .window-desktop {
        position: absolute;
        height: 100vh;
        width: 100vw;
        background: url('../assets/images/window7.jpg') no-repeat;
        background-size: 100% 100%;
    }
</style>