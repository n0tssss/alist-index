import type { AxiosResponse } from "axios";

export default function (response: AxiosResponse<any, any>) {
    if (response.data.code === 401) {
        console.error("登陆失效！");
    }
    return response;
}
