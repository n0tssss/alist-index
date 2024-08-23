<!--
 * @Author: N0ts
 * @Date: 2024-07-17 15:52:12
 * @Description: 地址面包屑
 * @FilePath: \alist-index\src\components\pathComm.vue
 * @Mail: mail@n0ts.top
-->
<template>
    <div class="path">
        <div @click="pathClick(-1)">
            <p>🏠主目录</p>
        </div>
        <div
            v-for="(item, index) in fileStore.orther.path"
            :key="index"
            @click="pathClick(index)"
        >
            <span>/</span>
            <p>{{ item }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import usefileStore from "@/stores/fileStore";

const fileStore = usefileStore();

function pathClick(i: number) {
    fileStore.setPath(fileStore.orther.path.slice(0, i + 1));
}
</script>

<style scoped lang="less">
.path {
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 10px;
    gap: 0;

    > div {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        gap: 3px;

        > p {
            border-radius: var(--border-radius);
            padding: 5px 8px;
            box-sizing: border-box;
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
                background-color: var(--hover-background);
            }
        }
    }
}
</style>
