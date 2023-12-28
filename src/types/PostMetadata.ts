export type PostMetadata = {
    title: string;
    subtitle: string;
    author: string;
    author_link: string;
    date: string;
    tags: string[];
    hidden: boolean;
    slug: string;
};

export type PostData = {
    data: PostMetadata;
    content: string;
};
