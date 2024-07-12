<!--
 * @Author: N0ts
 * @Date: 2024-07-12 13:36:51
 * @Description: 文件列表工具栏
 * @FilePath: \alist-index\src\components\toolBarComm.vue
 * @Mail：mail@n0ts.top
-->

<template>
    <div class="toolBar">
        <IconButtonComm tip="刷新" @click="props.cb">
            <template v-slot>
                <svg
                    fill="none"
                    stroke-width="2"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    style="overflow: visible; color: currentcolor"
                >
                    <path d="M1 4 1 10 7 10"></path>
                    <path d="M23 20 23 14 17 14"></path>
                    <path
                        d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4-4.64 4.36A9 9 0 0 1 3.51 15"
                    ></path>
                </svg>
            </template>
        </IconButtonComm>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    cb: () => Promise<void>;
}>();
</script>

<style scoped lang="less">
.toolBar {
    display: flex;
    margin-bottom: 10px;
}
</style>
