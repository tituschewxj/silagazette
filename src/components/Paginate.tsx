import { Dispatch, SetStateAction } from 'react';

const Paginate = (props: {
    firstPage: number;
    currentPage: number;
    setPage: Dispatch<SetStateAction<number>>;
    lastPage: number;
}) => {
    return (
        props.firstPage != props.lastPage && (
            <div className='mt-auto flex  justify-center  '>
                <div className='flex flex-row -space-x-px rounded-lg text-sm shadow-md '>
                    {/* Previous page */}
                    {props.currentPage != props.firstPage && (
                        <div
                            onClick={() => props.setPage(props.currentPage - 1)}
                            className=' flex h-10 cursor-pointer items-center justify-center rounded-s-lg border border-gray-300  px-3  text-slate-500 transition duration-200 hover:bg-gray-100 hover:text-slate-700'
                        >
                            <i className='bx bx-chevron-left text-lg'></i>
                        </div>
                    )}
                    <PaginateNumber
                        firstPage={props.firstPage}
                        value={props.currentPage - 2}
                        lastPage={props.lastPage}
                        setPage={props.setPage}
                    />
                    <PaginateNumber
                        firstPage={props.firstPage}
                        value={props.currentPage - 1}
                        lastPage={props.lastPage}
                        setPage={props.setPage}
                    />
                    <PaginateNumber
                        firstPage={props.firstPage}
                        value={props.currentPage}
                        lastPage={props.lastPage}
                        setPage={props.setPage}
                        selected
                    />
                    <PaginateNumber
                        firstPage={props.firstPage}
                        value={props.currentPage + 1}
                        lastPage={props.lastPage}
                        setPage={props.setPage}
                    />
                    <PaginateNumber
                        firstPage={props.firstPage}
                        value={props.currentPage + 2}
                        lastPage={props.lastPage}
                        setPage={props.setPage}
                    />
                    {/* Next page */}
                    {props.currentPage != props.lastPage && (
                        <div
                            onClick={() => props.setPage(props.currentPage + 1)}
                            className=' flex h-10 cursor-pointer items-center justify-center rounded-e-lg border border-gray-300  px-3  text-slate-500 transition duration-200 hover:bg-gray-100 hover:text-slate-700'
                        >
                            <i className='bx bx-chevron-right text-lg'></i>
                        </div>
                    )}
                </div>
            </div>
        )
    );
};

// The numbered button in the page indexes
const PaginateNumber = (props: {
    firstPage: number;
    value: number;
    lastPage: number;
    setPage: Dispatch<SetStateAction<number>>;
    selected?: boolean;
}) => {
    return props.value < props.firstPage || props.value > props.lastPage ? (
        <></>
    ) : props.selected ? (
        <div className='flex h-10 items-center border  border-gray-300 bg-gray-100  px-4  text-red-700 shadow-md transition duration-200 hover:bg-gray-200 hover:text-red-600 '>
            {props.value}
        </div>
    ) : (
        <div
            onClick={() => props.setPage(props.value)}
            className=' flex h-10 cursor-pointer items-center border border-gray-300  px-4  text-slate-500 transition duration-200 hover:bg-gray-100 hover:text-slate-700 '
        >
            {props.value}
        </div>
    );
};

export default Paginate;
