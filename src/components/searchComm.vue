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
    <div
        class="box"
        :class="{
            boxShow: searchStore.dialog,
            open:
                searchStore.data &&
                searchStore.data.content &&
                searchStore.data.content.length > 0
        }"
    >
        <div class="opration">
            <input
                type="text"
                placeholder="🔍 搜点什么？"
                v-model="searchStore.params.keywords"
                @input="search(false)"
                @keydown.enter="search(true)"
            />
        </div>
        <div
            class="result scrollBar"
            v-if="searchStore.data"
            v-loading="searchStore.load"
        >
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
                    <p v-html="item.html"></p>
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
import formatUtil from "@/utils/formatUtil";

const searchStore = useSearchStore();

let searchTimeout = null as null | number;

async function search(now?: boolean) {
    if (searchTimeout) clearTimeout(searchTimeout);
    if (now) return await searchStore.search();

    searchTimeout = setTimeout(async () => {
        await searchStore.search();
        console.log("🚀搜索结果 | searchStore.data:", searchStore.data);
    }, 300);
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
    top: 30%;
    left: 50%;
    z-index: 9999;
    transform: translateX(-50%) scale(0);
    width: 50%;
    max-width: 800px;
    height: 100px;
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
        height: 95%;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        overflow-x: hidden;
        margin-top: 10px;
        padding-right: 10px;
        box-sizing: border-box;

        > div {
            display: flex;
            justify-content: space-between;
            transition: all 0.1s ease-in-out;
            cursor: pointer;
            border-radius: var(--border-radius);
            align-items: center;

            &:hover {
                background-color: var(--background);
                transform: scale(1.02);
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

                :deep(em) {
                    color: red;
                    font-style: normal;
                }
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

.open {
    height: 80%;
    top: 10%;
}

.boxShow {
    transform: translateX(-50%) scale(1);
}
</style>
