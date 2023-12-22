import Link from 'next/link';

const Tag = (props: {
    tag: string;
    onRemove?: (tag: string) => void;
    onClick?: (tag: string) => void;
}) => {
    return props.onRemove ? (
        <div className='group/tag m-1 flex items-center rounded-lg border bg-white p-1 px-2 text-xs text-slate-800 shadow-sm transition duration-200 hover:bg-gray-100 '>
            <div>{props.tag}</div>
            <i
                onClick={() => props.onRemove && props.onRemove(props.tag)}
                className='bx bx-x pointer-events-auto cursor-pointer text-lg group-hover/tag:text-red-700'
            ></i>
        </div>
    ) : props.onClick ? (
        <div
            onClick={() => props.onClick && props.onClick(props.tag)}
            className='m-1 flex cursor-pointer items-center rounded-lg border bg-white p-1 px-2 text-xs text-slate-800 shadow-sm transition duration-200 hover:bg-gray-100 hover:text-red-700'
        >
            <div>{props.tag}</div>
        </div>
    ) : (
        <Link href={`/blog?tags=${props.tag}`}>
            <div className='m-1 flex items-center rounded-lg border bg-white p-1 px-2 text-xs text-slate-800 shadow-sm transition duration-200 hover:bg-gray-100 hover:text-red-700 hover:underline'>
                <div>{props.tag}</div>
            </div>
        </Link>
    );
};

export default Tag;
