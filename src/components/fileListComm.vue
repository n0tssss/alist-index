<!--
 * @Author: N0ts
 * @Date: 2024-07-08 09:26:56
 * @Description: 文件列表
 * @FilePath: \alist-index\src\components\fileListComm.vue
 * @Mail：mail@n0ts.top
-->
<template>
    <div class="fileList" v-loading="loading">
        <div class="list" v-if="fileList && fileList.content.length > 0">
            <div
                v-for="(item, index) in fileList.content"
                :key="index"
                @click="openFolder(item, index)"
            >
                <div class="icon">
                    <el-icon
                        size="60"
                        color="var(--theme-color)"
                        v-if="item.icon != 'images'"
                    >
                        <div v-html="item.icon"></div>
                    </el-icon>
                    <el-image
                        v-else
                        :src="item.thumb"
                        fit="cover"
                        loading="lazy"
                    />
                </div>
                <p>{{ item.name }}</p>
            </div>
        </div>
    </div>

    <FileInfoComm
        v-if="fileList"
        v-model:fileList="fileList.content"
        v-model:index="infoIndex"
        v-model:state="openInfoState"
    />
</template>

<script setup lang="ts">
import * as FsType from "@/api/fs-type";
import http from "@/api";
import iconFileUtil from "@/utils/iconFileUtil";

const w: any = window;

defineExpose({
    getFsList
});

const search = defineModel<FsType.FsListType>("search", {
    required: true
});
const path = defineModel<string[]>("path", {
    required: true
});

const fileList = ref<FsType.FsListResType>();
const loading = ref(false);
async function getFsList() {
    loading.value = true;

    const joinPath = path.value.join("/");
    search.value.path = !joinPath ? "/" : "/" + joinPath;

    // console.log("当前路径：", search.value.path);
    const data = await http.fs.getFsList(search.value);
    loading.value = false;

    const contentCache = data.content.map((content) => {
        const fileType = iconFileUtil.getIcon(content.name);
        if (fileType.type === "images") {
            content.thumb = w.alistConfig.api + content.thumb;
        }
        content.icon = fileType.icon;
        content.fileType = fileType.type;

        return content;
    });
    if (contentCache && contentCache.length > 0) {
        data.content = contentCache as any;
    }

    fileList.value = data;
    console.log("🚀文件列表 | fileList.value:", fileList.value);
}

const openInfoState = ref(false);
const infoIndex = ref(-1);

async function openFolder(item: FsType.ContentType, index: number) {
    if (!item.is_dir) {
        infoIndex.value = index;
        return (openInfoState.value = true);
    }
    path.value.push(item.name);
    await getFsList();
}
</script>

<style scoped lang="less">
.fileList {
    padding: 20px;
    box-sizing: border-box;
    background-color: var(--background-light);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);

    .list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        grid-auto-flow: row dense;

        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            cursor: pointer;
            transition: all 0.2s;
            border-radius: var(--border-radius);
            padding: 10px;
            box-sizing: border-box;

            &:hover {
                background-color: var(--hover-background);
                transform: scale(1.05);
            }

            > p {
                font-size: 13px;
                width: 100%;
                word-wrap: break-word;
                text-align: center;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 3; /*数字是几就显示几行*/
                -webkit-box-orient: vertical;
            }

            &:hover p {
                overflow: initial;
                text-overflow: initial;
            }

            .icon {
                width: 100%;
                height: 80px;
                display: flex;
                justify-content: center;
                align-items: center;

                .el-image {
                    width: 100%;
                    height: 100%;
                    border-radius: var(--border-radius);

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
            }
        }
    }
}
</style>
