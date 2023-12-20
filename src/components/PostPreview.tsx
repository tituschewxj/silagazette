import Link from 'next/link';
import { PostMetadata } from '../types/PostMetadata';
import getPostContent from './getPostContent';
import getFormattedDate from './getFormattedDate';

const PostPreview = (props: { metadata: PostMetadata }) => {
    // TODO: add description for post
    const slug = props.metadata.slug;
    const post = getPostContent(slug);
    return (
        <Link href={`/blog/${props.metadata.slug}`}>
            <div className='my-8 border rounded-lg p-8 shadow-sm'>
                <h1 className='text-2xl font-bold font-serif tracking-tight'>
                    {post.data.title}
                </h1>
                <h2 className='text-md text-slate-700'>{post.data.subtitle}</h2>
                <div className='text-sm text-slate-500'>
                    Published on {getFormattedDate(post.data.date)}
                </div>
                <div className='text-sm text-slate-500'>
                    By {post.data.author}
                </div>
            </div>
        </Link>
    );
};

export default PostPreview;
