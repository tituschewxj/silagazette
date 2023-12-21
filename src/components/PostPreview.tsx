import { PostData } from '../types/PostMetadata';
import getFormattedDate from './getFormattedDate';
import TagsList from './TagsList';
import Link from 'next/link';

const PostPreview = (props: { post: PostData }) => {
    // TODO: add description for post
    const slug = props.post.data.slug;
    const post = props.post;
    return (
        <>
            <Link href={`/blog/${slug}`}>
                <div className='group my-8 rounded-lg p-8 shadow-md transition duration-200 hover:bg-gray-100'>
                    <h1 className='font-serif text-2xl font-bold tracking-tight transition duration-150 group-hover:text-red-700 group-hover:underline'>
                        {post.data.title}
                    </h1>

                    <h2 className='text-md text-slate-700'>
                        {post.data.subtitle}
                    </h2>
                    <div className='text-sm text-slate-500'>
                        Published on {getFormattedDate(post.data.date)}
                    </div>
                    <div className='text-sm text-slate-500'>
                        By {post.data.author}
                    </div>
                    {/* NOTE: cannot nest anchor */}
                    {/* <TagsList tags={post.data.tags} /> */}
                </div>
            </Link>
        </>
    );
};

export default PostPreview;
