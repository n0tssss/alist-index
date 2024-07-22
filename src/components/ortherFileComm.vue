<!--
 * @Author: N0ts
 * @Date: 2024-07-13 18:43:14
 * @Description: 其他文件详情
 * @FilePath: \alist-index\src\components\ortherFileComm.vue
 * @Mail：mail@n0ts.top
-->
<template>
    <div class="desc">
        <div class="icon" v-html="currentFile.icon"></div>
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
import * as FsType from "@/api/fs-type";
import formatUtil from "@/utils/formatUtil";
import usefileStore from "@/stores/fileStore";

const fileStore = usefileStore();

const currentFile = computed(() => {
    if (!fileStore.file) return {} as FsType.FsResType;
    return fileStore.file;
});
</script>

<style scoped lang="less">
.desc {
    height: 100%;
    padding: 50px;
    box-sizing: border-box;

    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--theme-color);

        :deep(svg) {
            width: 80px;
            height: 80px;
        }
    }

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
