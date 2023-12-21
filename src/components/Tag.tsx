import Link from 'next/link';

const Tag = (props: { tag: string }) => {
    return (
        <Link href={`/blog?tags=${props.tag}`}>
            <div className='hover: m-1 rounded-lg border p-1 text-xs text-slate-800 shadow-sm hover:bg-gray-100'>
                {props.tag}
            </div>
        </Link>
    );
};

export default Tag;
