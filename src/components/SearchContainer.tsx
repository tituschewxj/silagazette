'use client';

import { PostData } from '@/types/PostMetadata';
import { useSearchParams, useRouter } from 'next/navigation';
import PostPreview from './PostPreview';
import { FormEvent, useState } from 'react';

// SearchContainer is rendered on the client side, as it uses useSearchParams();
const SearchContainer = (props: { posts: PostData[] }) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [searchData, setSearchData] = useState({
        query: '',
        tags: '',
    });

    // Search
    const search = searchParams.get('tag');

    // Sorting
    const sortedPostsMetadata = props.posts.sort((a: PostData, b: PostData) => {
        if (Date.parse(a.data.date) < Date.parse(b.data.date)) {
            return 1;
        } else {
            return -1;
        }
    });

    // Generate post previews
    const postPreviews = sortedPostsMetadata.map((post) => {
        return <PostPreview key={post.data.slug} post={post} />;
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/blog?search=${searchData.query}`);
    };

    return (
        <>
            <div className='my-8 rounded-lg border p-8 shadow-md'>
                {/* Search: {search} */}
                <div className='group relative'>
                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder='Search'
                            required
                            onChange={(e) =>
                                setSearchData({
                                    ...searchData,
                                    query: e.target.value,
                                })
                            }
                            className=' w-full rounded-full bg-gray-100 p-2 pl-9 text-sm text-gray-700 shadow-inner outline-none ring-1 ring-inset ring-gray-300 transition duration-200 placeholder:text-gray-400  hover:bg-gray-50 focus:bg-gray-50 focus:ring-2 focus:ring-inset focus:ring-red-600'
                        ></input>
                        <i className=' bx bx-search pointer-events-none absolute inset-2 ml-1 text-xl text-slate-400 '></i>
                    </form>
                </div>
            </div>
            {postPreviews}
        </>
    );
};

export default SearchContainer;
