'use client';

import { PostData } from '@/types/PostMetadata';
import { useSearchParams, useRouter } from 'next/navigation';
import PostPreview from './PostPreview';
import { FormEvent, useState } from 'react';
import Tag from './Tag';
import TagsList from './TagsList';

// SearchContainer is rendered on the client side, as it uses useSearchParams();
const SearchContainer = (props: { posts: PostData[] }) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [searchData, setSearchData] = useState({
        query: '',
        tags: '',
    });

    // Search
    const tags = searchParams.getAll('tags');
    const tagsSet = new Set(tags);
    const query = searchParams.get('query');

    // Sorting
    const sortedPostsData = props.posts.sort((a: PostData, b: PostData) => {
        if (Date.parse(a.data.date) < Date.parse(b.data.date)) {
            return 1;
        } else {
            return -1;
        }
    });

    // Filtering based on search params
    const filteredPostsData = sortedPostsData.filter((post: PostData) => {
        if (tagsSet.size == 0) return true;
        return post.data.tags.filter((tag) => tagsSet.has(tag)).length != 0;
    });

    // Generate post previews
    const postPreviews = filteredPostsData.map((post) => {
        return <PostPreview key={post.data.slug} post={post} />;
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/blog?query=${searchData.query}`);
        setSearchData({ query: '', tags: '' });
    };

    return (
        <>
            {/* Search Bar */}
            <div className='my-8 rounded-lg border p-8 shadow-md'>
                {/* Search: {search} */}
                <form className='group relative' onSubmit={handleSubmit}>
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
                        value={searchData.query}
                        className=' w-full rounded-full bg-gray-100 p-2 pl-9 text-sm text-gray-700 shadow-inner outline-none ring-1 ring-inset ring-gray-300 transition duration-200 placeholder:text-gray-400  hover:bg-gray-50 focus:bg-gray-50 focus:ring-2 focus:ring-inset focus:ring-red-600'
                    ></input>
                    <i className=' bx bx-search pointer-events-none absolute inset-2 ml-1 text-xl text-slate-400 '></i>
                </form>
            </div>
            {/* Search results */}
            <div className='font-semibold'>{query}</div>
            <TagsList tags={tags}></TagsList>
            {postPreviews}
        </>
    );
};

export default SearchContainer;
