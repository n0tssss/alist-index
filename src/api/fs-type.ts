export interface FsListType {
    path: string;
    password?: string;
    page?: number;
    per_page?: number;
    refresh?: boolean;
}

export interface ContentType {
    name: string;
    size: number;
    is_dir: boolean;
    modified: string;
    created: string;
    sign: string;
    thumb: string;
    type: number;
    hashinfo: string;
    hash_info?: any;
    icon?: string;
    fileType?: string;
    url?: string;
}

export interface FsListResType {
    content: ContentType[];
    total: number;
    readme: string;
    header: string;
    write: boolean;
    provider: string;
}

export interface FsResType {
    name: string;
    size: number;
    is_dir: boolean;
    modified: string;
    created: string;
    sign: string;
    thumb: string;
    type: number;
    hashinfo: string;
    hash_info: null;
    raw_url: string;
    readme: string;
    header: string;
    provider: string;
    related: null;
}

export interface UpdateFsListType {
    path?: string;
    password?: string;
    page?: number;
    per_page?: number;
    refresh?: boolean;
}

export interface SearchFsType {
    /** @param 搜索目录 */
    parent: string;
    /** @param 关键字 */
    keywords: string;
    /** @param 0-全部 1-文件夹 2-文件 */
    scope: 0 | 1 | 2;
    /** @param 页数 */
    page: number;
    /** @param 每页数目 */
    per_page: number;
    /** @param 密码 */
    password: string;
}

export interface SearchFsResContentType {
    parent: string;
    name: string;
    is_dir: boolean;
    size: number;
    type: number;
    thumb: string;
    fileType: string;
    icon: string;
}

export interface SearchFsResType {
    content: SearchFsResContentType[];
    total: number;
}
