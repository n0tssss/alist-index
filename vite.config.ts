/*
 * @Author: N0ts
 * @Date: 2024-07-08 08:58:14
 * @Description:
 * @FilePath: \alist-index\vite.config.ts
 * @Mail：mail@n0ts.top
 */
/*
 * @Author: N0ts
 * @Date: 2024-07-07 23:42:13
 * @Description:
 * @FilePath: \alist-index\vite.config.ts
 * @Mail：mail@n0ts.top
 */
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// 自动导入
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";

const pathSrc = path.resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [
                ElementPlusResolver(),
                // 自动导入图标组件
                IconsResolver({
                    prefix: "Icon"
                })
            ],
            imports: ["vue", "vue-router", "pinia"],
            dts: path.resolve(pathSrc, "auto-imports.d.ts")
        }),
        Components({
            resolvers: [
                // 自动注册图标组件
                IconsResolver({
                    enabledCollections: ["ep"]
                }),
                ElementPlusResolver()
            ],
            dts: path.resolve(pathSrc, "components.d.ts")
        }),
        Icons({
            autoInstall: true
        })
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url))
        }
    }
});
