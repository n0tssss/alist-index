/*
 * @Author: N0ts
 * @Date: 2024-07-12 13:58:20
 * @Description: 文件列表
 * @FilePath: \alist-index\src\stores\fileStore.ts
 * @Mail：mail@n0ts.top
 */
import { defineStore } from "pinia";
import * as FsType from "@/api/fs-type";
import http from "@/api";
import iconFileUtil from "@/utils/iconFileUtil";
import type { RouteLocationNormalizedLoadedGeneric, Router } from "vue-router";

const w: any = window;

let firstPathIsDir = null as null | boolean;
let firstLock = false;

export default defineStore("file", {
    state: () => ({
        params: {
            page: 1,
            per_page: 30,
            path: "",
            password: "",
            refresh: false
        } as FsType.FsListType,
        data: null as null | FsType.FsListResType,
        file: null as null | FsType.FsResType,
        orther: {
            path: [] as string[], // 路径
            load: false, // 当前文件列表是否在加载
            selectIndex: -1, // 当前选中文件
            fileLoad: false, // 当前文件是否在加载
            lastPath: "", // 最后一次路径
            fileInfoState: false, // 文件详情是否打开
            // 路由
            route: null as null | RouteLocationNormalizedLoadedGeneric,
            router: null as null | any
        }
    }),
    getters: {
        currentPath: (state) => {
            return state.orther.path.join("/");
        }
    },
    actions: {
        setPath(path: string[]) {
            if (this.orther.lastPath == path.join("/")) {
                return;
            }

            this.orther.path = path;
            this.params.page = 1;
            this.getList();
        },
        pushPath(path: string) {
            this.orther.path.push(path);
            this.params.page = 1;
            this.getList();
        },
        setSearchData(data: FsType.UpdateFsListType) {
            for (const key of Object.keys(data) as Array<
                keyof FsType.UpdateFsListType
            >) {
                this.params[key] = data[key] as never;
            }
        },
        async getList(refresh?: boolean) {
            this.orther.load = true;

            // 路径转字符串
            this.params.path = this.orther.path.join("/");
            // 存储最后一次路径
            this.orther.lastPath = this.params.path;
            // 修改路由
            this.orther.router.replace("/" + this.params.path);
            // 第一次如果是文件则去除 path 最后一个数据
            if (!firstLock) {
                firstLock = true;

                if (!firstPathIsDir) {
                    this.orther.path.pop();
                    this.params.path = this.orther.path.join("/");
                }
            }

            let data = await http.fs.getFsList({
                ...this.params,
                refresh: refresh ?? false
            });

            if (!data || !data.content) {
                data = {
                    content: []
                } as any;
                this.orther.load = false;
            }

            // 数据处理
            const contentCache = data.content.map((content) => {
                // 根据文件名获取文件类型
                const fileType = iconFileUtil.getIcon(content);
                // 如果是图片，修改 thumb 拼上 api
                if (fileType.type === "images") {
                    content.thumb = w.alistConfig.api + content.thumb;
                }
                // 修改 icon 与 fileType
                content.icon = fileType.icon;
                content.fileType = fileType.type;

                return content;
            });
            if (contentCache && contentCache.length > 0) {
                data.content = contentCache as any;
            }

            // 文件排序
            data.content.sort((a, b) => {
                // 文件夹优先
                if (a.is_dir && !b.is_dir) {
                    return -1;
                }
                if (!a.is_dir && b.is_dir) {
                    return 1;
                }
                // 否则按照文件类型排序
                if (!a.fileType || !b.fileType) return -1;

                return a.fileType > b.fileType ? 1 : -1;
            });

            this.data = data;
            // console.log("🚀文件列表 | this.data:", this.data);

            this.orther.load = false;
        },
        async getFile(data?: FsType.FsResType) {
            if (!this.data) return;
            this.orther.fileLoad = true;

            if (!data) {
                data = await http.fs.getFs({
                    path:
                        this.currentPath +
                        "/" +
                        this.data.content[this.orther.selectIndex].name
                });
            }
            this.file = data;
            this.orther.fileInfoState = true;
            const fileType = iconFileUtil.getIcon(data);
            this.file.fileType = fileType.type;
            this.file.icon = fileType.icon;
            this.orther.router.replace(
                `/${this.params.path}/${this.file.name}`
            );
            if (this.orther.selectIndex != -1)
                this.data.content[this.orther.selectIndex].url = data.raw_url;

            // console.log("🚀文件详情 | this.file:", this.file);

            this.orther.fileLoad = false;
        },
        async setCurrentIndex(i: number) {
            this.orther.selectIndex = i;
            await this.getFile();
        },
        setRoute(r: RouteLocationNormalizedLoadedGeneric, router: Router) {
            this.orther.route = r;
            this.orther.router = router;
            this.orther.path = !r.params.path
                ? []
                : (r.params.path as string[]);
        },
        async init() {
            const data = await http.fs.getFs({
                path: this.currentPath
            });
            // 记录第一次进入时，当前路径是文件夹还是文件
            firstPathIsDir = data.is_dir;
            await this.getList();

            if (!firstPathIsDir) {
                this.getFile(data);
            }
        }
    }
});
