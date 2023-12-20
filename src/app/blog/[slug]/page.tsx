import Markdown from 'markdown-to-jsx';
import getPostMetadata from '@/components/getPostMetadata';
import { PostMetadata } from '@/types/PostMetadata';
import PostHeader from '@/components/PostHeader';
import getPostContent from '@/components/getPostContent';
import ContentArea from '@/components/ContentArea';
import { notFound } from 'next/navigation';

// Statically generate site: statically generate routes at build time.
export const generateStaticParams = async () => {
    const posts = getPostMetadata();

    return posts.map((post: PostMetadata) => ({
        slug: post.slug,
    }));
};

const PostPage = (props: { params: PostMetadata }) => {
    const slug = props.params.slug;
    // Handle invalid paths
    try {
        const content = getPostContent(slug).content;
        const metadata: PostMetadata = props.params;
        return (
            <ContentArea>
                <PostHeader {...metadata} />
                <article className='prose font-serif'>
                    <Markdown>{content}</Markdown>
                </article>
            </ContentArea>
        );
    } catch (err) {
        return notFound();
    }
};

export default PostPage;
