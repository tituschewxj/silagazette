import { PostData } from '@/types/PostMetadata';
import Paginate from '../Paginate';
import PostPreview from '../PostPreview';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { POSTS_PER_PAGE } from '@/constants';
import Loading from '@/components/Loading';

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
        setTimeout(() => setLoading(false), 1);
    }, [props.filteredPosts.toString(), props.page]);

    return (
        // TODO: add loading indicator
        <>
            <div className='flex flex-grow flex-col'>
                {postPreviews.length == 0 ? (
                    <div className='flex-grow p-8 text-center font-semibold'>
                        {loading ? <Loading /> : 'No results'}
                    </div>
                ) : (
                    postPreviews.map((post) => (
                        <PostPreview key={post.data.slug} post={post} />
                    ))
                )}
            </div>
            {/* TODO: move paginate outside of ContentArea */}
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
        </>
    );
};

export default SearchResults;
