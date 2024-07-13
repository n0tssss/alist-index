import * as FsType from "@/api/fs-type";

const fileCategories = {
    images: ["jpg", "jpeg", "png", "gif", "bmp", "svg", "tiff", "webp"],
    heic: ["heic"],
    documents: ["djvu", "xml", "json", "log", "odt", "txt", "rtf", "md"],
    wordDocuments: ["doc", "docx"],
    excelDocuments: ["xls", "xlsx"],
    powerpointDocuments: ["ppt", "pptx"],
    openDocumentSpreadsheet: ["ods"],
    openDocumentPresentation: ["odp"],
    pdfDocuments: ["pdf"],
    eReaderBooks: ["epub", "mobi", "azw"],
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
        "dmg",
        "apk"
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
        "rb"
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
    heic: `<svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="1em" width="1em" style="overflow: visible; color: currentcolor;"><path fill-rule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5Zm-4.637 8.554a1.732 1.732 0 0 0-.103.633v.495c0 .246.034.455.103.627a.834.834 0 0 0 .299.393.846.846 0 0 0 .477.131.868.868 0 0 0 .401-.088.698.698 0 0 0 .273-.248.8.8 0 0 0 .117-.364h.765v.076a1.268 1.268 0 0 1-.226.674c-.137.194-.32.345-.55.454a1.81 1.81 0 0 1-.786.164c-.36 0-.664-.072-.914-.216a1.424 1.424 0 0 1-.571-.627c-.129-.272-.194-.597-.194-.976v-.498c0-.379.066-.705.197-.978.13-.274.321-.485.571-.633.252-.149.556-.223.911-.223.219 0 .421.032.607.097.187.062.35.153.489.272a1.324 1.324 0 0 1 .466.964v.073h-.765a.85.85 0 0 0-.12-.38.7.7 0 0 0-.273-.261.802.802 0 0 0-.398-.097.814.814 0 0 0-.475.138.868.868 0 0 0-.301.398Zm-6.1-1.128v4h-.79V14.21H.79v1.714H0v-3.999h.791v1.626h1.682v-1.626h.79Zm1.488 3.352h1.79v.647H3.966v-3.999H6.54v.648H4.75v1.025h1.684v.607H4.751v1.072Zm3.163.647v-3.999h-.791v4h.79Z"></path></svg>`,
    // 文档
    documents: `<svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M416 221.25V416a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V96a48 48 0 0 1 48-48h98.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62Z"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 56v120a32 32 0 0 0 32 32h120"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 288 336 288"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 368 336 368"></path></svg>`,
    wordDocuments: `<svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326 602 137.8V326h188.2zM512 566.1l52.81 197a12 12 0 0 0 11.6 8.9h31.77a12 12 0 0 0 11.6-8.88l74.37-276a12 12 0 0 0 .4-3.12 12 12 0 0 0-12-12h-35.57a12 12 0 0 0-11.7 9.31l-45.78 199.1-49.76-199.32A12 12 0 0 0 528.1 472h-32.2a12 12 0 0 0-11.64 9.1L434.6 680.01 388.5 481.3a12 12 0 0 0-11.68-9.29h-35.39a12 12 0 0 0-3.11.41 12 12 0 0 0-8.47 14.7l74.17 276A12 12 0 0 0 415.6 772h31.99a12 12 0 0 0 11.59-8.9l52.81-197z"></path></svg>`,
    excelDocuments: `<svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23 1.5q.41 0 .7.3.3.29.3.7v19q0 .41-.3.7-.29.3-.7.3H7q-.41 0-.7-.3-.3-.29-.3-.7V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h5V2.5q0-.41.3-.7.29-.3.7-.3zM6 13.28l1.42 2.66h2.14l-2.38-3.87 2.34-3.8H7.46l-1.3 2.4-.05.08-.04.09-.64-1.28-.66-1.29H2.59l2.27 3.82-2.48 3.85h2.16zM14.25 21v-3H7.5v3zm0-4.5v-3.75H12v3.75zm0-5.25V7.5H12v3.75zm0-5.25V3H7.5v3zm8.25 15v-3h-6.75v3zm0-4.5v-3.75h-6.75v3.75zm0-5.25V7.5h-6.75v3.75zm0-5.25V3h-6.75v3Z"></path></svg>`,
    powerpointDocuments: `<svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm2.817-1.333h-1.6v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474.108-.201.161-.427.161-.677 0-.25-.052-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.793.793 0 0 1-.375.082H4.15V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm2.767-.67v3.336H7.48v-3.337H6.346v-.662h3.065v.662H8.274Z"></path></svg>`,
    openDocumentSpreadsheet: `<svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V9H3V2a1 1 0 0 1 1-1h5.5v2zM3 12v-2h2v2H3zm0 1h2v2H4a1 1 0 0 1-1-1v-1zm3 2v-2h3v2H6zm4 0v-2h3v1a1 1 0 0 1-1 1h-2zm3-3h-3v-2h3v2zm-7 0v-2h3v2H6z"></path></svg>`,
    openDocumentPresentation: `<svg fill="none" stroke-width="0" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"></path></svg>`,
    pdfDocuments: `<svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"></path></svg>`,
    eReaderBooks: `<svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M928 161H699.2c-49.1 0-97.1 14.1-138.4 40.7L512 233l-48.8-31.3A255.2 255.2 0 0 0 324.8 161H96c-17.7 0-32 14.3-32 32v568c0 17.7 14.3 32 32 32h228.8c49.1 0 97.1 14.1 138.4 40.7l44.4 28.6c1.3.8 2.8 1.3 4.3 1.3s3-.4 4.3-1.3l44.4-28.6C602 807.1 650.1 793 699.2 793H928c17.7 0 32-14.3 32-32V193c0-17.7-14.3-32-32-32zM404 553.5c0 4.1-3.2 7.5-7.1 7.5H211.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45zm0-140c0 4.1-3.2 7.5-7.1 7.5H211.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45zm416 140c0 4.1-3.2 7.5-7.1 7.5H627.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45zm0-140c0 4.1-3.2 7.5-7.1 7.5H627.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45z"></path></svg>`,
    // 档案
    archives: `<svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"></path></svg>`,
    // 音频
    audio: `<svg fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M9 18V5l12-2v13"></path><path d="M6 15A3 3 0 1 0 6 21 3 3 0 1 0 6 15z"></path><path d="M18 13A3 3 0 1 0 18 19 3 3 0 1 0 18 13z"></path></svg>`,
    // 视频
    video: `<svg fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M23 7 16 12 23 17 23 7z"></path><rect width="15" height="14" x="1" y="5" rx="2" ry="2"></rect></svg>`,
    // 可执行文件
    executables: `<svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM2.575 15.202H.785v-1.073H2.47v-.606H.785v-1.025h1.79v-.648H0v3.999h2.575v-.647ZM6.31 11.85h-.893l-.823 1.439h-.036l-.832-1.439h-.931l1.227 1.983-1.239 2.016h.861l.853-1.415h.035l.85 1.415h.908l-1.254-1.992L6.31 11.85Zm1.025 3.352h1.79v.647H6.548V11.85h2.576v.648h-1.79v1.025h1.684v.606H7.334v1.073Z"></path></svg>`,
    // 字体
    fonts: `<svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M920 416H616c-4.4 0-8 3.6-8 8v112c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-56h60v320h-46c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h164c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-46V480h60v56c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V424c0-4.4-3.6-8-8-8zM656 296V168c0-4.4-3.6-8-8-8H104c-4.4 0-8 3.6-8 8v128c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-64h168v560h-92c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-92V232h168v64c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8z"></path></svg>`,
    // 网页
    web: `<svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M371.8 512c0 77.5 62.7 140.2 140.2 140.2S652.2 589.5 652.2 512 589.5 371.8 512 371.8 371.8 434.4 371.8 512zM900 362.4l-234.3 12.1c63.6 74.3 64.6 181.5 11.1 263.7l-188 289.2c78 4.2 158.4-12.9 231.2-55.2 180-104 253-322.1 180-509.8zM320.3 591.9 163.8 284.1A415.35 415.35 0 0 0 96 512c0 208 152.3 380.3 351.4 410.8l106.9-209.4c-96.6 18.2-189.9-34.8-234-121.5zm218.5-285.5 344.4 18.1C848 254.7 792.6 194 719.8 151.7 653.9 113.6 581.5 95.5 510.5 96c-122.5.5-242.2 55.2-322.1 154.5l128.2 196.9c32-91.9 124.8-146.7 222.2-141z"></path></svg>`,
    // 脚本
    scripts: `<svg fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-script" width="1em" height="1em" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="overflow: visible; color: currentcolor;"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M17 20h-11a3 3 0 0 1 0 -6h11a3 3 0 0 0 0 6h1a3 3 0 0 0 3 -3v-11a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v8"></path></svg>`,
    // 数据库
    databases: `<svg fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 2A9 3 0 1 0 12 8 9 3 0 1 0 12 2z"></path><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
    // 模型
    models: `<svg fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-model" width="1em" height="1em" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="overflow: visible; color: currentcolor;"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 8h8v8h-8z"></path><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M16 16l3.3 3.3"></path><path d="M16 8l3.3 -3.3"></path><path d="M8 8l-3.3 -3.3"></path><path d="M8 16l-3.3 3.3"></path></svg>`,
    // 文件夹
    folder: `<svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M384 480h48c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1.1-32.1s-16.2-16-27.7-16H144c-11.4 0-21.9 6-27.6 15.9L48 357.1V96c0-8.8 7.2-16 16-16h117.5c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8H416c8.8 0 16 7.2 16 16v32h48v-32c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7l-26.5-26.6c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320z"></path></svg>`,
    // 未知
    unknown: `<svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 15h2v2h-2v-2Zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355ZM15 4H5v16h14V8h-4V4ZM3 2.992C3 2.444 3.447 2 3.998 2H16l5 5v13.992A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992Z"></path></svg>`
};

function handle(icon: string) {
    return icon;
}

export default {
    getIcon(file: { name: string; is_dir: boolean }) {
        if (!file) throw new Error("getIcon 需要传入 ContentType 文件！");
        if (file.is_dir)
            return { type: "folder", icon: handle(defaultIcons.folder) };

        // 文件名处理，获取尾缀
        const split = file.name.split(".");
        const extension = split[split.length - 1].toLowerCase();
        if (extension === "" || split.length === 1) {
            return { type: "folder", icon: handle(defaultIcons.folder) };
        }

        // 遍历类型
        for (const category in fileCategories) {
            let cache = null;
            // @ts-ignore
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
