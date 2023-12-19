import matter from 'gray-matter';
import fs from 'fs';

// Access the markdown file contents of the post.
const getPostContent = (slug: string) => {
    const folder = 'posts/';
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, 'utf-8');
    const matterResult = matter(content);
    return matterResult;
};

export default getPostContent;
