import ContentArea from '@/components/ContentArea';
import getPostMetadata from '@/components/getPostMetadata';
import { PostMetadata } from '@/types/PostMetadata';
import PostPreview from '@/components/PostPreview';

const BlogPage = () => {
    const postMetadata = getPostMetadata();
    // Sort by date
    const sortedPostsMetadata = postMetadata.sort(
        (a: PostMetadata, b: PostMetadata) => {
            if (Date.parse(a.date) < Date.parse(b.date)) {
                return 1;
            } else {
                return -1;
            }
        },
    );
    const postPreviews = sortedPostsMetadata.map((post) => {
        return <PostPreview key={post.slug} metadata={post} />;
    });

    // TODO: sort by date, paginate
    return <ContentArea>{postPreviews}</ContentArea>;
};

export default BlogPage;
