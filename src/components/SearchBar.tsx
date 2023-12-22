import { SearchData } from '@/types/SearchData';
import TagsList from './TagsList';
import { useEffect, useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import Tag from './Tag';
import getTagsParams from './getTagsParams';

const SearchBar = (props: { allTags: Set<string> }) => {
    // FIXME: refactor perf
    // TODO: sort tags by frequency
    const router = useRouter();
    const [dropdownTags, setDropdownTags] = useState<string[]>([]);
    const [searchData, setSearchData] = useState<SearchData>({
        query: '',
        tags: [],
    });

    useEffect(() => {
        if (searchData.query.trim().length < 1) {
            setDropdownTags([]);
            return;
        }

        // Filter dropdown tags that match the last word in the query
        const wordsQuery = searchData.query
            .split(' ')
            .filter((word) => word.trim() != '')
            .map((word) => word.trim());
        const selectedTags = new Set(searchData.tags);
        const dropdownTags = Array.from(props.allTags)
            .filter((tag) => tag.includes(wordsQuery.slice(-1)[0]))
            .filter((tag) => !selectedTags.has(tag))
            .sort()
            .slice(0, 5);
        setDropdownTags([...dropdownTags]);
    }, [searchData]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchData.query.trim() == '' && searchData.tags.length == 0)
            return;
        const tagsParams = getTagsParams(searchData.tags);
        router.push(
            `/blog?${
                searchData.query.trim() != '' ? `query=${searchData.query}` : ''
            }${
                searchData.query.trim() != '' && searchData.tags.length != 0
                    ? '&&'
                    : ''
            }${tagsParams}`,
        );
        setSearchData({ query: '', tags: [] });
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchData({
            ...searchData,
            query: e.target.value,
        });
    };
    const selectTag = (tag: string) => {
        setSearchData({
            query: '',
            tags: [...searchData.tags, tag],
        });
    };
    const removeTag = (tag: string) => {
        const removeIdx = searchData.tags.indexOf(tag);
        searchData.tags.splice(removeIdx, 1);
        setSearchData({
            ...searchData,
        });
    };

    return (
        <div className='my-8 rounded-lg border p-8 shadow-md'>
            <form className='group relative' onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Search'
                    onChange={handleChange}
                    value={searchData.query}
                    className='z-20 w-full cursor-pointer rounded-full bg-gray-100 p-2 pl-9 text-sm text-gray-700 shadow-inner outline-none ring-1 ring-inset ring-gray-300 transition duration-200  placeholder:text-gray-400 hover:bg-gray-50 focus:bg-gray-50 focus:ring-2 focus:ring-inset focus:ring-red-600'
                ></input>
                <i className='bx bx-search pointer-events-none absolute inset-2 z-20 ml-1 text-xl text-slate-400 '></i>
                {/* Custom tag list */}
                <TagsList
                    tags={searchData.tags}
                    onRemove={removeTag}
                ></TagsList>

                {/* Dropdown content */}
                <div
                    hidden={dropdownTags.length == 0}
                    className='invisible relative hover:visible group-focus-within:visible'
                >
                    <div className='absolute top-2 w-full rounded-3xl border bg-white p-1 shadow-lg '>
                        <TagsList
                            tags={dropdownTags}
                            onClick={selectTag}
                            icon
                        ></TagsList>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default SearchBar;
