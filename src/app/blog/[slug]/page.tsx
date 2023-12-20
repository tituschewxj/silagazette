import Markdown from 'markdown-to-jsx';
import getPostMetadata from '@/components/getPostMetadata';
import { PostMetadata } from '@/types/PostMetadata';
import PostHeader from '@/components/PostHeader';
import getPostContent from '@/components/getPostContent';
import ContentArea from '@/components/ContentArea';

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
        <ContentArea>
            <PostHeader {...metadata} />
            <article className='prose font-serif'>
                <Markdown>{content}</Markdown>
            </article>
        </ContentArea>
    );
};

export default PostPage;
