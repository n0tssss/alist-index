<template>
    <div class="path">
        <div @click="pathClick(-1)">
            <p>🏠主目录</p>
        </div>
        <div
            v-for="(item, index) in path"
            :key="index"
            @click="pathClick(index)"
        >
            <span>/</span>
            <p>{{ item }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
const path = defineModel<string[]>("path", {
    required: true
});

const props = defineProps<{
    cb: () => Promise<void>;
}>();

function pathClick(i: number) {
    path.value = path.value.slice(0, i + 1);
    setTimeout(() => {
        props.cb();
    }, 0);
}
</script>

<style scoped lang="less">
.path {
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 10px;
    gap: 0;

    > div {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        gap: 3px;

        > p {
            border-radius: var(--border-radius);
            padding: 5px 8px;
            box-sizing: border-box;
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
                background-color: var(--hover-background);
            }
        }
    }
}
</style>
