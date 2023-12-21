'use client';

import { PostData } from '@/types/PostMetadata';
import { useSearchParams, useRouter } from 'next/navigation';
import PostPreview from './PostPreview';
import { FormEvent, useEffect, useState } from 'react';
import TagsList from './TagsList';
import elasticlunr from 'elasticlunr';

// SearchContainer is rendered on the client side, as it uses useSearchParams();
const SearchContainer = (props: {
    posts: PostData[];
    allTags: Set<string>;
}) => {
    const searchParams = useSearchParams();
    const tags = searchParams.getAll('tags');
    const tagsSet = new Set(tags);
    const query = searchParams.get('query');

    const router = useRouter();
    const [searchData, setSearchData] = useState({
        query: '',
        tags: '',
    });
    const [postPreviews, setPostPreviews] = useState<PostData[]>([]);

    useEffect(() => {
        // Sorting by date
        const sortedPostsData = props.posts.sort((a: PostData, b: PostData) => {
            if (Date.parse(a.data.date) < Date.parse(b.data.date)) {
                return 1;
            } else {
                return -1;
            }
        });

        // Filtering based on tags
        const filteredPostsData = sortedPostsData.filter((post: PostData) => {
            if (tagsSet.size == 0) return true;
            return post.data.tags.filter((tag) => tagsSet.has(tag)).length != 0;
        });

        // Perform search
        // FIXME: workaround that generates the search index on runtime
        const searchIndex = elasticlunr(function () {
            // @ts-ignore
            this.addField('title');
            // @ts-ignore
            this.addField('subtitle');
            // @ts-ignore
            this.addField('content');
            // @ts-ignore
            this.setRef('id');
            this.saveDocument(false);
            filteredPostsData.forEach((post, idx) =>
                this.addDoc({
                    id: idx,
                    title: post.data.title,
                    subtitle: post.data.subtitle,
                    content: post.content,
                }),
            );
        });

        const searchResults = query
            ? searchIndex
                  .search(query, {
                      fields: {
                          title: { boost: 2 },
                          subtitle: { boost: 1 },
                          content: { boost: 1 },
                      },
                  })
                  .map((i) => filteredPostsData[parseInt(i.ref)])
            : undefined;

        // Generate post previews
        setPostPreviews(searchResults ? searchResults : filteredPostsData);
    }, [query]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchData.query.trim() == '') return;
        router.push(`/blog?query=${searchData.query.trim()}`);
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
                        onChange={(e) =>
                            setSearchData({
                                ...searchData,
                                query: e.target.value,
                            })
                        }
                        value={searchData.query}
                        className=' w-full cursor-pointer rounded-full bg-gray-100 p-2 pl-9 text-sm text-gray-700 shadow-inner outline-none ring-1 ring-inset ring-gray-300 transition duration-200 placeholder:text-gray-400  hover:bg-gray-50 focus:bg-gray-50 focus:ring-2 focus:ring-inset focus:ring-red-600'
                    ></input>
                    <i className=' bx bx-search pointer-events-none absolute inset-2 ml-1 text-xl text-slate-400 '></i>
                </form>
            </div>
            {/* Search results */}
            {(query || tags.length != 0) && (
                <div className='flex items-baseline gap-1'>
                    {'Showing search results for: '}
                    <div className='font-semibold'>{query}</div>
                    <TagsList tags={tags}></TagsList>
                    <div
                        onClick={() => router.push('/blog')}
                        className='cursor-pointer  text-sm text-red-800 underline hover:text-red-600'
                    >
                        clear results
                    </div>
                </div>
            )}
            {postPreviews?.map((post) => (
                <PostPreview key={post.data.slug} post={post} />
            ))}
        </>
    );
};

export default SearchContainer;
