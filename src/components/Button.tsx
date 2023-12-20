import Link from 'next/link';

const Button = (props: { href: string; children?: React.ReactNode }) => {
    return (
        <div className='mx-auto py-8 text-center'>
            <Link
                href={props.href}
                className='rounded-full bg-white px-4 py-2 font-semibold text-red-700 shadow-md transition duration-200 hover:bg-gray-100'
            >
                {props.children}
            </Link>
        </div>
    );
};

export default Button;
