import getPostMetadata from '@/components/getPostMetadata';
import PostPreview from '@/components/PostPreview';

const BlogPage = () => {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => {
        return <PostPreview key={post.slug} metadata={post} />;
    });
    // TODO: sort by date, paginate
    return <>{postPreviews}</>;
};

export default BlogPage;
