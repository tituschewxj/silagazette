const getTagsParams = (tags: string[]): string => {
    return tags.length == 0
        ? ''
        : 'tags=' +
              tags.reduce(
                  (params: string, tag: string) => params + `&&tags=${tag}`,
              );
};

export default getTagsParams;
