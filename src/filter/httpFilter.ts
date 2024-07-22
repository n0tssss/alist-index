/*
 * @Author: N0ts
 * @Date: 2024-07-10 15:17:18
 * @Description: 请求异常拦截
 * @FilePath: \alist-index\src\filter\httpFilter.ts
 * @Mail：mail@n0ts.top
 */

import tipText from "@/api/tip-text";
import type { AxiosResponse } from "axios";
import { ElMessage } from "element-plus";

export default function (response: AxiosResponse<any, any>) {
    switch (response.data.code) {
        case 400:
            console.warn("400", response);
            ElMessage.error("请求错误！");
            break;
        case 401:
            console.warn("401", response);
            ElMessage.error("登录失效！请重新登录");
            return Promise.reject("登录失效！请重新登录");
        case 403:
            console.warn("403", response);
            ElMessage.error("拒绝访问！");
            return Promise.reject("拒绝访问！");
        case 404:
            console.warn("404", response);
            ElMessage.error("请求地址出错！");
            break;
        case 500:
            console.error("500", response);
            tipText(response.data.message);
            return response;
    }
    return response.data;
}
