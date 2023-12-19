const Header = () => {
    return (
        <header className='bg-red-900 text-white p-4'>
            <div className='container mx-auto flex justify-between items-center'>
                <a href='/' className='text-lg font-bold'>
                    <img className='h-16' src='SMU ILA temporary logo.png' />
                    <div>SMU-ILA Student Chapter</div>
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
