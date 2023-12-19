const Footer = () => {
    return (
        <footer className='bg-gray-800 text-white p-6'>
            <div className='container mx-auto flex justify-between items-center'>
                <div>
                    <h1 className='text-lg font-bold'>Your CCA Name</h1>
                    <p className='text-sm'>A brief description of your CCA.</p>
                </div>
                <div className='space-y-2'>
                    <p className='text-sm'>
                        <a href='/' className='hover:text-gray-300'>
                            Home
                        </a>
                    </p>
                    <p className='text-sm'>
                        <a href='/blog' className='hover:text-gray-300'>
                            Blog
                        </a>
                    </p>
                    <p className='text-sm'>
                        <a href='/about' className='hover:text-gray-300'>
                            About Us
                        </a>
                    </p>
                    <p className='text-sm'>
                        <a href='/contact' className='hover:text-gray-300'>
                            Contact
                        </a>
                    </p>
                </div>
                <div>
                    <p className='text-sm'>Follow Us:</p>
                    <div className='flex space-x-2'>
                        {/* TODO: Add links to social media */}
                        <a
                            href='#'
                            className='text-sm text-gray-300 hover:text-white'
                        >
                            <i className='bx-fw bx bxl-facebook-square'></i>
                        </a>
                        <a
                            href='#'
                            className='text-sm text-gray-300 hover:text-white'
                        >
                            <i className='bx-fw bx bxl-linkedin'></i>
                        </a>
                        <a
                            href='#'
                            className='text-sm text-gray-300 hover:text-white'
                        >
                            <i className='bx-fw bx bxl-instagram'></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
