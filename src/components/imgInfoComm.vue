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
            <div>
                <div
                    v-for="(item, index) in urlList"
                    :key="index"
                    @click="(event) => selectImg(event, index)"
                >
                    <el-image
                        :class="{ active: index == imgIndex }"
                        :src="item"
                        fit="cover"
                        loading="lazy"
                    />
                </div>
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
console.log("🚀筛选后的图片数据 | imgList.value:", imgList.value);

const urlList = ref<string[]>([]);

// 修正索引
const imgIndex = ref(0);
for (let i = 0; i < imgList.value.length; i++) {
    if (imgList.value[i].name === fileList.value[currentIndex.value].name) {
        imgIndex.value = i;
        console.log("🚀修正索引 | imgIndex:", imgIndex.value);
    }
    // urlList.value.push(imgList.value[i].thumb.replace("type=thumb&", ""));
    urlList.value.push(imgList.value[i].thumb);
}

function selectImg(event: MouseEvent, i: number) {
    const parrent = document.querySelector(".imgBox");
    const scrollDom = document.querySelector(".imgList > div") as HTMLElement;
    if (!parrent || !scrollDom) return;

    const dom = event.target as HTMLElement;
    const domX = dom.getBoundingClientRect().x;
    const parentX = parrent.getBoundingClientRect().x;

    console.log("选择元素距离父的x距离", domX - parentX);
    console.log(
        "父偏移",
        parrent.clientWidth / 2 - (domX - parentX - dom.clientWidth / 2)
    );
    scrollDom.style.left = `${parrent.clientWidth / 2 - (domX - parentX + dom.clientWidth / 2)}px`;

    imgIndex.value = i;
}
</script>

<style scoped lang="less">
.imgBox {
    height: 100%;
}

.imgList {
    width: 100%;
    overflow: hidden;

    > div {
        transition: all 0.2s ease-in-out;
        padding: 20px 20px 0;
        box-sizing: border-box;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        gap: 10px;
    }

    .el-image {
        width: 100px;
        height: 100px;
        cursor: pointer;
        border: 5px solid white;
        border-radius: var(--border-radius);
        transition: all 0.2s ease-in-out;
        box-shadow:
            rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
            rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

        &:hover {
            transform: translateY(-5px);
        }
    }

    .active {
        border: 5px solid var(--theme-color);
        transform: translateY(-5px);
    }
}
</style>
