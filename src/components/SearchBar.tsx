import { SearchData } from '@/types/SearchData';
import TagsList from './TagsList';
import { useEffect, useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';

const SearchBar = (props: { allTags: Set<string> }) => {
    // FIXME: refactor perf
    // TODO: sort tags by frequency
    const router = useRouter();
    const [tags, setTags] = useState<string[]>([]);
    const [searchData, setSearchData] = useState<SearchData>({
        query: '',
        tags: [],
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchData.query.trim() == '') return;
        router.push(`/blog?query=${searchData.query.trim()}`);
        setSearchData({ query: '', tags: [...searchData.tags] });
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchData({
            ...searchData,
            query: e.target.value,
        });
    };

    useEffect(() => {
        if (searchData.query.length < 1) {
            setTags([]);
            return;
        }
        const tags = Array.from(props.allTags)
            .filter((tag) => tag.includes(searchData.query))
            .sort()
            .slice(0, 5);
        setTags([...tags]);
    }, [searchData]);

    return (
        <div className='my-8 rounded-lg border p-8 shadow-md'>
            <form className='group relative' onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Search'
                    onChange={handleChange}
                    value={searchData.query}
                    className='z-20 w-full cursor-pointer rounded-full bg-gray-100 p-2 pl-9 text-sm text-gray-700 shadow-inner outline-none ring-1 ring-inset ring-gray-300 transition duration-200  placeholder:text-gray-400 hover:bg-gray-50 focus:bg-gray-50 focus:ring-2 focus:ring-inset  focus:ring-red-600'
                ></input>
                <i className='bx bx-search pointer-events-none absolute inset-2 z-20 ml-1 text-xl text-slate-400 '></i>

                {/* Dropdown content */}
                <div
                    hidden={tags.length == 0}
                    className='invisible relative hover:visible group-focus-within:visible'
                >
                    <div className='absolute top-3 flex w-full rounded-3xl border bg-white p-2 pt-0 shadow-lg '>
                        {/* TODO: on click: put tag in search bar or somewhere */}
                        <TagsList tags={tags} onClick={() => {}}></TagsList>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default SearchBar;
