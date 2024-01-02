'use client';

import { PostData } from '@/types/PostMetadata';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import TagsList from '../tags/TagsList';
import elasticlunr from 'elasticlunr';
import SearchBar from './SearchBar';
import getTagsParams from '../../functions/getTagsParams';
import SearchResults from './SearchResults';

// SearchContainer is rendered on the client side, as it uses useSearchParams();
const SearchContainer = (props: {
    posts: PostData[];
    allTags: Set<string>;
}) => {
    // Get search params
    const searchParams = useSearchParams();
    const tags = new Set(searchParams.getAll('tags'));
    const query = searchParams.get('query');

    const router = useRouter();
    const [filteredPosts, setFilteredPosts] = useState<PostData[]>([]);
    const [page, setPage] = useState(1);
    const searchIndex = useMemo(
        () =>
            // FIXME: workaround that generates the search index on runtime
            elasticlunr(function () {
                // @ts-ignore
                this.addField('title');
                // @ts-ignore
                this.addField('subtitle');
                // @ts-ignore
                this.addField('content');
                // @ts-ignore
                this.setRef('id');
                this.saveDocument(false);
                props.posts.forEach((post, idx) =>
                    this.addDoc({
                        id: idx,
                        title: post.data.title,
                        subtitle: post.data.subtitle,
                        content: post.content,
                    }),
                );
            }),
        [],
    );

    useEffect(() => {
        // Sorting by date
        const sortedPostsData = props.posts.sort((a: PostData, b: PostData) => {
            if (Date.parse(a.data.date) < Date.parse(b.data.date)) {
                return 1;
            } else {
                return -1;
            }
        });

        // Perform search
        const searchResults = query
            ? searchIndex
                  .search(query, {
                      fields: {
                          title: { boost: 2 },
                          subtitle: { boost: 1 },
                          content: { boost: 1 },
                      },
                  })
                  .map((i) => sortedPostsData[parseInt(i.ref)])
            : sortedPostsData;

        const filteredPostsData = searchResults
            // Sort by number of tag matches
            .sort((a: PostData, b: PostData) => {
                return (
                    b.data.tags.filter((tag) => tags.has(tag)).length -
                    a.data.tags.filter((tag) => tags.has(tag)).length
                );
            })
            // Filtering based on tags
            .filter((post: PostData) => {
                if (tags.size == 0) return true;
                return (
                    post.data.tags.filter((tag) => tags.has(tag)).length != 0
                );
            });

        setFilteredPosts(filteredPostsData);

        // Reset to first page after search
        setPage(1);
    }, [query, Array.from(tags).toString()]);

    const clearResults = () => {
        router.push('/blog');
    };

    // Remove tags from the search results options.
    const removeTag = (tag: string) => {
        tags.delete(tag);
        router.push(getPageParams());
    };

    // Get search params without page info.
    const getPageParams = (): string => {
        if (tags.size == 0 && query == null) {
            return '/blog';
        }
        const tagsParams = getTagsParams(Array.from(tags));
        return `/blog?${query ? `query=${query}` : ''}${
            tags.size != 0 && query ? '&&' : ''
        }${tagsParams}`;
    };

    return (
        <>
            <SearchBar allTags={props.allTags} />

            {/* Search params list */}
            {(query || tags.size != 0) && (
                <div className='flex items-baseline gap-1 text-xs sm:text-sm'>
                    <div className='truncate'>Showing search results for:</div>
                    <div className='font-semibold'>{query}</div>
                    <TagsList
                        tags={Array.from(tags)}
                        onRemove={removeTag}
                    ></TagsList>
                    <div
                        onClick={clearResults}
                        className='cursor-pointer truncate text-red-800 underline hover:text-red-600'
                    >
                        clear results
                    </div>
                </div>
            )}

            <SearchResults
                filteredPosts={filteredPosts}
                page={page}
                setPage={setPage}
            ></SearchResults>
        </>
    );
};

export default SearchContainer;
