# Singapore International Law Gazette: User Guide

This is the user guide for updating and maintaining posts on this website.

## Adding Files (Posts)

You will need a GitHub account and be a collaborator of this project. You should be able to add files from directly GitHub.

## Walkthrough: Creating/Updating a post

1. Convert the content to markdown syntax, and move the content into markdown file. (The file extension is `.md`.)
    1. For more information on markdown syntax, you can refer to [this guide](https://www.markdownguide.org/basic-syntax/).
1. Navigate to the `posts/` folder, and add the markdown file following existing templates.
1. Fill in the frontmatter according to the format.
    1. Make sure to follow the frontmatter format. Put `hidden: true` to hide a post. Ensure that every field is filled in the frontmatter (Put `''` or `""` if the field is unused or `[]` if there are no tags.).
    1. Note that a thumbnail image is required for each post.
1. To add images, navigate to the `public/images` folder.
    1. The image link in the markdown needs to be configured correctly for it to render. (Note: You can organize the images into subfolders if necessary.)

## Additional Information

## Branching

There are two branches: `staging` and `master`.

-   Changes on the `master` branch will be reflected on the production version of the website at `https://www.silagazette.com/` and `https://silagazette.vercel.app/`
-   Changes on `staging` branch will be reflected on the staging version of the website at `https://silagazette-staging.vercel.app/`. We can use the staging version of the website for testing changes before updating the `master` branch via creating a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

### Post metadata

A post's metadata can be found in the frontmatter of the markdown file, which is found at the top of the markdown file, within the triple dashes (`---`).

| Attribute name    | Description                         | Example                                                             |
| ----------------- | ----------------------------------- | ------------------------------------------------------------------- |
| `title`           | Title of the post                   | `title: 'Chronicles of the Celestial Nomad'`                        |
| `subtitle`        | Subtitle of the post                | `subtitle: 'Journey Across the Cosmic Canvas'`                      |
| `author`          | Author of the post                  | `author: 'Stellar Voyager'`                                         |
| `author_link`     | URL to the author's site            | `author_link: 'https://www.stellar_voyager.com/'`                   |
| `date`            | Publishing date of the post         | `date: 'July 5, 2024' `                                             |
| `tags`            | Relevant tags of the post           | `tags:[science fiction, space exploration, adventure]`              |
| `thumbnail_image` | Thumbnail image for the post        | `thumbnail_image: '/images/chronicles_of_the_celestial_nomad.jpeg'` |
| `pdf_link`        | Link to the PDF version of the post | `pdf_link: 'https://drive.google.com/file/d/x1y2z3/preview'`        |
| `hidden`          | Whether the post is visible         | `hidden: false`                                                     |
