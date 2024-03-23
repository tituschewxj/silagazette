import Link from 'next/link';

const Dropdown = (props: { onClick: () => void; isActive: boolean }) => {
    return (
        // NOTE: height of dropdown is hardcoded!
        <nav
            className={`absolute right-0 z-30 flex flex-shrink flex-col gap-10 overflow-hidden rounded-xl bg-purple-900 transition-all duration-200 ${
                props.isActive ? 'h-[21.5em] p-8' : 'h-0 p-0 opacity-0'
            }`}
        >
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
                href='/events'
                className='hover:text-gray-300'
                onClick={props.onClick}
            >
                Events
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

export default Dropdown;
