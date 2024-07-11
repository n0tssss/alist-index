import { defineStore } from "pinia";

export default defineStore("path", {
    state: () => ({
        path: [] as string[]
    }),
    getters: {
        currentPath: (state) => {
            return state.path.join("/");
        }
    },
    actions: {
        set(path: string[]) {
            this.path = path;
        },
        push(path: string) {
            this.path.push(path);
        }
    }
});
