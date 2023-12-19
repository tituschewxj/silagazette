import Link from 'next/link';
import { PostMetadata } from './PostMetadata';
import PostHeader from './PostHeader';

const PostPreview = (props: { metadata: PostMetadata }) => {
    // TODO: add description for post
    return (
        <Link href={`/blog/${props.metadata.slug}`}>
            <div className='my-8 border rounded-lg p-8 shadow-md'>
                <PostHeader slug={props.metadata.slug} />
            </div>
        </Link>
    );
};

export default PostPreview;
