const Header = () => {
    return (
        <header className='bg-gradient-to-r from-rose-800 via-red-800 to-red-900 p-4 text-white'>
            <div className='container mx-auto flex items-center justify-between'>
                <a href='/' className='flex items-center text-lg font-bold'>
                    <img className='h-10' src='/SMU ILA temporary logo.png' />
                    <div className='px-2 font-serif text-3xl font-extralight tracking-tight'>
                        Singapore International Law Gazette
                    </div>
                </a>

                {/* <!-- Navigation --> */}
                <nav className='space-x-4'>
                    <a href='/blog' className='hover:text-gray-300'>
                        Blog
                    </a>
                    <a href='/about' className='hover:text-gray-300'>
                        About
                    </a>
                    {/* <a href='/services' className='hover:text-gray-300'>
                        Services
                    </a> */}
                    <a href='/contact' className='hover:text-gray-300'>
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
