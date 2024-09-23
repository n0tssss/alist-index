/*
 * @Author: N0ts
 * @Date: 2024-09-23 22:22:33
 * @Description: 用户操作
 * @FilePath: \alist-index\src\stores\userStore.ts
 * @Mail: mail@n0ts.top
 */
import { defineStore } from "pinia";
import http from "@/api";

export default defineStore("webInfo", {
    state: () => ({
        loginData: {
            username: "",
            password: ""
        },
        token: ""
    }),
    getters: {},
    actions: {
        async fetchWebInfo() {
            if (!this.webInfo) {
                const response = await http.fs.getPublicSettings();
                this.webInfo = response.data;
            }
        }
    }
});
