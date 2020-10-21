<template>
    <son class="test" v-model="name">
        <template v-slot:haha>
            <p>shenmegui</p>
        </template>
    </son>
</template>

<script>
import Son from "./Son"
export default {
    data: function () {
        return {
            isShow: true,
            name: "haha"
        }
    },
    watch: {
        isShow() {
            console.log(this.isShow)
        }
    },
    components: {
        Son
    }
}
</script>

<style lang="less">
.test {
    width: 300px;
    height: 200px;
    background-color: pink;
    margin-bottom: -100px;
    overflow: hidden;
}
</style>
