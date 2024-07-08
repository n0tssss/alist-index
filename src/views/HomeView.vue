<!--
 * @Author: N0ts
 * @Date: 2024-07-08 08:58:14
 * @Description: 首页
 * @FilePath: \alist-index\src\views\HomeView.vue
 * @Mail：mail@n0ts.top
-->
<template>
    <div>
        <PathComm
            v-if="fileListCommRef"
            v-model:path="path"
            :cb="fileListCommRef.getFsList"
        />
        <fileListComm
            v-model:search="fsSearch"
            v-model:path="path"
            ref="fileListCommRef"
        />
    </div>
</template>

<script setup lang="ts">
import * as FsType from "@/api/fs-type";
import fileListComm from "@/components/fileListComm.vue";

const fsSearch = ref<FsType.FsListType>({} as any);
const fileListCommRef = ref<InstanceType<typeof fileListComm>>();
const path = ref<string[]>(["n0ts", "照片与视频", "GTR 2023-7-29"]);

onMounted(() => {
    fileListCommRef.value?.getFsList();
});
</script>

<style scoped lang="less"></style>
