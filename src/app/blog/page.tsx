import ContentArea from '@/components/ContentArea';
import { getAllTags, getPostsData } from '@/components/getPostsData';
import SearchContainer from '@/components/SearchContainer';

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
