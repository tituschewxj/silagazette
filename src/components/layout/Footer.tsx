import { ACCOUNTS } from '@/constants';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='mt-6 bg-gray-800 p-6 text-white sm:mt-8 sm:pt-14'>
            <div className='container mx-auto flex items-center justify-around gap-10'>
                <div>
                    <h1 className='text-lg font-bold'>SILA Gazette</h1>
                    <p className='text-xs text-slate-200'>
                        SILA (Singapore) is the inaugural Student Chapter of the
                        International Law Association (ILA) Singapore Branch -
                        the first in the world!
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
                            About
                        </Link>
                    </p>
                    <p className='text-sm'>
                        <Link href='/contact' className='hover:text-gray-300'>
                            Contact
                        </Link>
                    </p>
                </div>

                {/* Social media links */}
                <div className='hidden sm:block'>
                    <p className='p-2 text-sm'>Follow Us:</p>
                    <div className='flex space-x-2 p-2'>
                        <Link
                            href={ACCOUNTS.TELEGRAM_URL}
                            target='_blank'
                            className='text-xl text-gray-300 hover:text-white'
                        >
                            <i className='bx-fw bx bxl-telegram'></i>
                        </Link>
                        <Link
                            href={ACCOUNTS.LINKEDIN_URL}
                            target='_blank'
                            className='text-xl text-gray-300 hover:text-white'
                        >
                            <i className='bx-fw bx bxl-linkedin'></i>
                        </Link>
                        <Link
                            href={ACCOUNTS.INSTAGRAM_URL}
                            target='_blank'
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
                ©2024 SILA Gazette. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
