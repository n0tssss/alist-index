<template>
    <div
        class="fileInfoMask"
        @click="state = false"
        :class="{ fileInfoMaskShow: state }"
    ></div>
    <div class="fileInfo" :class="{ fileInfoShow: state }">
        <div v-if="fileList[index]"></div>
    </div>
</template>

<script setup lang="ts">
import * as FsType from "@/api/fs-type";

const fileList = defineModel<FsType.ContentType[]>("fileList", {
    required: true
});
const index = defineModel<number>("index", {
    required: true
});
const state = defineModel<boolean>("state", {
    required: true,
    default: false
});

watch(
    () => index.value,
    () => {
        console.log("文件详情", fileList.value[index.value]);
    }
);
</script>

<style scoped lang="less">
.fileInfo {
    position: fixed;
    left: 50%;
    bottom: 0;
    width: 80%;
    max-width: 1200px;
    height: 80%;
    border-radius: var(--border-radius);
    background-color: var(--background-light);
    box-shadow:
        rgba(0, 0, 0, 0.25) 0px 14px 28px,
        rgba(0, 0, 0, 0.22) 0px 10px 10px;
    transform: translate(-50%, 100%);
    transition: all 0.3s cubic-bezier(0, 0.99, 0.86, 0.92);
}

.fileInfoShow {
    transform: translate(-50%, 0);
}

.fileInfoMask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--mask-color);
    backdrop-filter: var(--backdrop-filter-blur);
    cursor: pointer;
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s;
}

.fileInfoMaskShow {
    visibility: visible;
    opacity: 1;
}
</style>
