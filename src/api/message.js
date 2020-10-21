import request from "@/utils/request"

export const queryBaidu = data => {
    return request({
        method: "post",
        url: "/some",
        data: data
    })
}
