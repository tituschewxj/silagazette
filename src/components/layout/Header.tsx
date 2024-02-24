'use client';

import Link from 'next/link';
import { useState } from 'react';
import Dropdown from './Dropdown';

const Header = () => {
    const [state, setState] = useState({ isDropdownActive: false });

    return (
        <header className='z-20 bg-gradient-to-r from-violet-800 via-purple-800 to-fuchsia-950 p-4 text-white shadow-md'>
            <div className='container mx-auto flex items-center justify-between'>
                <Link href='/' className='flex items-center text-lg font-bold'>
                    <img
                        className='h-10 rounded-md'
                        src='/SILA_enlarged_logo.jpg'
                        alt='Sila Logo'
                    />
                    <div className='px-2 font-serif text-lg font-extralight tracking-tight sm:text-xl md:text-2xl lg:text-3xl'>
                        SILA Gazette
                    </div>
                </Link>

                {/* <!-- Navigation --> */}
                <nav className='hidden items-center space-x-4 sm:flex'>
                    <Link href='/blog' className='hover:text-gray-300'>
                        Blog
                    </Link>
                    <Link href='/about' className='hover:text-gray-300'>
                        About
                    </Link>
                    <Link href='/contact' className='hover:text-gray-300'>
                        Contact
                    </Link>
                    {/* TODO: Search feature */}
                    {/* <i className='bx bx-search text-xl'></i> */}
                </nav>
                <div className='relative sm:hidden'>
                    <i
                        className={`bx text-2xl transition-all ${
                            state.isDropdownActive ? 'bx-x' : 'bx-menu'
                        }`}
                        onClick={() =>
                            setState({
                                isDropdownActive: !state.isDropdownActive,
                            })
                        }
                    ></i>
                    <Dropdown
                        isActive={state.isDropdownActive}
                        onClick={() =>
                            setState({
                                isDropdownActive: false,
                            })
                        }
                    ></Dropdown>
                </div>
            </div>
        </header>
    );
};

export default Header;
