/*
 * @Author: N0ts
 * @Date: 2024-07-08 01:09:27
 * @Description: 主题切换
 * @FilePath: \alist-index\src\stores\themeStore.ts
 * @Mail：mail@n0ts.top
 */
import { defineStore } from "pinia";

export default defineStore("theme", {
    state: () => ({
        theme: "light" as "light" | "dark"
    }),
    getters: {
        getWebInfo: (state) => state.theme
    },
    actions: {
        switch() {
            this.theme = this.theme === "light" ? "dark" : "light";
            document.documentElement.setAttribute("theme", this.theme);
            window.localStorage.setItem("alist-theme", this.theme);
        },
        init() {
            const theme = window.localStorage.getItem("alist-theme");
            if (!theme) {
                this.theme = "light";
                window.localStorage.setItem("alist-theme", "light");
            }
            this.theme = theme === "dark" ? "dark" : "light";
            document.documentElement.setAttribute("theme", this.theme);
        }
    }
});
