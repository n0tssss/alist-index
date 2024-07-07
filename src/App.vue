<!--
 * @Author: N0ts
 * @Date: 2024-07-07 23:42:13
 * @Description: app
 * @FilePath: \alist-index\src\App.vue
 * @Mail：mail@n0ts.top
-->

<template>
    <headerComm v-if="webInfostore.webInfo" />
    <router-view />
</template>

<script setup lang="ts">
import useWebInfoStore from "@/stores/webInfoStore";
import useThemeStore from "@/stores/themeStore"
import { onMounted } from "vue";

const webInfostore = useWebInfoStore();
const themeStore = useThemeStore();

onMounted(async () => {
    themeStore.init();

    await webInfostore.fetchWebInfo();
    console.log("🚀网站信息 | webInfostore.webInfo:", webInfostore.getWebInfo);

    document.title = webInfostore.webInfo.site_title;
    document.querySelector("link[rel='icon']")?.setAttribute("href", webInfostore.webInfo.favicon);
    document.documentElement.style.setProperty("--theme-color", webInfostore.webInfo.main_color);
});
</script>

<style scoped lang="less"></style>
