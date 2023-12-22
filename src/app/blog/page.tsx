import ContentArea from '@/components/ContentArea';
import { getAllTags, getPostsData } from '@/components/functions/getPostsData';
import SearchContainer from '@/components/blog/search/SearchContainer';

const BlogPage = () => {
    const posts = getPostsData();
    const allTags = getAllTags();
    return (
        <ContentArea>
            <SearchContainer posts={posts} allTags={allTags}></SearchContainer>
        </ContentArea>
    );
};

export default BlogPage;
