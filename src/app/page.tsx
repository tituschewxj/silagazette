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
            <section className='relative flex h-[639px] items-center bg-gradient-to-r from-violet-800 via-purple-800 to-fuchsia-950 px-2 text-white shadow-md sm:h-[999px]'>
                <div className='pointer-events-none absolute inset-0 z-0 bg-[url("/Hero_section.png")] bg-[length:1280px_720px] bg-fixed bg-top bg-repeat-x opacity-95 sm:bg-[length:1920px_1080px]'></div>
                <div className='container z-10 mx-auto text-center'>
                    {/* <h1 className='mb-4 bg-gradient-to-r from-pink-700 to-violet-700 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl'>
                        SILA: the Student Chapter of the ILA.
                    </h1>
                    <p className='text-xs text-purple-900 md:text-sm'>
                        SILA was established in 2024 under the auspices of the
                        International Law Association (Singapore) and advisors
                        Mr Anthony Cheah Nicholls and Professor Stefanie
                        Schacherer.
                    </p> */}

                    <Button
                        href='/blog'
                        className='mx-auto mt-10 py-8 text-center transition-all duration-200 ease-in-out hover:scale-[1.05] sm:mt-20 sm:text-xl'
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
