<!--
 * @Author: N0ts
 * @Date: 2024-07-08 00:18:56
 * @Description: 头部菜单
 * @FilePath: \alist-index\src\components\headerComm.vue
 * @Mail：mail@n0ts.top
-->
<template>
    <div class="header">
        <div
            class="title"
            @click="fileStore.setPath(fileStore.orther.path.slice(0, 0))"
        >
            <img :src="webInfoStore.webInfo.logo" alt="logo" />
            <p>{{ webInfoStore.webInfo.site_title }}</p>
        </div>
        <!-- <div>搜索</div> -->
    </div>
</template>

<script setup lang="ts">
import useWebInfoStore from "@/stores/webInfoStore";
import usefileStore from "@/stores/fileStore";

const fileStore = usefileStore();
const webInfoStore = useWebInfoStore();
</script>

<style scoped lang="less">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    background-color: var(--background-light);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    margin-bottom: 25px;

    .title {
        color: var(--theme-color);
        cursor: pointer;
        font-size: 1.2rem;
        font-weight: bold;
        display: flex;
        align-items: center;
        transition: 0.2s ease-in-out;

        img {
            width: 30px;
            height: 30px;
            margin-right: 10px;
        }

        &:hover {
            color: var(--theme-color-highlight);
        }
    }
}
</style>
