<!--
 * @Author: N0ts
 * @Date: 2024-07-13 18:43:14
 * @Description: 小工具图标
 * @FilePath: \alist-index\src\components\iconButtonComm.vue
 * @Mail：mail@n0ts.top
-->
<template>
    <div class="iconBtn">
        <div v-html="IconData[props.icon]"></div>
        <div class="tip">{{ props.tip }}</div>
    </div>
</template>

<script setup lang="ts">
import IconData from "@/data/icon";

const props = defineProps<{
    tip: string;
    icon: keyof typeof IconData;
}>();
</script>

<style scoped lang="less">
.iconBtn {
    border-radius: var(--border-radius);
    background-color: var(--background-light);
    cursor: pointer;
    padding: 3px 8px;
    transition: all 0.1s ease-in-out;
    border: 1px solid var(--background-light);
    position: relative;

    &:hover {
        color: var(--theme-color);
        border: 1px solid var(--theme-color);
    }

    &:active {
        transform: scale(0.9);
    }

    :deep(svg) {
        width: 14px;
        height: 14px;
    }

    .tip {
        position: absolute;
        top: 110%;
        left: 50%;
        transform: translate(-50%, 5px);
        background-color: var(--background-light);
        border-radius: var(--border-radius);
        padding: 5px 10px;
        color: var(--font-color);
        transition: all 0.2s ease-in-out;
        font-size: 13px;
        white-space: nowrap;
        opacity: 0;
        visibility: hidden;
        z-index: 9999;
    }

    &:hover .tip {
        opacity: 1;
        visibility: visible;
        transform: translate(-50%, 0);
    }
}
</style>
