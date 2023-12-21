import ContentArea from '@/components/ContentArea';
import { PostData } from '@/types/PostMetadata';
import PostPreview from '@/components/PostPreview';
import { getPostsData } from '@/components/getPostsData';
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
            <section className='relative flex h-screen items-center bg-gradient-to-r from-rose-800 via-red-800 to-red-900 text-white shadow-md '>
                <div className='pointer-events-none absolute inset-0 z-0 bg-[url("/law_items_bg.jpeg")] bg-cover opacity-10 blur-sm'></div>
                <div className='container z-10 mx-auto text-center'>
                    <h1 className='mb-4 text-4xl font-bold leading-tight'>
                        Welcome to the Singapore International Law Gazette
                    </h1>
                    <p className='mb-8 text-lg md:text-xl'>
                        A brief description of what your website is about.
                    </p>
                    <Button href='/blog'>Get started</Button>
                </div>
            </section>
            <ContentArea>
                <h2 className='mb-4 text-3xl font-bold'>Latest Posts</h2>
                {postPreviews}
                <Button href='/blog'>More posts</Button>
            </ContentArea>
        </main>
    );
}
