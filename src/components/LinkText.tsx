import Link from 'next/link';

const LinkText = (props: {
    link?: string;
    text: string;
    className?: string;
    new_tab?: boolean;
}) => {
    return props.link ? (
        <Link
            href={props.link}
            className={props.className}
            target={props.new_tab ? '_blank' : ''}
        >
            <div className='inline underline transition-all duration-200 hover:text-purple-700 hover:decoration-2'>
                {props.text}
            </div>
        </Link>
    ) : (
        <>{props.text}</>
    );
};
export default LinkText;
