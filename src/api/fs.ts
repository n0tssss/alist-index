/*
 * @Author: N0ts
 * @Date: 2024-07-09 00:14:18
 * @Description:
 * @FilePath: \alist-index\src\api\fs.ts
 * @Mail：mail@n0ts.top
 */
import http from "./axios";
import * as FsType from "./fs-type";

export default {
    /**
     * 获取站点设置
     */
    async getPublicSettings() {
        return await http.get("/api/public/settings");
    },
    /**
     * 列出文件目录
     * @param FsType.FsListType 参数
     */
    async getFsList(data: FsType.FsListType) {
        return (await http.post("/api/fs/list", data))
            .data as FsType.FsListResType;
    },
    /**
     * 查询文件信息
     * @param FsType.FsListType 参数
     */
    async getFs(data: FsType.FsListType) {
        return (await http.post("/api/fs/get", data)).data as FsType.FsResType;
    },

    /**
     * 搜索文件
     * @param FsType.SearchFsType 参数
     */
    async searchFs(data: FsType.SearchFsType) {
        return (await http.post("/api/fs/search", data))
            .data as FsType.SearchFsResType;
    }
};
