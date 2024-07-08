/*
 * @Author: N0ts
 * @Date: 2024-07-08 00:32:04
 * @Description: Axios 配置
 * @FilePath: \alist-index\src\api\axios.ts
 * @Mail：mail@n0ts.top
 */

import axios from "axios";

axios.interceptors.request.use(
    function (config) {
        // @ts-ignore
        config.url = window.alistConfig.api + config.url;

        // token
        const token = window.localStorage.getItem("alist-token");
        if (token) {
            config.headers["Authorization"] = token;
        }

        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// 添加响应拦截器
axios.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default axios;
