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
const w: any = window;

export default defineStore("search", {
    state: () => ({ data: {} as null | FsType.SearchFsResType, dialog: true }),
    getters: {},
    actions: {
        async search(data: FsType.SearchFsType) {
            const response = await http.fs.searchFs(data);

            // url 处理
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

                return content;
            });
            if (contentCache && contentCache.length > 0) {
                response.content = contentCache as any;
            }

            this.data = response;
            return response;
        },
        toggleDialog() {
            this.dialog = !this.dialog;
        }
    }
});
