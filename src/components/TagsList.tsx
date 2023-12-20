const TagsList = (props: { tags: string[] }) => {
    return (
        <div className='mt-2 flex flex-row'>
            {props.tags.map((tag: string) => {
                return (
                    // TODO: Search by tags
                    <a href='/blog'>
                        <div className='hover: m-1 rounded-lg border p-1 text-xs text-slate-800 shadow-sm hover:bg-gray-200'>
                            {tag}
                        </div>
                    </a>
                );
            })}
        </div>
    );
};
export default TagsList;
