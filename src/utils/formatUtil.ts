import { ElMessage } from "element-plus";

export default {
    /**
     * bit 转 mb 或 gb
     * @param bit 字节
     */
    bitToMBOrGB(bit: number) {
        if (bit < 1024 * 1024 * 1024) {
            return `${(bit / 1024 / 1024).toFixed(2)} MB`;
        } else {
            return `${(bit / 1024 / 1024 / 1024).toFixed(2)} GB`;
        }
    },
    /**
     * 时间转 年月日时分秒，全部保留两位
     * @param time 时间戳
     */
    timeToDate(time: string) {
        const date = new Date(time);
        return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")} ${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;
    },
    /**
     * 复制字符串
     * @param text 字符串
     */
    async copy(text?: string) {
        if (!text) return;
        try {
            await navigator.clipboard.writeText(text);
            ElMessage.success("复制成功");
        } catch (err) {
            ElMessage.error("复制失败");
            console.error("复制失败：", err);
        }
    },
    /**
     * 新窗口打开链接
     * @param url 链接
     */
    openUrl(url?: string) {
        if (!url) return;
        window.open(url);
    }
};
