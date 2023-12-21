import ContentArea from '@/components/ContentArea';
import { getPostsData } from '@/components/getPostsData';
import SearchContainer from '@/components/SearchContainer';

const BlogPage = () => {
    const posts = getPostsData();

    return (
        <ContentArea>
            <SearchContainer posts={posts}></SearchContainer>
        </ContentArea>
    );
};

export default BlogPage;
