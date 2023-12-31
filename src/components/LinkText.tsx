import Link from 'next/link';

const LinkText = (props: { link?: string; text: string }) => {
    return (
        <>
            {props.link ? (
                <Link href={props.link} className='text-sm text-slate-500'>
                    <div className='absolute z-20 inline underline transition duration-200 hover:text-red-700'>
                        {props.text}
                    </div>
                </Link>
            ) : (
                <>{props.text}</>
            )}
        </>
    );
};
export default LinkText;
