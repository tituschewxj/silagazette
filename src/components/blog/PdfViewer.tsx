'use client';

import { PostData } from '@/types/PostMetadata';
import Button from '../Button';
import { useState } from 'react';

const PdfViewer = (props: { post: PostData }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* NOTE: not responsive: need new page in some sense...*/}
            {props.post.data.pdf_link && (
                <Button
                    className='py-5 text-sm'
                    onClick={() => {
                        console.log(window.matchMedia('(max-width: 640px)'));
                        if (window.matchMedia('(max-width: 640px)').matches) {
                            // open in new window
                            console.log('new window');
                            window.open(props.post.data.pdf_link);
                        } else {
                            setIsOpen(true);
                        }
                    }}
                    // href={post.data.pdf_link}
                    target='_blank'
                >
                    View PDF version of this article
                </Button>
            )}
            {/* TODO: add loading indicator */}
            <div hidden={!isOpen}>
                <div
                    onClick={() => {
                        setIsOpen(false);
                    }}
                    className='fixed inset-x-0 inset-y-0 z-10 hidden items-center rounded-md backdrop-blur-sm sm:flex'
                >
                    <iframe
                        src={props.post.data.pdf_link}
                        className='z-10 mx-auto aspect-auto h-[85%] w-full max-w-3xl rounded-2xl border-white bg-white p-2 shadow-2xl'
                        loading='lazy'
                    ></iframe>
                </div>
            </div>
        </>
    );
};

export default PdfViewer;
