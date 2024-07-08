/*
 * @Author: N0ts
 * @Date: 2024-07-08 00:29:56
 * @Description: 网站信息
 * @FilePath: \alist-index\src\stores\webInfoStore.ts
 * @Mail：mail@n0ts.top
 */
import { defineStore } from "pinia";
import http from "@/api";

export default defineStore("webInfo", {
    state: () => ({
        webInfo: null as any
    }),
    getters: {
        getWebInfo: (state) => state.webInfo
    },
    actions: {
        async fetchWebInfo() {
            if (!this.webInfo) {
                const response = await http.fs.getPublicSettings();
                this.webInfo = response.data;
            }
        }
    }
});
