import TagsList from './tags/TagsList';
import getFormattedDate from '../functions/getFormattedDate';
import { getPostData } from '../functions/getPostsData';
import Link from 'next/link';

const PostHeader = (props: { slug: string }) => {
    const post = getPostData(props.slug);
    return (
        <>
            <h1 className='my-8 font-serif text-4xl font-bold tracking-tight'>
                {post.data.title}
            </h1>
            <h2 className='text-xl text-slate-700'>{post.data.subtitle}</h2>
            <div className='text-sm text-slate-500'>
                Published on {getFormattedDate(post.data.date)}
            </div>
            {post.data.author_link ? (
                <Link
                    href={post.data.author_link}
                    className=' text-sm text-slate-500'
                >
                    By&nbsp;
                    <div className='inline underline transition duration-200 hover:text-red-700'>
                        {post.data.author}
                    </div>
                </Link>
            ) : (
                <div className='text-sm text-slate-500'>
                    By {post.data.author}
                </div>
            )}

            <TagsList tags={post.data.tags} icon />
        </>
    );
};

export default PostHeader;
