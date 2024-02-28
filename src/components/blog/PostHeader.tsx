import TagsList from './tags/TagsList';
import getFormattedDate from '../functions/getFormattedDate';
import { getPostData } from '../functions/getPostsData';
import LinkText from '../LinkText';
import Button from '../Button';
import { PRODUCTION_DEPLOY_URL } from '@/constants';
import PdfViewer from './PdfViewer';

const PostHeader = (props: { slug: string }) => {
    const post = getPostData(props.slug);
    const post_url = `${PRODUCTION_DEPLOY_URL}/blog/${props.slug}/`;

    return (
        <>
            <div className='py-8'>
                <h1 className='my-8 font-serif text-4xl font-bold tracking-tight'>
                    {post.data.title}
                </h1>
                <h2 className='text-xl text-slate-700'>{post.data.subtitle}</h2>
                <div className='text-sm text-slate-500'>
                    Published on {getFormattedDate(post.data.date)}
                </div>
                <div className='text-sm text-slate-500'>
                    By&nbsp;
                    <LinkText
                        link={post.data.author_link}
                        text={post.data.author}
                        inline
                    />
                </div>

                <TagsList tags={post.data.tags} icon />

                <div className='flex items-center gap-2 pt-4 text-slate-500'>
                    <div className='text-sm'>Share this article</div>
                    <i className='bx bx-share-alt '></i>
                    <Button
                        href={`https://www.facebook.com/sharer/sharer.php?u=${post_url}`}
                        target='_blank'
                        className='inline'
                    >
                        <i className='bx bxl-facebook '></i>
                    </Button>
                    <Button
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${post_url}`}
                        target='_blank'
                        className='inline'
                    >
                        <i className='bx bxl-linkedin'></i>
                    </Button>
                </div>

                <PdfViewer post={post}></PdfViewer>
            </div>
        </>
    );
};

export default PostHeader;
