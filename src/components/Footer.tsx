import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='bg-gray-800 p-6 pt-14 text-white'>
            <div className='container mx-auto flex items-center justify-around'>
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
                        <Link href='/' className='hover:text-gray-300'>
                            Home
                        </Link>
                    </p>
                    <p className='text-sm'>
                        <Link href='/blog' className='hover:text-gray-300'>
                            Blog
                        </Link>
                    </p>
                    <p className='text-sm'>
                        <Link href='/about' className='hover:text-gray-300'>
                            About Us
                        </Link>
                    </p>
                    <p className='text-sm'>
                        <Link href='/contact' className='hover:text-gray-300'>
                            Contact
                        </Link>
                    </p>
                </div>

                {/* Social media links */}
                <div>
                    <p className='p-2 text-sm'>Follow Us:</p>
                    <div className='flex space-x-2 p-2'>
                        {/* TODO: Add links to social media */}
                        <Link
                            href='#'
                            className='text-xl text-gray-300 hover:text-white'
                        >
                            <i className='bx-fw bx bxl-facebook-square'></i>
                        </Link>
                        <Link
                            href='#'
                            className='text-xl text-gray-300 hover:text-white'
                        >
                            <i className='bx-fw bx bxl-linkedin'></i>
                        </Link>
                        <Link
                            href='#'
                            className='text-xl text-gray-300 hover:text-white'
                        >
                            <i className='bx-fw bx bxl-instagram'></i>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Copyright */}
            {/* TODO: include statement about the rights reserved or provide a link to a more detailed terms of use or copyright policy page if applicable */}
            <div className='mb-2 mt-14 text-center text-xs text-slate-400'>
                ©2023 Singapore Management University-International Law
                Association Student Chapter. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
