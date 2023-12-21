import { SearchData } from '@/types/SearchData';
import TagsList from './TagsList';
import {
    ChangeEventHandler,
    FormEventHandler,
    useEffect,
    useState,
} from 'react';

const SearchBar = (props: {
    handleSubmit: FormEventHandler<HTMLFormElement>;
    handleChange: ChangeEventHandler<HTMLInputElement>;
    searchData: SearchData;
    allTags: Set<string>;
}) => {
    // FIXME: refactor perf
    const [tags, setTags] = useState<string[]>([]);

    useEffect(() => {
        if (props.searchData.query.length < 1) {
            setTags([]);
            return;
        }
        const tags = Array.from(props.allTags)
            .filter((tag) => tag.includes(props.searchData.query))
            .sort()
            .slice(0, 5);
        setTags([...tags]);
    }, [props.searchData]);

    return (
        <div className='my-8 rounded-lg border p-8 shadow-md'>
            <form className='group relative' onSubmit={props.handleSubmit}>
                <input
                    type='text'
                    placeholder='Search'
                    onChange={props.handleChange}
                    value={props.searchData.query}
                    className='z-20 w-full cursor-pointer rounded-full bg-gray-100 p-2 pl-9 text-sm text-gray-700 shadow-inner outline-none ring-1 ring-inset ring-gray-300 transition duration-200  placeholder:text-gray-400 hover:bg-gray-50 focus:bg-gray-50 focus:ring-2 focus:ring-inset  focus:ring-red-600'
                ></input>
                <i className='bx bx-search pointer-events-none absolute inset-2 z-20 ml-1 text-xl text-slate-400 '></i>

                {/* Dropdown content */}
                <div hidden={tags.length == 0} className='relative'>
                    <div className='absolute top-3 flex w-full rounded-3xl border bg-white p-2 pt-0 shadow-lg'>
                        <TagsList tags={tags} onClick={() => {}}></TagsList>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default SearchBar;
