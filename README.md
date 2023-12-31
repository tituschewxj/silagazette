This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), and deployed with [Vercel](https://vercel.com/).

-   It is statically generated site that uses markdown files to generate the blog-post pages at build-time, with customizable frontmatter.
-   The search feature comprises of document search with [Elasticlunr.js](http://elasticlunr.com/) and searching by tags. The search results are paginated for ease of viewing.
-   It uses [Tailwind](https://tailwindcss.com/) for it's user interface.
-   Icons from [Boxicons](boxicons.com).

## Adding Files

You will need a GitHub account and be a collaborator of this project. You should be able to add files from directly GitHub.

To add posts, navigate to the `posts/` folder and add the markdown file following the template. Make sure to follow the frontmatter format. Put `hidden: true` to hide a post. Ensure that every field is filled in the frontmatter (Put `''` or `""` if the field is unused or `[]` if there are no tags.). For more information on markdown syntax, you can refer to [this guide](https://www.markdownguide.org/basic-syntax/).

To add images, navigate to the `public/images` folder. Note that the image link in the markdown needs to be configured correctly for it to render. (Note: You can organize the images into subfolders if necessary)

## Set up guide

1. Clone the repository and navigate into the root directory of the project.

```bash
git clone https://github.com/tituschewxj/law-gazette-blog-project.git
```

2. Install dependencies.

```bash
npm install
```

3. Run the application.

```bash
npm run dev
```

The website can be accessed on `localhost:3000`.
