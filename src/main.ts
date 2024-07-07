/*
 * @Author: N0ts
 * @Date: 2024-07-07 23:42:13
 * @Description: main
 * @FilePath: \alist-index\src\main.ts
 * @Mail：mail@n0ts.top
 */
import "./assets/main.less";
import "element-plus/dist/index.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);

app.use(router);

app.mount("#app");
