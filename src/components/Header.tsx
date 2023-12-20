import Link from 'next/link';

const Header = () => {
    return (
        <header className='bg-gradient-to-r from-rose-800 via-red-800 to-red-900 p-4 text-white shadow-md'>
            <div className='container mx-auto flex items-center justify-between'>
                <Link href='/' className='flex items-center text-lg font-bold'>
                    <img className='h-10' src='/SMU ILA temporary logo.png' />
                    <div className='px-2 font-serif text-3xl font-extralight tracking-tight'>
                        Singapore International Law Gazette
                    </div>
                </Link>

                {/* <!-- Navigation --> */}
                <nav className='flex items-center space-x-4'>
                    <Link href='/blog' className='hover:text-gray-300'>
                        Blog
                    </Link>
                    <Link href='/about' className='hover:text-gray-300'>
                        About
                    </Link>
                    <Link href='/contact' className='hover:text-gray-300'>
                        Contact
                    </Link>
                    <i className='bx bx-search text-xl'></i>
                </nav>
            </div>
        </header>
    );
};

export default Header;
