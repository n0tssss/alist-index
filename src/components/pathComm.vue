<template>
    <div class="path">
        <div @click="pathClick(-1)">
            <p>🏠主目录</p>
        </div>
        <div
            v-for="(item, index) in searchStore.orther.path"
            :key="index"
            @click="pathClick(index)"
        >
            <span>/</span>
            <p>{{ item }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import useSearchStore from "@/stores/searchStore";

const searchStore = useSearchStore();

function pathClick(i: number) {
    searchStore.setPath(searchStore.orther.path.slice(0, i + 1));
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
