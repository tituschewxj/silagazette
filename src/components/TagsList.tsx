const TagsList = (props: { tags: string[] }) => {
    return (
        <div className='flex flex-row mt-2'>
            {props.tags.map((tag: string) => {
                return (
                    // TODO: Search by tags
                    <a href='/blog'>
                        <div className='border m-1 p-1 text-xs shadow-sm rounded-lg text-slate-800 hover:bg-gray-200 hover:'>
                            {tag}
                        </div>
                    </a>
                );
            })}
        </div>
    );
};
export default TagsList;
