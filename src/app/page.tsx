import ContentArea from '@/components/ContentArea';
import { PostMetadata } from '@/types/PostMetadata';
import PostPreview from '@/components/PostPreview';
import getPostMetadata from '@/components/getPostMetadata';

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
            <section className='bg-gradient-to-r from-rose-800 via-red-800 to-red-900 text-white h-screen flex items-center'>
                <div className='container mx-auto text-center'>
                    <h1 className='text-4xl font-bold leading-tight mb-4'>
                        Welcome to the Singapore International Law Gazette
                    </h1>
                    <p className='text-lg md:text-xl mb-8'>
                        A brief description of what your website is about.
                    </p>
                    <a
                        href='/blog'
                        className='bg-white text-red-500 py-2 px-4 rounded-full font-semibold hover:bg-gray-100 transition duration-300'
                    >
                        Get Started
                    </a>
                </div>
            </section>

            <ContentArea>
                <h2 className='text-3xl font-bold mb-4'>Latest Posts</h2>
                {postPreviews}
                <div className='mx-auto py-8 text-center'>
                    <a
                        href='/blog'
                        className='bg-white border shadow-sm text-red-700 py-2 px-4 rounded-full font-semibold hover:bg-gray-100 transition duration-300'
                    >
                        More posts
                    </a>
                </div>
            </ContentArea>
        </main>
    );
}
