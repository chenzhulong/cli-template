import axios from "axios"

const server = axios.create({
    timeout: 1000,
    headers: {
        "Content-Type": "application/json"
    }
})

export default async function(config) {
    try {
        const res = await server(config)
        const { data, status } = res
        if (status === 200) {
            return data
        } else {
            throw new Error("返回错误")
        }
    } catch (e) {}
}
