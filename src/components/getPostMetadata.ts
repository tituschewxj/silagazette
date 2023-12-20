import { PostMetadata } from '../types/PostMetadata';
import fs from 'fs';
import matter from 'gray-matter';

// Get all the posts metadata from the posts folder.
const getPostMetadata = (): PostMetadata[] => {
    const folder = 'posts/';
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith('.md'));

    // Get gray-matter from each file.
    const posts = markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf-8');
        const matterResults = matter(fileContents);
        return {
            title: matterResults.data.title,
            subtitle: matterResults.data.subtitle,
            author: matterResults.data.author,
            date: matterResults.data.date,
            tags: matterResults.data.tags,
            hidden: matterResults.data.hidden,
            slug: fileName.replace('.md', ''),
        } as PostMetadata;
    });
    const filteredPosts = posts.filter((post) => !post.hidden);

    return filteredPosts;
};

// Checks if the post exists and is not hidden.
export const isValidPost = (slug: string): boolean => {
    const posts = getPostMetadata();
    return (
        posts.filter((post) => {
            return post.slug == slug;
        }).length == 1
    );
};

export default getPostMetadata;
