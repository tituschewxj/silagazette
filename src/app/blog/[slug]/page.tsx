import Markdown from 'markdown-to-jsx';
import {
    getPostsData,
    getPostData,
    isValidPost,
} from '@/components/functions/getPostsData';
import { PostData, PostMetadata } from '@/types/PostMetadata';
import PostHeader from '@/components/blog/PostHeader';
import ContentArea from '@/components/ContentArea';
import { notFound } from 'next/navigation';

// Statically generate site: statically generate routes at build time.
export const generateStaticParams = async () => {
    const posts = getPostsData();

    return posts.map((post: PostData) => ({
        slug: post.data.slug,
    }));
};

const PostPage = (props: { params: PostMetadata }) => {
    const slug = props.params.slug;
    const metadata: PostMetadata = props.params;

    // Handle invalid paths
    return isValidPost(slug) ? (
        <ContentArea>
            <PostHeader {...metadata} />
            <article className='prose'>
                <Markdown>{getPostData(slug).content}</Markdown>
            </article>
        </ContentArea>
    ) : (
        notFound()
    );
};

export default PostPage;
