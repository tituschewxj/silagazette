import Link from 'next/link';

const Button = (props: {
    href: string;
    target?: string;
    children?: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={props.className}>
            <Link
                href={props.href}
                target={props.target}
                className='rounded-full bg-white px-4 py-2 font-semibold text-red-700  shadow-md transition duration-200 hover:bg-gray-100 hover:text-red-600'
            >
                {props.children}
            </Link>
        </div>
    );
};

export default Button;
