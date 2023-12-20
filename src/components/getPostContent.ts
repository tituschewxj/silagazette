import matter from 'gray-matter';
import fs from 'fs';
import { isValidPost } from './getPostMetadata';
import { PageNotFoundError } from 'next/dist/shared/lib/utils';

// Access the markdown file contents of the post.
const getPostContent = (slug: string) => {
    const folder = 'posts/';
    if (!isValidPost(slug)) {
        throw PageNotFoundError;
    }

    const filePath = `${folder}${slug}.md`;
    const content = fs.readFileSync(filePath, 'utf-8');
    const matterResult = matter(content);
    return matterResult;
};

export default getPostContent;
