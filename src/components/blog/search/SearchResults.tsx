import { PostData } from '@/types/PostMetadata';
import Paginate from '../Paginate';
import PostPreview from '../PostPreview';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { POSTS_PER_PAGE } from '@/constants';

const SearchResults = (props: {
    filteredPosts: PostData[];
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
}) => {
    const [postPreviews, setPostPreviews] = useState<PostData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Paginate post previews by page
        const start = (props.page - 1) * POSTS_PER_PAGE;
        const end = props.page * POSTS_PER_PAGE;
        const postPreviews = props.filteredPosts.slice(start, end);

        // Generate post previews
        setPostPreviews(postPreviews);
        setLoading(false);
    }, [props.filteredPosts.toString(), props.page]);

    return (
        // TODO: add loading indicator
        <div className='flex flex-grow flex-col'>
            {postPreviews.length == 0 ? (
                <div className=' flex flex-grow items-center'>
                    <div className='flex-grow text-center font-semibold'>
                        {loading ? (
                            <i className='bx bx-loader-alt animate-spin text-2xl'></i>
                        ) : (
                            <>No results</>
                        )}
                    </div>
                </div>
            ) : (
                postPreviews?.map((post) => (
                    <PostPreview key={post.data.slug} post={post} />
                ))
            )}

            <Paginate
                firstPage={1}
                currentPage={props.page}
                setPage={props.setPage}
                lastPage={
                    props.filteredPosts.length == 0
                        ? 1
                        : Math.ceil(props.filteredPosts.length / POSTS_PER_PAGE)
                }
            ></Paginate>
        </div>
    );
};

export default SearchResults;
