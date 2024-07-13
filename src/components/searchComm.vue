<!--
 * @Author: N0ts
 * @Date: 2024-07-13 22:11:36
 * @Description:  搜索框
 * @FilePath: \alist-index\src\components\searchComm.vue
 * @Mail：mail@n0ts.top
-->

<template>
    <div
        class="mask"
        :class="{ maskShow: searchStore.dialog }"
        @click="searchStore.toggleDialog"
    ></div>
    <div class="box" :class="{ boxShow: searchStore.dialog }">
        <div class="opration">
            <input
                type="text"
                placeholder="🔍 搜点什么？"
                v-model="searchData.keywords"
            />
        </div>
        <div class="result" v-if="searchStore.data">
            <div v-for="(item, index) in searchStore.data.content" :key="index">
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
                    {{ formatUtil.bitToMBOrGB(item.size) }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import useSearchStore from "@/stores/searchStore";
import useFileStore from "@/stores/fileStore";
import formatUtil from "@/utils/formatUtil";

const searchStore = useSearchStore();
const fileStore = useFileStore();

let searchTimeout = null as null | number;
const searchData = ref({
    parent: fileStore.currentPath,
    keywords: "",
    scope: 0 as 0 | 1 | 2,
    page: 1,
    per_page: 30,
    password: ""
});

watch(
    () => searchData.value.keywords,
    () => {
        search();
    }
);

async function search() {
    if (searchTimeout) clearTimeout(searchTimeout);
    searchTimeout = setTimeout(async () => {
        await searchStore.search(searchData.value);
        console.log("🚀搜索结果 | searchStore.data:", searchStore.data);
    }, 500);
}
</script>

<style scoped lang="less">
.mask {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background-color: var(--mask-color);
    backdrop-filter: var(--backdrop-filter-blur);
    cursor: pointer;
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s ease-in-out;
}

.maskShow {
    visibility: visible;
    opacity: 1;
}

.box {
    position: fixed;
    top: 10%;
    left: 50%;
    z-index: 9999;
    transform: translateX(-50%) scale(0);
    width: 50%;
    max-width: 800px;
    border-radius: var(--border-radius);
    background-color: var(--background-light);
    padding: 30px 50px;
    box-sizing: border-box;
    box-shadow: var(--box-shadow);
    transition: all 0.3s ease-in-out;

    .opration {
        > input {
            display: block;
            width: 100%;
            text-align: center;
            margin: 0 auto;
        }
    }

    .result {
        height: 80%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
        grid-auto-flow: row dense;
        overflow-y: auto;

        > div {
            display: flex;
            justify-content: space-between;
            transition: all 0.1s ease-in-out;
            cursor: pointer;
            border-radius: var(--border-radius);
            align-items: center;

            &:hover {
                transform: scale(1.02);
            }

            &:hover .left > p {
                overflow: initial;
            }
        }

        .left {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            border-radius: var(--border-radius);
            box-sizing: border-box;
            max-width: 70%;
            flex-direction: row;
            justify-content: start;
            padding: 3px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

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
                width: 30px;
                height: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: var(--theme-color);

                :deep(svg) {
                    width: 100%;
                    height: 100%;
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

.boxShow {
    transform: translateX(-50%) scale(1);
}
</style>
