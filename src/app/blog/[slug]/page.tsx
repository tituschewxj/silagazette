import Markdown from 'markdown-to-jsx';
import getPostMetadata from '@/components/getPostMetadata';
import { PostMetadata } from '@/components/PostMetadata';
import PostHeader from '@/components/PostHeader';
import getPostContent from '@/components/getPostContent';

// Statically generate site
export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
};

const PostPage = (props: { params: PostMetadata }) => {
    const slug = props.params.slug;
    const content = getPostContent(slug).content;
    const metadata: PostMetadata = props.params;
    return (
        <>
            <PostHeader {...metadata} />
            <article className='prose'>
                <Markdown>{content}</Markdown>
            </article>
        </>
    );
};

export default PostPage;
