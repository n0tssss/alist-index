<!--
 * @Author: N0ts
 * @Date: 2024-07-08 09:26:56
 * @Description: 文件列表
 * @FilePath: \alist-index\src\components\fileListComm.vue
 * @Mail：mail@n0ts.top
-->
<template>
    <div class="fileList row" v-loading="loading">
        <div class="list" v-if="fileList && fileList.content.length > 0">
            <div
                v-for="(item, index) in fileList.content"
                :key="index"
                @click="openFolder(item, index)"
            >
                <div class="left">
                    <div class="icon">
                        <el-image
                            v-if="item.icon == 'images'"
                            :src="item.thumb"
                            fit="cover"
                            loading="lazy"
                        />
                        <div v-else v-html="item.icon"></div>
                    </div>
                    <p>{{ item.name }}</p>
                </div>
                <div class="right" v-if="!item.is_dir">
                    {{ formatUtil.bitToMBOrGB(item.size) }} ·
                    {{ formatUtil.timeToDate(item.created) }}
                </div>
            </div>
        </div>
    </div>
    <el-pagination
        v-if="fileList && fileList.content.length > 0"
        background
        :page-sizes="[10, 30, 50, 100, 150, 200, 300, 500]"
        layout="total, sizes, prev, pager, next, jumper"
        size="small"
        :default-page-size="30"
        v-model:current-page="search.page"
        v-model:page-size="search.per_page"
        :total="fileList.total"
        @size-change="getFsList"
        @current-change="getFsList"
    />

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
import usePathStore from "@/stores/pathStore";
import formatUtil from "@/utils/formatUtil";

const pathStore = usePathStore();

const w: any = window;

defineExpose({
    getFsList
});

const search = defineModel<FsType.FsListType>("search", {
    required: true
});

const fileList = ref<FsType.FsListResType>();
const loading = ref(false);

/**
 * 获取文件列表
 */
async function getFsList() {
    loading.value = true;

    // 路径不一致时，重置分页数据
    if (search.value.path !== pathStore.currentPath) {
        search.value.page = 1;
    }

    search.value.path = pathStore.currentPath;

    // console.log("当前路径：", search.value.path);
    const data = await http.fs.getFsList(search.value);
    loading.value = false;

    // url 处理
    const contentCache = data.content.map((content) => {
        // 根据文件名获取文件类型
        const fileType = iconFileUtil.getIcon(content);
        // 如果是图片，修改 thumb 拼上 api
        if (fileType.type === "images") {
            content.thumb = w.alistConfig.api + content.thumb;
        }
        // 拼接真实 url
        content.url = `${w.alistConfig.api}/p/${pathStore.currentPath}/${content.name}?sign=${content.sign}`;
        // 修改 icon 与 fileType
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

/**
 * 打开文件夹
 * @param item 文件数据
 * @param index 当前索引
 */
async function openFolder(item: FsType.ContentType, index: number) {
    if (!item.is_dir) {
        infoIndex.value = index;
        return (openInfoState.value = true);
    }
    pathStore.push(item.name);
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
            justify-content: space-between;
            transition: all 0.1s ease-in-out;
            cursor: pointer;

            &:hover {
                background-color: var(--hover-background);
                transform: scale(1.05);
            }

            &:hover .left > p {
                overflow: initial;
            }
        }

        .left {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            border-radius: var(--border-radius);
            padding: 10px;
            box-sizing: border-box;

            > p {
                font-size: 13px;
                width: 100%;
                word-wrap: break-word;
                text-align: center;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
            }

            .icon {
                width: 100%;
                height: 80px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: var(--theme-color);

                :deep(svg) {
                    width: 60px;
                    height: 60px;
                }

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

        .right {
            display: none;
            font-size: 13px;
        }
    }
}

.row {
    .list {
        grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));

        > div {
            align-items: center;

            &:hover {
                transform: scale(1.02);
            }
        }

        .left {
            max-width: 70%;
            flex-direction: row;
            justify-content: start;
            padding: 3px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            .icon {
                width: 30px;
                height: 30px;

                :deep(svg) {
                    width: 100%;
                    height: 100%;
                }
            }

            > p {
                display: block;
                text-align: left;
            }
        }

        .right {
            display: block;
            font-size: 13px;
            color: var(--sub-font-color);
        }
    }
}

.el-pagination {
    margin-top: 20px;
}
</style>
