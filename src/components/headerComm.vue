<!--
 * @Author: N0ts
 * @Date: 2024-07-08 00:18:56
 * @Description: 头部菜单
 * @FilePath: \alist-index\src\components\headerComm.vue
 * @Mail：mail@n0ts.top
-->
<template>
    <div class="header">
        <div class="title" @click="router.push('/')">{{ webInfoStore.webInfo.site_title }}</div>
        <div>搜索</div>
    </div>
</template>

<script setup lang="ts">
import useWebInfoStore from "@/stores/webInfoStore";
import { useRouter } from "vue-router";
const router = useRouter();

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

        &:hover {
            color: var(--theme-color-highlight);
        }
    }
}
</style>
