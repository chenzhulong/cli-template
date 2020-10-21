<script>
export default {
    name: "HelloWorld",
    props: {
        msg: String,
        title: {
            type: String,
            default: "input"
        }
    },
    render(h) {
        const inputAttrs = {
            type: "email",
            placeholder: "Enter your email"
        }
        return <this.title {...{ attrs: inputAttrs }}>hello</this.title>
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
