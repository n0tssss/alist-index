<!--
 * @Author: N0ts
 * @Date: 2024-07-11 10:13:42
 * @Description: 文件详情展示
 * @FilePath: \alist-index\src\components\fileInfoComm.vue
 * @Mail：mail@n0ts.top
-->
<template>
    <div
        class="fileInfoMask"
        @click="state = false"
        :class="{ fileInfoMaskShow: state }"
    ></div>
    <div class="fileInfo" :class="{ fileInfoShow: state }">
        <div class="close" @click="state = false">
            <svg
                fill="currentColor"
                stroke-width="0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                height="2em"
                width="2em"
                style="overflow: visible; color: var(--font-color)"
            >
                <path
                    fill-rule="evenodd"
                    d="m7.116 8-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z"
                    clip-rule="evenodd"
                ></path>
            </svg>
        </div>
        <div
            class="infoBox"
            v-if="
                state &&
                fileStore.data &&
                fileStore.data.content[fileStore.orther.selectIndex] &&
                !fileStore.orther.fileLoad
            "
        >
            <ImgInfoComm
                v-if="
                    fileStore.data.content[fileStore.orther.selectIndex]
                        .fileType === 'images'
                "
            />
            <VideoInfoComm
                v-else-if="
                    fileStore.data.content[fileStore.orther.selectIndex]
                        .fileType === 'video'
                "
            />
            <OrtherFileComm v-else />
        </div>
    </div>
</template>

<script setup lang="ts">
import usefileStore from "@/stores/fileStore";

const fileStore = usefileStore();

const state = defineModel<boolean>("state", {
    required: true,
    default: false
});

watch(
    () => state.value,
    () => {
        console.log(fileStore.orther.route?.params.path);
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
    height: 95%;
    border-radius: var(--border-radius);
    background-color: var(--background-light);
    box-shadow:
        rgba(0, 0, 0, 0.25) 0px 14px 28px,
        rgba(0, 0, 0, 0.22) 0px 10px 10px;
    transform: translate(-50%, 100%);
    transition: all 0.3s cubic-bezier(0, 0.99, 0.86, 0.92);

    .infoBox {
        height: 100%;
    }

    .close {
        position: absolute;
        right: 30px;
        top: 30px;
        cursor: pointer;
        background-color: var(--background-light);
        border-radius: var(--border-radius);
        padding: 5px 5px 0;
        box-sizing: border-box;
        z-index: 9999;

        :deep(svg) {
            transition: all 0.2s ease-in-out;

            &:hover {
                transform: rotate(90deg) scale(1.1);
            }
        }
    }
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
