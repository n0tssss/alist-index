const fileCategories: any = {
    images: [
        "jpg",
        "jpeg",
        "png",
        "gif",
        "bmp",
        "svg",
        "tiff",
        "webp",
        "ico",
        "psd",
        "raw",
        "cr2",
        "nef",
        "orf",
        "sr2"
    ],
    documents: [
        "pdf",
        "doc",
        "docx",
        "xls",
        "xlsx",
        "ppt",
        "pptx",
        "odt",
        "ods",
        "odp",
        "txt",
        "rtf",
        "tex",
        "md",
        "xml",
        "csv",
        "json",
        "log",
        "sql",
        "db",
        "mdb",
        "accdb",
        "pages",
        "numbers",
        "key",
        "epub",
        "mobi",
        "azw",
        "djvu"
    ],
    archives: [
        "zip",
        "rar",
        "7z",
        "tar",
        "gz",
        "bz2",
        "xz",
        "lzma",
        "lha",
        "cab",
        "iso",
        "img",
        "dmg",
        "apk",
        "jar",
        "war",
        "ear",
        "sar",
        "deb",
        "rpm",
        "pkg",
        "msi"
    ],
    audio: [
        "mp3",
        "wav",
        "ogg",
        "flac",
        "aac",
        "wma",
        "m4a",
        "mid",
        "midi",
        "kar",
        "ape",
        "alac",
        "opus",
        "dsf",
        "dff"
    ],
    video: [
        "mp4",
        "avi",
        "mkv",
        "mov",
        "wmv",
        "flv",
        "webm",
        "m4v",
        "3gp",
        "3g2",
        "f4v",
        "swf",
        "vob",
        "ogv",
        "asf",
        "rm",
        "rmvb",
        "ts",
        "mts",
        "m2ts",
        "mxf"
    ],
    executables: [
        "exe",
        "dll",
        "msi",
        "bat",
        "cmd",
        "com",
        "scr",
        "sys",
        "reg",
        "ocx",
        "cpl",
        "drv",
        "vxd",
        "inf",
        "ini"
    ],
    fonts: ["ttf", "otf", "woff", "woff2", "eot", "sfnt"],
    web: [
        "html",
        "htm",
        "xhtml",
        "css",
        "js",
        "jsx",
        "ts",
        "tsx",
        "php",
        "jsp",
        "asp",
        "aspx",
        "cfm",
        "pl",
        "py",
        "rb",
        "swift",
        "go",
        "java",
        "cs",
        "cpp",
        "c",
        "h",
        "sh",
        "bash",
        "bat",
        "cmd",
        "sql",
        "json",
        "xml",
        "yaml",
        "yml",
        "md",
        "markdown",
        "rst",
        "txt",
        "log"
    ],
    scripts: [
        "sh",
        "bash",
        "bat",
        "cmd",
        "ps1",
        "vbs",
        "wsf",
        "pl",
        "py",
        "rb",
        "lua",
        "go",
        "js",
        "jsx",
        "ts",
        "tsx",
        "coffee",
        "scala",
        "groovy",
        "clj",
        "cljs",
        "fs",
        "fsx",
        "ex",
        "exs",
        "erl",
        "otp",
        "m",
        "mm",
        "r",
        "jl",
        "swift",
        "kt",
        "kts",
        "gradle",
        "groovy",
        "dart",
        "rs",
        "elm",
        "nim",
        "zig",
        "wasm"
    ],
    databases: [
        "db",
        "mdb",
        "accdb",
        "sqlite",
        "sql",
        "dump",
        "bak",
        "ora",
        "ibd",
        "frm",
        "myd",
        "myi",
        "sdf",
        "mdf",
        "ldf",
        "sln",
        "suo",
        "pdb",
        "sqlproj",
        "sqlproj.user",
        "dacpac",
        "bacpac",
        "dtsx",
        "ssisdeploymentmanifest",
        "bim",
        "dtsxproj",
        "dtsxproj.user",
        "ssdtproj",
        "ssdtproj.user"
    ],
    models: [
        "3ds",
        "max",
        "obj",
        "fbx",
        "dae",
        "blend",
        "skp",
        "ma",
        "mb",
        "stl",
        "obj",
        "ply",
        "gltf",
        "glb",
        "usd",
        "usdz",
        "abc",
        "x3d",
        "vrml",
        "wrl",
        "3dm",
        "ifc",
        "step",
        "iges",
        "dwg",
        "dxf",
        "dgn",
        "sat",
        "sm"
    ]
};
const defaultIcons: any = {
    images: "images", // 图片
    // 文档
    documents: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" ><path fill="currentColor" d="M832 384H576V128H192v768h640zm-26.496-64L640 154.496V320zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m160 448h384v64H320zm0-192h160v64H320zm0 384h384v64H320z"></path></svg>`,
    // 档案
    archives: `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 1024 1024" ><path fill="currentColor" d="M480 320h192c21.33 0 32-10.67 32-32s-10.67-32-32-32H480c-21.33 0-32 10.67-32 32s10.67 32 32 32"></path><path fill="currentColor" d="M887.01 72.99C881.01 67 873.34 64 864 64H160c-9.35 0-17.02 3-23.01 8.99C131 78.99 128 86.66 128 96v832c0 9.35 2.99 17.02 8.99 23.01S150.66 960 160 960h704c9.35 0 17.02-2.99 23.01-8.99S896 937.34 896 928V96c0-9.35-3-17.02-8.99-23.01M192 896V128h96v768zm640 0H352V128h480z"></path><path fill="currentColor" d="M480 512h192c21.33 0 32-10.67 32-32s-10.67-32-32-32H480c-21.33 0-32 10.67-32 32s10.67 32 32 32m0 192h192c21.33 0 32-10.67 32-32s-10.67-32-32-32H480c-21.33 0-32 10.67-32 32s10.67 32 32 32"></path></svg>`,
    // 音频
    audio: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" ><path fill="currentColor" d="M896 529.152V512a384 384 0 1 0-768 0v17.152A128 128 0 0 1 320 640v128a128 128 0 1 1-256 0V512a448 448 0 1 1 896 0v256a128 128 0 1 1-256 0V640a128 128 0 0 1 192-110.848M896 640a64 64 0 0 0-128 0v128a64 64 0 0 0 128 0zm-768 0v128a64 64 0 0 0 128 0V640a64 64 0 1 0-128 0"></path></svg>`,
    // 视频
    video: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" ><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m-48-247.616L668.608 512 464 375.616zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z"></path></svg>`,
    // 可执行文件
    executables: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" ><path fill="currentColor" d="M805.504 320 640 154.496V320zM832 384H576V128H192v768h640zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m318.4 582.144 180.992-180.992L704.64 510.4 478.4 736.64 320 578.304l45.248-45.312z"></path></svg>`,
    // 字体
    fonts: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" ><path fill="currentColor" d="m199.04 672.64 193.984 112 224-387.968-193.92-112-224 388.032zm-23.872 60.16 32.896 148.288 144.896-45.696zM455.04 229.248l193.92 112 56.704-98.112-193.984-112-56.64 98.112zM104.32 708.8l384-665.024 304.768 175.936L409.152 884.8h.064l-248.448 78.336zm384 254.272v-64h448v64h-448z"></path></svg>`,
    // 网页
    web: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" ><path fill="currentColor" d="M832 384H576V128H192v768h640zm-26.496-64L640 154.496V320zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m160 448h384v64H320zm0-192h160v64H320zm0 384h384v64H320z"></path></svg>`,
    // 脚本
    scripts: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" ><path fill="currentColor" d="M832 384H576V128H192v768h640zm-26.496-64L640 154.496V320zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m160 448h384v64H320zm0-192h160v64H320zm0 384h384v64H320z"></path></svg>`,
    // 数据库
    databases: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" ><path fill="currentColor" d="m161.92 580.736 29.888 58.88C171.328 659.776 160 681.728 160 704c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 615.808 928 657.664 928 704c0 129.728-188.544 224-416 224S96 833.728 96 704c0-46.592 24.32-88.576 65.92-123.264z"></path><path fill="currentColor" d="m161.92 388.736 29.888 58.88C171.328 467.84 160 489.792 160 512c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 423.808 928 465.664 928 512c0 129.728-188.544 224-416 224S96 641.728 96 512c0-46.592 24.32-88.576 65.92-123.264z"></path><path fill="currentColor" d="M512 544c-227.456 0-416-94.272-416-224S284.544 96 512 96s416 94.272 416 224-188.544 224-416 224m0-64c196.672 0 352-77.696 352-160S708.672 160 512 160s-352 77.696-352 160 155.328 160 352 160"></path></svg>`,
    // 模型
    models: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" ><path fill="currentColor" d="M832 384H576V128H192v768h640zm-26.496-64L640 154.496V320zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m160 448h384v64H320zm0-192h160v64H320zm0 384h384v64H320z"></path></svg>`,
    // 文件夹
    folder: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" ><path fill="currentColor" d="M128 192v640h768V320H485.76L357.504 192zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32"></path></svg>`,
    // 未知
    unknown: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" ><path fill="currentColor" d="M128 192v640h768V320H485.76L357.504 192zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32"></path></svg>`
};

function handle(icon: string) {
    return icon;
}

export default {
    getIcon(fileName: string) {
        if (!fileName) throw new Error("getIcon 需要传入 fileName 文件名！");

        // 文件名处理，获取尾缀
        const split = fileName.split(".");
        const extension = split[split.length - 1].toLowerCase();
        if (extension === "" || split.length === 1) {
            return { type: "folder", icon: handle(defaultIcons.folder) };
        }

        // 遍历类型
        for (const category in fileCategories) {
            let cache = null;
            fileCategories[category].forEach((ext: string) => {
                if (ext.toLowerCase() === extension) {
                    return (cache = {
                        type: category,
                        icon: handle(defaultIcons[category])
                    });
                }
            });
            if (cache) return cache;
        }

        return { type: "unknown", icon: handle(defaultIcons.unknown) };
    }
};
