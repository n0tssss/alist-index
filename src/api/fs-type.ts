export interface FsListType {
    path: string;
    password: string;
    page: number;
    per_page: number;
    refresh: boolean;
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
