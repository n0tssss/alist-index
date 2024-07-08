<!--
 * @Author: N0ts
 * @Date: 2024-07-08 16:50:22
 * @Description: 图片查看
 * @FilePath: \alist-index\src\components\imgInfoComm.vue
 * @Mail：mail@n0ts.top
-->
<template>
    <div class="imgBox" scroll-container>
        <div class="imgList">
            <div v-for="(item, index) in urlList" :key="index">
                <el-image :src="item" fit="cover" loading="lazy" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import * as FsType from "@/api/fs-type";

const fileList = defineModel<FsType.ContentType[]>("fileList", {
    required: true
});
const currentIndex = defineModel<number>("index", {
    required: true
});

const imgList = computed(() => {
    return fileList.value.filter((item) => {
        return item.fileType === "images";
    });
});
console.log('🚀筛选后的图片数据 | imgList.value:', imgList.value);

const urlList = ref<string[]>([]);

// 修正索引
const imgIndex = ref(0);
for (let i = 0; i < imgList.value.length; i++) {
    if (imgList.value[i].name === fileList.value[currentIndex.value].name) {
        imgIndex.value = i;
        console.log('🚀修正索引 | imgIndex:', imgIndex.value);
    }
    urlList.value.push(imgList.value[i].thumb.replace("type=thumb&", ""));
}
</script>

<style scoped lang="less">
.imgBox {
    height: 100%;
    overflow-y: auto;
}

.imgList {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
}
</style>
