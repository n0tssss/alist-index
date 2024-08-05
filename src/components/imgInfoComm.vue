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
                    v-for="(item, index) in imgList"
                    :key="index"
                    @click="selectImg(index)"
                >
                    <el-image
                        :class="{ active: index == imgIndex }"
                        :src="item.thumb"
                        fit="cover"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>

        <div class="desc" v-if="fileStore.file">
            <div class="imgDesc" v-loading="imgLoad">
                <img
                    :src="fileStore.file.raw_url"
                    :alt="fileStore.file.name"
                    :key="fileStore.file.name"
                    @load="imgLoadSuccess"
                />
            </div>
            <p class="title">{{ fileStore.file.name }}</p>
            <div class="fileInfo">
                <span
                    >大小：{{
                        formatUtil.bitToMBOrGB(fileStore.file.size)
                    }}</span
                >
                <span
                    >创建：{{
                        formatUtil.timeToDate(fileStore.file.created)
                    }}</span
                >
            </div>
            <div class="btnList">
                <el-tooltip content="复制链接" placement="bottom">
                    <el-button
                        type="success"
                        icon="CopyDocument"
                        circle
                        @click="formatUtil.copy(fileStore.file.raw_url)"
                    />
                </el-tooltip>
                <el-tooltip content="下载" placement="bottom">
                    <el-button
                        type="primary"
                        icon="Download"
                        circle
                        @click="formatUtil.openUrl(fileStore.file.raw_url)"
                    />
                </el-tooltip>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import * as FsType from "@/api/fs-type";
import formatUtil from "@/utils/formatUtil";
import Viewer from "viewerjs";
import "viewerjs/dist/viewer.css";
import usefileStore from "@/stores/fileStore";

const fileStore = usefileStore();

onMounted(() => {
    imgListScroll(fileStore.orther.selectIndex);
});

// 修正索引
const imgIndex = ref(0);

const imgList = ref<FsType.ContentType[]>();
function imgListInit() {
    if (!fileStore.data) return [];

    const cache = fileStore.data.content.filter((item) => {
        return item.fileType === "images";
    });

    for (let i = 0; i < cache.length; i++) {
        if (cache[i].name === fileStore.file?.name) {
            imgIndex.value = i;
        }
    }

    imgList.value = cache;
}
imgListInit();

/**
 * 根据索引定位导航栏图片
 * @param i 索引
 */
async function selectImg(i: number) {
    if (i == imgIndex.value) return;
    imgLoad.value = true;

    await fileStore.setCurrentIndex(i);
    imgListScroll(i);

    imgIndex.value = i;
}

function imgListScroll(i: number) {
    const scrollDom = document.querySelector(".imgList > div") as HTMLElement;
    const imgDom = document.querySelectorAll(
        ".imgList > div > div"
    )[0] as HTMLElement;
    if (scrollDom) {
        scrollDom.style.transform = `translateX(-${(imgDom.clientWidth + 10) * i}px)`;
    }
}

/**
 * 查看图片初始化
 */
let viewer: any = null;
async function viewerInit() {
    await nextTick();
    if (!viewer) {
        const dom = document.querySelector(".imgDesc") as HTMLElement;
        if (!dom) {
            return setTimeout(() => {
                viewerInit();
            }, 100);
        }

        viewer = new Viewer(dom, {
            toolbar: false,
            keyboard: false,
            navbar: false
        });
    }
}
viewerInit();

const imgLoad = ref(true);

function imgLoadSuccess() {
    imgLoad.value = false;
    if (viewer) {
        viewer.update();
    }
}
</script>

<style scoped lang="less">
.imgBox {
    height: 100%;
    text-align: center;
}

.imgList {
    width: 100%;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 0;

    > div {
        transition: all 0.2s ease-in-out;
        padding: 20px 20px 0;
        box-sizing: border-box;
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        gap: 10px;
        position: relative;
        left: calc(50% - 20px - 55px);
    }

    .el-image {
        width: 100px;
        height: 100px;
        cursor: pointer;
        border: 5px solid white;
        border-radius: var(--border-radius);
        transition: all 0.2s ease-in-out;
        box-sizing: border-box;
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

.desc {
    height: 100%;

    .imgDesc {
        height: 65%;
        cursor: pointer;

        > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: var(--border-radius);
        }
    }

    .title {
        width: 100%;
        text-align: center;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        font-weight: bold;
        margin-top: 10px;
    }

    .fileInfo {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        padding: 10px;
        box-sizing: border-box;

        span {
            color: var(--sub-font-color);
        }
    }

    .btnList {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
}
</style>
