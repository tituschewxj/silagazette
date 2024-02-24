// Sets the limit to the number of posts shown per page.
export const POSTS_PER_PAGE = 5;

// The URL at which the live website is deployed at.
export const PRODUCTION_DEPLOY_URL =
    'https://singapore-international-law-gazette.vercel.app';

// When true, posts which `date` are in the future will not be shown.
// Otherwise, posts will be shown regardless of their `date`
export const HIDE_FUTURE_POSTS = false;

// This is configurable, based on the current accounts that are used.
export const ACCOUNTS = {
    // The account name of the SILA email.
    EMAIL_ACCOUNT: 'singapore.sila@gmail.com',

    // The link to the SILA LinkedIn page.
    LINKEDIN_URL: 'https://www.linkedin.com/in/silasingapore/',

    // The link to the SILA Instagram page.
    INSTAGRAM_URL: 'https://www.instagram.com/sila.singapore/',

    // The link to the SILA telegram chat.
    TELEGRAM_URL: '',
};
