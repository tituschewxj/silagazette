import Link from 'next/link';

const LinkText = (props: {
    link?: string;
    text: string;
    className?: string;
}) => {
    return props.link ? (
        <Link href={props.link} className={props.className}>
            <div className='inline underline transition duration-200 hover:text-red-700 hover:decoration-2'>
                {props.text}
            </div>
        </Link>
    ) : (
        <>{props.text}</>
    );
};
export default LinkText;
