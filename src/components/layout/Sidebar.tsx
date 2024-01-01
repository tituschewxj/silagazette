import Link from 'next/link';

const Sidebar = (props: { onClick: () => void }) => {
    return (
        <nav className='absolute right-0 z-30 flex flex-col gap-8 rounded-xl bg-red-900 p-10'>
            <Link
                href='/'
                className='hover:text-gray-300'
                onClick={props.onClick}
            >
                Home
            </Link>
            <Link
                href='/blog'
                className='hover:text-gray-300'
                onClick={props.onClick}
            >
                Blog
            </Link>
            <Link
                href='/about'
                className='hover:text-gray-300'
                onClick={props.onClick}
            >
                About
            </Link>
            <Link
                href='/contact'
                className='hover:text-gray-300'
                onClick={props.onClick}
            >
                Contact
            </Link>
        </nav>
    );
};

export default Sidebar;
