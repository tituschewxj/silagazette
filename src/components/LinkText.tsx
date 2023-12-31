import Link from 'next/link';

const LinkText = (props: { link?: string; text: string }) => {
    return props.link ? (
        <Link href={props.link}>
            <div className='absolute z-20 inline text-slate-500 underline transition duration-200 hover:text-red-700'>
                {props.text}
            </div>
        </Link>
    ) : (
        <>{props.text}</>
    );
};
export default LinkText;
