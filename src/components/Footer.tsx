const Footer = () => {
    return (
        <footer className='bg-gray-800 text-white p-6 pt-14'>
            <div className='container mx-auto flex justify-around items-center'>
                <div>
                    <h1 className='text-lg font-bold'>
                        SMU-ILA Student Chapter
                    </h1>
                    <p className='text-sm text-slate-200'>
                        Insert a brief description of your club.
                    </p>
                </div>

                {/* Navigation links */}
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

                {/* Social media links */}
                <div>
                    <p className='text-sm p-2'>Follow Us:</p>
                    <div className='flex space-x-2 p-2'>
                        {/* TODO: Add links to social media */}
                        <a
                            href='#'
                            className='text-xl text-gray-300 hover:text-white'
                        >
                            <i className='bx-fw bx bxl-facebook-square'></i>
                        </a>
                        <a
                            href='#'
                            className='text-xl text-gray-300 hover:text-white'
                        >
                            <i className='bx-fw bx bxl-linkedin'></i>
                        </a>
                        <a
                            href='#'
                            className='text-xl text-gray-300 hover:text-white'
                        >
                            <i className='bx-fw bx bxl-instagram'></i>
                        </a>
                    </div>
                </div>
            </div>
            {/* Copyright */}
            {/* TODO: include statement about the rights reserved or provide a link to a more detailed terms of use or copyright policy page if applicable */}
            <div className='text-center text-xs text-slate-400 mt-14 mb-2'>
                ©2023 Singapore Management University-International Law
                Association Student Chapter. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
