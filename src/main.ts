/*
 * @Author: N0ts
 * @Date: 2024-07-07 23:42:13
 * @Description: main
 * @FilePath: \alist-index\src\main.ts
 * @Mail：mail@n0ts.top
 */
import "./assets/main.less";
import "element-plus/dist/index.css";
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);

const pinia = createPinia();
app.use(ElementPlus, {
    locale: zhCn
});
app.use(pinia);
app.use(router);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

app.mount("#app");
