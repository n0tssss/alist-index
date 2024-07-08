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
    }
};
