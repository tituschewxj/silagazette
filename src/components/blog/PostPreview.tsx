import { PostData } from '../../types/PostMetadata';
import getFormattedDate from '../functions/getFormattedDate';
import TagsList from './tags/TagsList';
import Link from 'next/link';
import Image from 'next/image';
import LinkText from '../LinkText';

const PostPreview = (props: { post: PostData }) => {
    // TODO: add description for post
    const slug = props.post.data.slug;
    const post = props.post;
    return (
        // TODO: fix image size and improve listing of posts.
        <div className='group relative my-2 flex rounded-lg shadow-md transition-all duration-200 ease-in-out hover:scale-[1.01] hover:bg-gray-100'>
            <Image
                src={post.data.thumbnail_image}
                alt='thumbnail-image'
                width={1024}
                height={1024}
                className='hidden w-1/4 rounded-l-lg bg-white object-cover filter transition-all duration-200  group-hover:saturate-[1.2] sm:block'
            ></Image>
            <div className='p-2 sm:p-5'>
                <h1 className='font-serif text-2xl font-bold tracking-tight transition-all duration-150 group-hover:text-purple-700 group-hover:underline'>
                    {post.data.title}
                </h1>

                <h2 className='text-md text-slate-700'>{post.data.subtitle}</h2>
                <div className='text-sm text-slate-500'>
                    Published on {getFormattedDate(post.data.date)}
                </div>

                {/* Author */}
                <div className='text-sm text-slate-500'>
                    By&nbsp;
                    <LinkText
                        link={post.data.author_link}
                        text={post.data.author}
                        className='absolute z-20'
                        inline
                    />
                </div>

                {/* Tags */}
                <div className='absolute z-20'>
                    <TagsList tags={post.data.tags} icon />
                </div>
                {/* Empty div for absolute elements: tags */}
                <div className='invisible'>
                    <TagsList tags={post.data.tags} icon />
                </div>
            </div>
            <Link
                className='absolute inset-0 h-full w-full'
                href={`/blog/${slug}`}
            ></Link>
        </div>
    );
};

export default PostPreview;
