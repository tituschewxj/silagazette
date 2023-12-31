export type PostMetadata = {
    title: string;
    subtitle: string;
    author: string;
    author_link: string;
    date: string;
    tags: string[];
    thumbnail_image: string;
    pdf_link: string;
    hidden: boolean;
    slug: string;
};

export type PostData = {
    data: PostMetadata;
    content: string;
};
