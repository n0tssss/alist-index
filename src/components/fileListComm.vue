<!--
 * @Author: N0ts
 * @Date: 2024-07-08 09:26:56
 * @Description: 文件列表
 * @FilePath: \alist-index\src\components\fileListComm.vue
 * @Mail：mail@n0ts.top
-->
<template>
    <div class="fileList" v-loading="searchStore.orther.load">
        <div
            class="list"
            v-if="searchStore.data && searchStore.data.content.length > 0"
        >
            <div
                v-for="(item, index) in searchStore.data.content"
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
        v-if="searchStore.data && searchStore.data.content.length > 0"
        background
        :page-sizes="[10, 30, 50, 100, 150, 200, 300, 500]"
        layout="total, sizes, prev, pager, next, jumper"
        size="small"
        v-model:current-page="pageInfo.page"
        v-model:page-size="pageInfo.per_page"
        :total="searchStore.data.total"
    />

    <FileInfoComm v-if="searchStore.data" v-model:state="openInfoState" />
</template>

<script setup lang="ts">
import formatUtil from "@/utils/formatUtil";
import * as FsType from "@/api/fs-type";
import useSearchStore from "@/stores/searchStore";

const searchStore = useSearchStore();

onMounted(() => {
    searchStore.getList();
});

const pageInfo = ref({
    page: searchStore.params.page,
    per_page: searchStore.params.per_page
});
watch(
    () => pageInfo.value,
    () => {
        searchStore.setSearchData({
            page: pageInfo.value.page,
            per_page: pageInfo.value.per_page
        });
        searchStore.getList();
    },
    {
        deep: true
    }
);

const openInfoState = ref(false);

/**
 * 打开文件夹
 * @param item 文件数据
 * @param index 当前索引
 */
async function openFolder(item: FsType.ContentType, index: number) {
    if (!item.is_dir) {
        searchStore.orther.selectIndex = index;
        return (openInfoState.value = true);
    }
    searchStore.pushPath(item.name);
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
            border-radius: var(--border-radius);

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
