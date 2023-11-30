interface ILinks {
    download: string;
    download_location: string;
    html: string;
    self: string;
}

interface ITag {
    source: ILinks;
    title: string;
    type: string;
}

export interface IUrls {
    full: string;
    raw: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
}

interface IUser {
    accepted_tos: boolean;
    bio: string;
    first_name: string;
    for_hire: boolean;
    id: string;
    instagram_username: string;
    last_name: string;
    links: ILinks;
    location: string;
    name: string;
    portfolio_url: string;
    profile_image: IUrls;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    twitter_username: string;
    updated_at: string;
    username: string;
}

export interface IItem {
    alt_description: string;
    blur_hash: string;
    breadcrumbs: string[];
    color: string;
    created_at: string;
    current_user_collections: any[];
    description: string;
    height: number;
    id: string;
    liked_by_user: boolean;
    likes: number;
    links: ILinks;
    promoted_at: string;
    slug: string;
    sponsorship: any;
    tags: ITag[];
    topic_submissions: any[];
    updated_at: string;
    urls: IUrls;
    user: IUser;
    width: number;
}

export interface IResponse {
    pixabay: string;
    unsplash: string;
    pexels: boolean;
}

export interface ICollection {
    total: number;
    totalHits: number;
    hits: IItem[];
}

export interface IUnsplashResponse {
    total: number;
    total_pages: number;
    results: IItem[];
}

export type TItemOrSkeleton = IItem | { skeleton: boolean; loaded: boolean };
