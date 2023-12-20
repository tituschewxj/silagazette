// 'use client';

import ContentArea from '@/components/ContentArea';
import getPostsData from '@/components/getPostsData';
import { PostData, PostMetadata } from '@/types/PostMetadata';
import PostPreview from '@/components/PostPreview';
// import { useSearchParams } from 'next/navigation';

const BlogPage = () => {
    const postMetadata = getPostsData();
    // Sort by date
    const sortedPostsMetadata = postMetadata.sort(
        (a: PostData, b: PostData) => {
            if (Date.parse(a.data.date) < Date.parse(b.data.date)) {
                return 1;
            } else {
                return -1;
            }
        },
    );
    const postPreviews = sortedPostsMetadata.map((post) => {
        return <PostPreview key={post.data.slug} metadata={post.data} />;
    });

    // Search
    // const searchParams = useSearchParams();
    // const search = searchParams.get('tag');
    // console.log(search);

    // TODO: sorter, paginate
    return <ContentArea>{postPreviews}</ContentArea>;
};

export default BlogPage;
