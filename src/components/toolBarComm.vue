<!--
 * @Author: N0ts
 * @Date: 2024-07-12 13:36:51
 * @Description: 文件列表工具栏
 * @FilePath: \alist-index\src\components\toolBarComm.vue
 * @Mail：mail@n0ts.top
-->

<template>
    <div class="toolBar">
        <IconButtonComm
            tip="搜索"
            @click="searchStore.toggleDialog"
            icon="search"
        />
        <IconButtonComm
            tip="刷新"
            @click="fileStore.getList(true)"
            icon="refresh"
        />
        <IconButtonComm
            tip="切换主题"
            @click="themeStore.switch"
            icon="theme"
        />
    </div>
</template>

<script setup lang="ts">
import usefileStore from "@/stores/fileStore";
import useThemeStore from "@/stores/themeStore";
import useSearchStore from "@/stores/searchStore";

const fileStore = usefileStore();
const themeStore = useThemeStore();
const searchStore = useSearchStore();
</script>

<style scoped lang="less">
.toolBar {
    display: flex;
    gap: 5px;
    margin-bottom: 10px;
}
</style>
