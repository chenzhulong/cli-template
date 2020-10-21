module.exports = {
    devServer: {
        port: 8888,
        proxy: {
            "/allin": {
                target: "http://www.baidu.com",
                secure: false, // 使用的是http协议则设置为false，https协议则设置为true
                // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样客户端端和服务端进行数据的交互就不会有跨域问题
                changOrigin: true
            }
        },
        disableHostCheck: true,
        before: function(app, server, compiler) {
            app.post("/some", function(req, res) {
                res.json({ custom: "response" })
            })
        }
    }
}
