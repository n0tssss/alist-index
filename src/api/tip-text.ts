import { ElMessage } from "element-plus";

const template = {
    "failed get storage: storage not found; rawPath:": "此路径不存在哦"
};

export default function (text: string) {
    for (const key of Object.keys(template) as Array<keyof typeof template>) {
        if (text.includes(key)) {
            ElMessage.error(text.replace(key, template[key]));
        }
    }
}
