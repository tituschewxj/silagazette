'use client';

import { PostData } from '@/types/PostMetadata';
import Button from '../Button';
import { useState } from 'react';
import Loading from '../Loading';

const PdfViewer = (props: { post: PostData }) => {
    const [state, setState] = useState({ isOpen: false, hasLoaded: false });

    return (
        <>
            {props.post.data.pdf_link && (
                <Button
                    className='py-5 text-sm'
                    onClick={() => {
                        window.matchMedia('(max-width: 640px)').matches
                            ? window.open(props.post.data.pdf_link) // open in new window on small screens
                            : setState({ ...state, isOpen: true });
                    }}
                    target='_blank'
                >
                    View PDF version of this article
                </Button>
            )}

            <div
                onClick={() => setState({ ...state, isOpen: false })}
                className={`fixed inset-x-0 inset-y-0 z-10 hidden items-center justify-center rounded-md backdrop-blur-sm transition-all duration-200 sm:flex ${
                    state.isOpen
                        ? ' pointer-events-auto opacity-100'
                        : ' pointer-events-none opacity-0'
                }`}
            >
                <div
                    className={`relative z-10 mx-auto aspect-auto max-w-3xl rounded-2xl border-white bg-slate-50 align-middle shadow-2xl transition-all duration-200 ${
                        state.isOpen ? 'h-[85%] w-full p-2' : 'h-0 w-0 p-0'
                    }`}
                >
                    <Button
                        className='absolute right-[-1.5em] top-[-0.5em] z-20'
                        onClick={() => setState({ ...state, isOpen: false })}
                    >
                        <i className='bx bx-x text-xl'></i>
                    </Button>
                    {!state.hasLoaded && (
                        <div className='mx-auto flex h-full items-center justify-center'>
                            <Loading></Loading>
                        </div>
                    )}
                    <iframe
                        hidden={!state.isOpen}
                        src={props.post.data.pdf_link}
                        className={`h-full w-full rounded-xl transition-all duration-200 ${
                            state.hasLoaded && state.isOpen
                                ? 'opacity-100'
                                : 'opacity-0'
                        }`}
                        loading='lazy'
                        onLoad={() => setState({ ...state, hasLoaded: true })}
                    ></iframe>
                </div>
            </div>
        </>
    );
};

export default PdfViewer;
