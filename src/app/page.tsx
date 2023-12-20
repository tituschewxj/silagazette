import ContentArea from '@/components/ContentArea';
import { PostMetadata } from '@/types/PostMetadata';
import PostPreview from '@/components/PostPreview';
import getPostMetadata from '@/components/getPostMetadata';
import Button from '@/components/Button';

export default function HomePage() {
    const postMetadata = getPostMetadata();
    // Sort by date
    const sortedPostsMetadata = postMetadata.sort(
        (a: PostMetadata, b: PostMetadata) => {
            if (Date.parse(a.date) < Date.parse(b.date)) {
                return 1;
            } else {
                return -1;
            }
        },
    );
    const sortedFilteredPostsMetadata = sortedPostsMetadata.slice(0, 3);
    const postPreviews = sortedFilteredPostsMetadata.map((post) => {
        return <PostPreview key={post.slug} metadata={post} />;
    });

    return (
        <main>
            {/* Hero section */}
            {/* NOTE: Could add background image */}
            <section className='flex h-screen items-center bg-gradient-to-r from-rose-800 via-red-800 to-red-900 text-white shadow-md '>
                <div className='container mx-auto text-center'>
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
