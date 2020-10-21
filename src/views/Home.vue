<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="1">haha</HelloWorld>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"
import { queryBaidu } from "../api/message"

export default {
    name: "Home",
    components: {
        HelloWorld
    },
    mounted() {
        queryBaidu("haha")
    }
}
</script>
