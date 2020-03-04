<template>
    <div>
        <v-calendar :attributes='attrs'></v-calendar>
    </div>
</template>

<script lang="ts">
    import {Component, Provide, Vue} from 'vue-property-decorator';


    @Component
    export default class TimePopup extends Vue {


        @Provide() attrs: object = {}

    }

</script>

<style lang="scss">

</style>
