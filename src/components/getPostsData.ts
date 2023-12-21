import { PostData, PostMetadata } from '../types/PostMetadata';
import { PageNotFoundError } from 'next/dist/shared/lib/utils';
import fs from 'fs';
import matter from 'gray-matter';

// Get all the posts metadata from the posts folder.
var allPostsData: PostData[] | null = null;
export const getPostsData = (): PostData[] => {
    if (allPostsData != null) return allPostsData;

    const folder = 'posts/';
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith('.md'));

    // Get gray-matter from each file.
    const posts = markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf-8');
        const matterResults = matter(fileContents);
        const metadata = {
            title: matterResults.data.title,
            subtitle: matterResults.data.subtitle,
            author: matterResults.data.author,
            date: matterResults.data.date,
            tags: matterResults.data.tags,
            hidden: matterResults.data.hidden,
            slug: fileName.replace('.md', ''),
        } as PostMetadata;
        return {
            data: metadata,
            content: matterResults.content,
        };
    });
    const filteredPosts = posts.filter((post) => !post.data.hidden);
    allPostsData = filteredPosts;
    return allPostsData;
};

// Checks if the post exists and is not hidden.
export const isValidPost = (slug: string): boolean => {
    const posts = getPostsData();
    return (
        posts.filter((post) => {
            return post.data.slug == slug;
        }).length == 1
    );
};

// Access the markdown file contents of the post.
export const getPostData = (slug: string) => {
    const filteredPosts = getPostsData().filter(
        (post) => post.data.slug == slug,
    );
    if (filteredPosts.length == 0) {
        throw PageNotFoundError;
    }
    return filteredPosts[0];
};
