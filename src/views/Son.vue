<template>
    <div>
        <input type="text" @input="show" :value="name" />
        <slot name="haha">wokao</slot>
    </div>
</template>

<script>
export default {
    model: {
        prop: "name",
        event: "changeXXX"
    },
    props: {
        name: {
            type: String,
            default: "123"
        }
    },
    methods: {
        show() {
            console.log(1)
            this.$emit("changeXXX", false)
        }
    }
}
</script>
