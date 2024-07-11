<!--
 * @Author: N0ts
 * @Date: 2024-07-08 08:58:14
 * @Description: 首页
 * @FilePath: \alist-index\src\views\HomeView.vue
 * @Mail：mail@n0ts.top
-->
<template>
    <div>
        <PathComm v-if="fileListCommRef" :cb="fileListCommRef.getFsList" />
        <fileListComm v-model:search="fsSearch" ref="fileListCommRef" />
    </div>
</template>

<script setup lang="ts">
import * as FsType from "@/api/fs-type";
import fileListComm from "@/components/fileListComm.vue";
import usePathStore from "@/stores/pathStore";

const pathStore = usePathStore();
pathStore.set(["公开", "电影"]);

const fsSearch = ref<FsType.FsListType>({} as any);
const fileListCommRef = ref<InstanceType<typeof fileListComm>>();

onMounted(() => {
    fileListCommRef.value?.getFsList();
});
</script>

<style scoped lang="less"></style>
