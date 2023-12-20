export type PostMetadata = {
    title: string;
    subtitle: string;
    author: string;
    date: string;
    tags: string[];
    hidden: boolean;
    slug: string;
};

export type PostData = {
    data: PostMetadata;
    content: string;
};
