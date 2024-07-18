/*
 * @Author: N0ts
 * @Date: 2024-07-07 23:42:13
 * @Description:
 * @FilePath: \alist-index\src\router\index.ts
 * @Mail：mail@n0ts.top
 */
import { createRouter, createWebHistory } from "vue-router";

const HomeView = () => import("@/views/HomeView.vue");

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/:path*",
            name: "home",
            component: HomeView
        }
    ]
});

export default router;
