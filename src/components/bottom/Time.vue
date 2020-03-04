<template>
    <div class="windows-time" :title="title">
        <span>{{time}}</span>
        <span>{{date}}</span>
    </div>
</template>

<script lang="ts">
    import {Component, Provide, Vue} from 'vue-property-decorator';

    let time: number;
    @Component
    export default class Time extends Vue {
        @Provide() time: any = '';
        @Provide() date: string = '';
        @Provide() title: string = '';

        created() {
            this.getTime();
        }

        mounted() {
            let that: any = this,
                weeks: Array<string> = ['日', '一', '二', '三', '四', '五', '六'],
                day: number = new Date().getDay();
            time = setInterval(function () {
                that.getTime()
            }, 1000);

            let month = new Date().getMonth() + 1;
            this.date = new Date().getFullYear() + '/' + month + '/' + new Date().getDate();
            // 提示日期
            this.title = new Date().getFullYear() + '年' + month + '月' + new Date().getDate() + '日' + '星期' + weeks[day];
        }

        /**
         * get time
         */
        getTime() {
            let seconds: any = new Date().getSeconds(),
                minutes: any = new Date().getMinutes();

            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            if (seconds < 10) {
                seconds = '0' + seconds
            }
            this.time = new Date().getHours() + ':' + minutes + ':' + seconds;
        }

        beforeDestroy() {
            if (this.time) {
                clearInterval(time);
            }
        }
    }

</script>

<style scoped lang="scss">
    .windows-time {
        position: relative;
        float: right;
        width: 5vw;
        height: 100%;
        padding-top: 5px;
        bottom: 5.4vh;

        &:hover {
            cursor: default;
            background-color: rgba(255, 255, 255, 0.1);
            color: #ffffff;
        }

        span {
            position: relative;
            display: inline-block;
            height: 45%;
            width: 100%;
            text-align: center;
            color: #ffffff;
            font-size: 0.9em;
        }
    }
</style>