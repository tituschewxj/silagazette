import ContentArea from '@/components/ContentArea';
import { PostData } from '@/types/PostMetadata';
import PostPreview from '@/components/blog/PostPreview';
import { getPostsData } from '@/components/functions/getPostsData';
import Button from '@/components/Button';

export default function HomePage() {
    const postsData = getPostsData();
    // Sort by date
    const sortedPostsMetadata = postsData.sort((a: PostData, b: PostData) => {
        if (Date.parse(a.data.date) < Date.parse(b.data.date)) {
            return 1;
        } else {
            return -1;
        }
    });
    const sortedFilteredPostsMetadata = sortedPostsMetadata.slice(0, 3);
    const postPreviews = sortedFilteredPostsMetadata.map((post) => {
        return <PostPreview key={post.data.slug} post={post} />;
    });

    return (
        <main>
            {/* Hero section */}
            <section className='relative flex h-screen items-center bg-gradient-to-r from-violet-800 via-purple-800 to-fuchsia-950 px-2 text-white shadow-md '>
                <div className='pointer-events-none absolute inset-0 z-0 bg-[url("/Garamond.png")] bg-auto bg-fixed bg-top opacity-80'></div>
                <div className='container z-10 mx-auto text-center'>
                    <h1 className='mb-4 bg-gradient-to-r from-pink-700 to-violet-700 bg-clip-text text-4xl font-bold leading-tight text-transparent'>
                        Welcome to the SILA Gazette!
                    </h1>
                    {/* <p className='mb-8 text-lg md:text-xl'>
                        SILA (Singapore) is the inaugural Student Chapter of the
                        International Law Association (ILA) Singapore Branch -
                        the first in the world!
                    </p> */}
                    <Button
                        href='/blog'
                        className='mx-auto py-8 text-center transition-all duration-200 ease-in-out hover:scale-[1.05]'
                    >
                        Get started
                    </Button>
                </div>
            </section>
            <ContentArea>
                <h2 className='mb-4 mt-16 text-3xl font-bold'>Latest Posts</h2>
                {postPreviews}
                <Button href='/blog' className='mx-auto py-8 text-center'>
                    More posts
                </Button>
            </ContentArea>
        </main>
    );
}
