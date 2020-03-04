<template>
    <div>
        <grid-layout
                :layout.sync="layout"
                :col-num="18"
                :row-height="15"
                :is-draggable="true"
                :is-resizable="false"
                :is-mirrored="false"
                :vertical-compact="true"
                :margin="[10, 10]"
                :use-css-transforms="true">
            <grid-item
                    v-for="item in layout"
                    :x="item.x"
                    :y="item.y"
                    :w="item.w"
                    :h="item.h"
                    :i="item.i"
                    :key="item.href">
                <img class="widget-layout"
                     :class="activeWidget === item.href?'widget-layout-active':'widget-layout'"
                     :src="item.i"
                     @dblclick.stop.prevent="ondblclickEvet(item)"
                />
            </grid-item>
        </grid-layout>
    </div>
</template>

<script>
    import {Component, Provide, Emit, Vue} from 'vue-property-decorator';
    import VueGridLayout from 'vue-grid-layout';

    @Component({
        components: {
            GridLayout: VueGridLayout.GridLayout,
            GridItem: VueGridLayout.GridItem
        }
    })

    export default class Main extends Vue {

        created() {
            this.layout = [
                {
                    "x": 0,
                    "y": 0,
                    "w": 1,
                    "h": 4,
                    "i": require("../../static/img/compute.png"),
                    "href": "https://www.baidu.com/"
                },
            ];
            this.activeWidget = ""
        }

        mounted() {

        }

        @Emit()
        onClickEvent(item) {
            this.activeWidget = item.href;
        }

        @Emit()
        ondblclickEvet(item) {
            window.open(item.href, "_blank");
        }
    }
</script>

<style scoped lang="scss">
    .widget-layout {
        padding: 4px;

        &:hover {
            height: 76px;
            width: 76px;
            background-color: rgba(238, 238, 238, 0.2);
            border: rgba(238, 238, 238, 0.2) 1px solid;
        }

    }

    .widget-layout-active {
        background-color: rgba(238, 238, 238, 0.2);
        border: rgba(238, 238, 238, 0.2) 1px solid;
    }
</style>
