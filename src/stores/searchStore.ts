/*
 * @Author: N0ts
 * @Date: 2024-07-13 22:19:28
 * @Description:
 * @FilePath: \alist-index\src\stores\searchStore.ts
 * @Mail：mail@n0ts.top
 */
import * as FsType from "@/api/fs-type";
import http from "@/api";
import iconFileUtil from "@/utils/iconFileUtil";
import useFileStore from "@/stores/fileStore";

const w: any = window;
const fileStore = useFileStore();

export default defineStore("search", {
    state: () => ({
        params: {
            parent: fileStore.currentPath,
            keywords: "",
            scope: 0 as 0 | 1 | 2,
            page: 1,
            per_page: 30,
            password: ""
        },
        data: {} as null | FsType.SearchFsResType,
        dialog: true,
        load: false
    }),
    getters: {},
    actions: {
        async search() {
            if (!this.params.keywords) {
                this.data = {
                    total: 0,
                    content: []
                };
                return this.data;
            }

            this.load = true;

            const response = await http.fs.searchFs(this.params);

            if (!response.content) response.content = [];

            // 数据处理
            const contentCache = response.content.map((content) => {
                // 根据文件名获取文件类型
                const fileType = iconFileUtil.getIcon(content);
                // 如果是图片，修改 thumb 拼上 api
                if (fileType.type === "images") {
                    content.thumb = `${w.alistConfig.api}/d/${content.parent}/${content.name}?type=thumb`;
                }
                // 修改 icon 与 fileType
                content.icon = fileType.icon;
                content.fileType = fileType.type;
                // 高亮关键字
                content.html = content.name.replace(
                    new RegExp(this.params.keywords, "g"),
                    `<em>${this.params.keywords}</em>`
                );

                return content;
            });
            if (contentCache && contentCache.length > 0) {
                response.content = contentCache as any;
            }

            // 文件排序
            response.content.sort((a, b) => {
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

            this.data = response;
            this.load = false;
            return response;
        },
        toggleDialog() {
            this.dialog = !this.dialog;
        },
        clearList() {
            if (this.data) this.data.content = [];
        }
    }
});
