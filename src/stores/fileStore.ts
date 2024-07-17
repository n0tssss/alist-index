/*
 * @Author: N0ts
 * @Date: 2024-07-12 13:58:20
 * @Description: 文件列表搜索仓库
 * @FilePath: \alist-index\src\stores\fileStore.ts
 * @Mail：mail@n0ts.top
 */
import { defineStore } from "pinia";
import * as FsType from "@/api/fs-type";
import http from "@/api";
import iconFileUtil from "@/utils/iconFileUtil";
const w: any = window;

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
            fileLoad: false // 当前文件是否在加载
        }
    }),
    getters: {
        currentPath: (state) => {
            return state.orther.path.join("/");
        }
    },
    actions: {
        setPath(path: string[]) {
            this.orther.path = path;
            this.getList();
        },
        pushPath(path: string) {
            this.orther.path.push(path);
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

            const data = await http.fs.getFsList({
                ...this.params,
                refresh: refresh ?? false
            });

            if (!data.content) data.content = [];

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
            console.log("🚀文件列表 | this.data:", this.data);

            this.orther.load = false;
        },
        async getFile() {
            if (this.orther.selectIndex == -1 || !this.data) return;
            this.orther.fileLoad = true;

            const data = await http.fs.getFs({
                path:
                    this.currentPath +
                    "/" +
                    this.data.content[this.orther.selectIndex].name
            });
            this.file = data;
            this.data.content[this.orther.selectIndex].url = data.raw_url;
            console.log(
                "🚀文件详情 | this.data.content[this.orther.selectIndex]:",
                this.data.content[this.orther.selectIndex]
            );

            this.orther.fileLoad = false;
        },
        setCurrentIndex(i: number) {
            this.orther.selectIndex = i;
            this.getFile();
        }
    }
});
