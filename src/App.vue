<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class App extends Vue {
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: #ffffff;
        overflow: hidden;
    }

    html, body {
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        margin: 0;
        padding: 0;
    }
</style>
