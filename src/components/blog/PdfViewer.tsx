'use client';

import { PostData } from '@/types/PostMetadata';
import Button from '../Button';
import { useState } from 'react';
import Loading from '../Loading';

const PdfViewer = (props: { post: PostData }) => {
    const [state, setState] = useState({ isOpen: false, hasLoaded: false });

    return (
        <>
            {/* NOTE: not responsive: need new page in some sense...*/}
            {props.post.data.pdf_link && (
                <Button
                    className='py-5 text-sm'
                    onClick={() => {
                        window.matchMedia('(max-width: 640px)').matches
                            ? window.open(props.post.data.pdf_link) // open in new window
                            : setState({ ...state, isOpen: true });
                    }}
                    // href={post.data.pdf_link}
                    target='_blank'
                >
                    View PDF version of this article
                </Button>
            )}

            <div hidden={!state.isOpen}>
                <div
                    onClick={() => setState({ ...state, isOpen: false })}
                    className='fixed inset-x-0 inset-y-0 z-10 hidden items-center rounded-md backdrop-blur-sm sm:flex'
                >
                    <div className='relative z-10 mx-auto aspect-auto h-[85%] w-full max-w-3xl rounded-2xl border-white bg-slate-50 p-2 align-middle shadow-2xl'>
                        <Button
                            className='absolute right-[-1.5em] top-[-0.5em] z-20'
                            onClick={() =>
                                setState({ ...state, isOpen: false })
                            }
                        >
                            <i className='bx bx-x text-xl'></i>
                        </Button>
                        {!state.hasLoaded && (
                            <div className='mx-auto flex h-full items-center justify-center'>
                                <Loading></Loading>
                            </div>
                        )}
                        <iframe
                            src={props.post.data.pdf_link}
                            className='h-full w-full rounded-xl'
                            loading='lazy'
                            onLoad={() =>
                                setState({ ...state, hasLoaded: true })
                            }
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PdfViewer;
