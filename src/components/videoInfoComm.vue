<!--
 * @Author: N0ts
 * @Date: 2024-07-17 15:52:12
 * @Description: 视频详情
 * @FilePath: \alist-index\src\components\videoInfoComm.vue
 * @Mail: mail@n0ts.top
-->
<template>
    <div class="desc">
        <div id="mui-player"></div>

        <p class="title">{{ currentFile.name }}</p>
        <div class="fileInfo">
            <span>大小：{{ formatUtil.bitToMBOrGB(currentFile.size) }}</span>
            <span>创建：{{ formatUtil.timeToDate(currentFile.created) }}</span>
        </div>
        <div class="btnList">
            <el-tooltip content="复制链接" placement="bottom">
                <el-button
                    type="success"
                    icon="CopyDocument"
                    circle
                    @click="formatUtil.copy(currentFile.raw_url)"
                />
            </el-tooltip>
            <el-tooltip content="下载" placement="bottom">
                <el-button
                    type="primary"
                    icon="Download"
                    circle
                    @click="formatUtil.openUrl(currentFile.raw_url)"
                />
            </el-tooltip>
        </div>
    </div>
</template>

<script setup lang="ts">
import formatUtil from "@/utils/formatUtil";
import "mui-player/dist/mui-player.min.css";
import MuiPlayer from "mui-player";
import MuiPlayerDesktopPlugin from "mui-player-desktop-plugin";
import * as FsType from "@/api/fs-type";
import usefileStore from "@/stores/fileStore";

const fileStore = usefileStore();

const currentFile = computed(() => {
    if (!fileStore.file) return {} as FsType.FsResType;
    return fileStore.file;
});

let mp: any = null;
onMounted(() => {
    mp = new MuiPlayer({
        container: "#mui-player",
        title: currentFile.value.name,
        src: currentFile.value.raw_url,
        preload: true,
        plugins: [new MuiPlayerDesktopPlugin()]
    });
});

onUnmounted(() => {
    if (mp) mp.destroy();
    // console.log("视频组件销毁");
});
</script>

<style scoped lang="less">
#mui-player {
    height: 60% !important;
}

.desc {
    height: 100%;
    padding: 50px;
    box-sizing: border-box;

    .title {
        width: 100%;
        text-align: center;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        font-weight: bold;
        margin-top: 10px;
    }

    .fileInfo {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        padding: 10px;
        box-sizing: border-box;

        span {
            color: var(--sub-font-color);
        }
    }

    .btnList {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
}
</style>
